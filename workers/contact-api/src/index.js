/**
 * Cloudflare Worker: MDA Contact Form API
 * Endpoint: POST /contact
 * Flow: CORS & Origin -> Honeypot -> Turnstile Verify -> D1 Insert -> Discord Webhook (ctx.waitUntil)
 */

function parseAllowedOrigins(env) {
  const raw = env.ALLOWED_ORIGINS || "https://mekongdeltaagri.com";
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

function getCorsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = parseAllowedOrigins(env);
  const allowOrigin = allowed.includes(origin) ? origin : allowed[0];
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

function jsonResponse(body, status, corsHeaders) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...corsHeaders,
    },
  });
}

async function verifyTurnstile(token, ip, secretKey) {
  if (!token || !secretKey) return false;
  const formData = new FormData();
  formData.append("secret", secretKey);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: formData,
  });
  if (!res.ok) return false;
  const outcome = await res.json();
  return outcome.success === true;
}

async function notifyAndMarkSent(env, leadId, payload, ip) {
  if (!env.DISCORD_WEBHOOK_URL) return;

  const embed = {
    title: "Khách hàng mới đăng ký tư vấn — MDA Hub",
    color: 0x1b4332,
    fields: [
      { name: "Họ và tên", value: payload.full_name, inline: true },
      { name: "Email", value: payload.email, inline: true },
      { name: "SĐT / Zalo", value: payload.phone || "Không cung cấp", inline: true },
      { name: "Công ty / Mặt hàng", value: payload.company || "Không cung cấp", inline: true },
      { name: "Nội dung yêu cầu", value: payload.message.slice(0, 1000), inline: false },
    ],
    footer: { text: `Lead #${leadId} • IP: ${ip || "unknown"}` },
    timestamp: new Date().toISOString(),
  };

  try {
    const res = await fetch(env.DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds: [embed] }),
    });
    if (res.ok && leadId) {
      await env.DB.prepare("UPDATE contacts SET is_notified = 1 WHERE id = ?")
        .bind(leadId)
        .run();
    }
  } catch (err) {
    console.error("Discord notify failed:", err);
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const corsHeaders = getCorsHeaders(request, env);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    if (url.pathname !== "/contact" || request.method !== "POST") {
      return jsonResponse({ error: "Not Found" }, 404, corsHeaders);
    }

    const origin = request.headers.get("Origin") || "";
    const allowed = parseAllowedOrigins(env);
    if (origin && !allowed.includes(origin)) {
      return jsonResponse({ error: "Origin không được phép" }, 403, corsHeaders);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: "Dữ liệu JSON không hợp lệ" }, 400, corsHeaders);
    }

    // 1. Honeypot check: bot tự điền trường ẩn website_url -> bỏ qua êm, không ghi DB
    if (typeof body.website_url === "string" && body.website_url.trim() !== "") {
      return jsonResponse({ success: true }, 200, corsHeaders);
    }

    const full_name = String(body.full_name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const company = String(body.company || "").trim();
    const message = String(body.message || "").trim();
    const turnstileToken = String(body.turnstileToken || "").trim();

    if (!full_name || !email || !message) {
      return jsonResponse({ error: "Thiếu thông tin bắt buộc" }, 400, corsHeaders);
    }

    const ip = request.headers.get("CF-Connecting-IP") || "";

    // 2. Verify Turnstile Token (Server-side)
    const isHuman = await verifyTurnstile(turnstileToken, ip, env.TURNSTILE_SECRET_KEY);
    if (!isHuman) {
      return jsonResponse({ error: "Xác thực bảo mật thất bại" }, 403, corsHeaders);
    }

    // 3. Lưu dữ liệu gốc vào Cloudflare D1 trước khi bắn thông báo
    const insertResult = await env.DB.prepare(
      "INSERT INTO contacts (full_name, email, phone, company, message, ip_address) VALUES (?, ?, ?, ?, ?, ?)"
    )
      .bind(full_name, email, phone || null, company || null, message, ip || null)
      .run();

    const leadId = insertResult?.meta?.last_row_id ?? null;

    // 4. Bắn thông báo ngầm qua Discord Webhook (không làm chậm response)
    ctx.waitUntil(
      notifyAndMarkSent(env, leadId, { full_name, email, phone, company, message }, ip)
    );

    return jsonResponse({ success: true }, 200, corsHeaders);
  },
};
