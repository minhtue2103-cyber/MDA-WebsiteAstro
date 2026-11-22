# TECHNICAL SPEC: CONTACT FORM BACKEND (STATIC ASTRO WEBSITE)

## 1. Mục tiêu & Ràng buộc kiến trúc

- **Frontend:** Giữ nguyên 100% static HTML/JS (Astro), không dùng PHP hay backend server truyền thống.
- **Chi phí & Quota:** 0đ/tháng, không dùng Form SaaS bên thứ ba (tránh giới hạn lượt gửi), không dùng Gmail/Google Apps Script (tránh vượt quota email/ngày và lộ endpoint).
- **Bảo mật & Chống mất dữ liệu:** Lưu trữ dữ liệu gốc tại Edge Database trước khi bắn thông báo; giấu toàn bộ Webhook URL và API Key ở phía server.

## 2. Kiến trúc hệ thống (Cloudflare Edge Stack)

```plaintext
[Astro Static Form]
       │  (POST JSON + Turnstile Token)
       ▼
[Cloudflare Worker: api.<domain>/contact]
       ├── 1. Kiểm tra CORS, Honeypot & Verify Turnstile Token (Server-side)
       ├── 2. Ghi dữ liệu gốc vào Cloudflare D1 (SQLite Edge) ──► [Lưu trữ & Đối soát CSV]
       └── 3. Bắn thông báo ngầm (ctx.waitUntil) ──► [Discord Webhook / Cloudflare Email]
```

- **Tiếp nhận & Xử lý:** Cloudflare Workers (Free tier: 100.000 requests/ngày).
- **Lưu trữ gốc (Single Source of Truth):** Cloudflare D1 (Free tier: 100.000 lượt ghi/ngày), đảm bảo không mất lead nếu kênh thông báo gặp sự cố mạng.
- **Chống spam:** Cloudflare Turnstile (xác thực token ở Worker) + trường ẩn Honeypot + Rate Limit theo IP.
- **Kênh thông báo tức thì:**
  - **Kênh chính:** Discord Webhook Embed (URL lưu trong Worker Encrypted Secrets, không lộ trên trình duyệt).
  - **Kênh phụ (tùy chọn):** Cloudflare Email Routing (`send_email` binding) gửi trực tiếp về email nội bộ, không qua SMTP/Gmail.

## 3. Cấu trúc dữ liệu (Cloudflare D1 Schema)

```sql
CREATE TABLE contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  ip_address TEXT,
  is_notified INTEGER DEFAULT 0,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

## 4. API Contract (Giao tiếp giữa Astro & Worker)

- **Endpoint:** `POST https://api.<ten-mien>/contact`
- **Headers:** `Content-Type: application/json`
- **Request Payload:**

```json
{
  "full_name": "Nguyễn Văn A",
  "company": "Công ty ABC",
  "email": "contact@abc.com",
  "phone": "0901234567",
  "message": "Nội dung yêu cầu tư vấn",
  "website_url": "",
  "turnstileToken": "<token_tu_widget_turnstile>"
}
```

> **Lưu ý:** `website_url` là trường Honeypot ẩn bằng CSS; nếu có giá trị thì Worker loại bỏ request.

- **Response:**

| Mã | Body | Ý nghĩa |
|----|------|---------|
| `200 OK` | `{ "success": true }` | Thành công |
| `400 Bad Request` | `{ "error": "Thiếu thông tin bắt buộc" }` | Thiếu trường bắt buộc |
| `403 Forbidden` | `{ "error": "Xác thực bảo mật thất bại" }` | Turnstile thất bại |

## 5. Danh sách việc cần triển khai (Action Items cho Dev/Leader)

1. **Cloudflare Dashboard:**
   - Tạo Turnstile Widget (lấy `Site Key` gắn vào Astro và `Secret Key` lưu vào Worker).
   - Tạo D1 Database và chạy lệnh SQL khởi tạo bảng `contacts`.
   - Tạo Discord Webhook URL trên kênh nhận lead nội bộ (và bật Email Routing nếu cần nhận qua mail).
2. **Backend (Cloudflare Worker):**
   - Khởi tạo Worker gắn binding `DB` (D1) và `SEND_EMAIL` (nếu dùng email).
   - Nạp biến bí mật: `TURNSTILE_SECRET_KEY`, `DISCORD_WEBHOOK_URL`.
   - Cấu hình CORS chỉ cho phép domain chính thức của website gọi API + bật WAF Rate Limiting (tối đa 5 request/10 phút/IP).
3. **Frontend (Astro):**
   - Nhúng script Turnstile và gọi `fetch()` bằng Vanilla JS tới endpoint của Worker khi submit form.
