---
title: Rủi ro rò rỉ dữ liệu khi nhân viên XNK tự ý upload chứng từ lên AI
description: Nhân viên XNK tải hợp đồng, tờ khai lên AI công cộng có thể bị phạt tới 5% doanh thu theo Luật 91/2025/QH15 và mất bảo hộ bí mật kinh doanh.
publishDate: 2026-11-16
headlinePhoto: /media/mda-xnk-ai-5.webp
headlinePhotoAlt: "Hình ảnh minh họa cho bài viết: Rủi ro rò rỉ dữ liệu khi nhân viên XNK tự ý upload chứng từ lên AI"
headlinePhotoCaption: Chuyên mục Chứng Từ & Pháp Lý XNK — MDA Agro-Export Hub
author: Ban Pháp Lý & Tuân Thủ Hải Quan MDA
featured: true
---

> **Bạn có biết**
> 
> Nhân viên XNK tải hợp đồng, tờ khai lên AI công cộng có thể bị phạt tới 5% doanh thu theo Luật 91/2025/QH15 và mất bảo hộ bí mật kinh doanh.
> 
> - Nhân viên chứng từ thường tự ý tải hợp đồng ngoại thương, tờ khai hải quan, hóa đơn thương mại hay biểu mẫu đã điền lên AI công cộng và công cụ PDF miễn phí đặt máy chủ nước ngoài, tạo ra ba lỗ hổng chí mạng về bí mật kinh doanh, dữ liệu cá nhân và lừa đảo tài chính.
> - Việc tải chứng từ chứa dữ liệu doanh nghiệp và dữ liệu cá nhân lên nền tảng đặt ngoài Việt Nam chịu điều chỉnh đồng thời của sáu trụ cột pháp luật, trong đó Luật 91/2025/QH15 coi đây là chuyển dữ liệu ra nước ngoài với mức phạt tới 5% doanh thu hoặc 3 tỷ đồng.
> - Doanh nghiệp cần áp dụng khung ba cấp độ cho 28 loại chứng từ XNK, trong đó Cấp 1 cấm hoàn toàn đưa lên AI công cộng, Cấp 2 chỉ dùng sau khi ẩn danh năm nhóm thông tin nhạy cảm và Cấp 3 được tự do sử dụng.
> - Quy trình gồm bốn bước là lập quy chế và hàng rào pháp lý, ẩn danh hóa thủ công chứng từ Cấp 2 theo năm nhóm, triển khai Local Middleware với Token Vault AES-256, và kiểm soát kỹ thuật bằng DLP cùng kế hoạch ứng phó sự cố.
> - Một nhân viên chứng từ mới tải toàn bộ hồ sơ xuất khẩu sấy thăng hoa sang EU lên trang chuyển đổi PDF miễn phí và ChatGPT cá nhân, khiến doanh nghiệp đối mặt nguy cơ mất mã vùng trồng và vi phạm đồng thời Điều 84 Luật SHTT lẫn Luật 91/2025/QH15.
> - Biểu mẫu cơ quan nhà nước đã điền dữ liệu thật thuộc nhóm rủi ro cao khi đưa lên AI, mức phạt tối đa theo Luật 91/2025/QH15 là 5% doanh thu hoặc 3 tỷ đồng, và giải pháp an toàn là kết hợp phân loại ba cấp độ, ẩn danh năm nhóm thông tin và Local Middleware.

## Nhận diện bẫy tiện lợi Shadow AI trong phòng chứng từ XNK

Trong tác nghiệp hàng ngày, nhân viên chứng từ, logistics và thu mua quốc tế phải đối chiếu hàng chục trang hợp đồng ngoại thương (Sales Contract), thư tín dụng (L/C), tờ khai hải quan ECUS5 hay hồ sơ kiểm tra chuyên ngành trên VNSW, eCoSys. Để tiết kiệm thời gian dịch thuật, tóm tắt điều khoản hoặc chuyển đổi PDF scan, nhiều nhân sự tự ý tải trực tiếp file gốc lên ChatGPT, Claude, Gemini bản Web hoặc các trang OCR/PDF miễn phí đặt máy chủ ở nước ngoài.

Rủi ro không dừng ở việc AI lưu lịch sử chat để huấn luyện lại mô hình mà tạo ra **3 lỗ hổng chí mạng** đối với doanh nghiệp xuất nhập khẩu:

- **Lộ bí mật kinh doanh cốt lõi:** Đơn giá FOB/CIF, bảng giá vốn (COGS), biên lợi nhuận, thông tin nhà sản xuất gốc trong thương mại 3 bên và mã định danh vùng trồng, cơ sở đóng gói (PUC/PHC).
- **Lộ dữ liệu từ biểu mẫu cơ quan quản lý đã điền thông tin thật:** Khác với biểu mẫu trống là dữ liệu công khai, tờ khai hải quan điện tử bản gốc, đơn đăng ký kiểm tra chuyên ngành trên VNSW hay hồ sơ xin cấp C/O chứa đồng thời dữ liệu cá nhân (CCCD, số điện thoại, chữ ký số người khai) cùng trị giá tính thuế và chuỗi cung ứng thực tế.
- **Kích hoạt rủi ro lừa đảo tài chính (BEC / CEO Fraud):** Số tài khoản thụ hưởng trên Commercial Invoice hoặc L/C bị rò rỉ là mục tiêu hàng đầu của các nhóm giả mạo email để đổi tài khoản thanh toán quốc tế.

## Nắm khung pháp lý Việt Nam cập nhật giai đoạn 2025 đến 2026

Hành vi tự ý tải chứng từ lên nền tảng công cộng đặt ngoài lãnh thổ Việt Nam chịu sự điều chỉnh đồng thời của **6 trụ cột pháp luật**:

1. **Luật Bảo vệ dữ liệu cá nhân 2025 (91/2025/QH15, hiệu lực 01/01/2026):**
 - Theo **Điều 20**, dùng hệ thống, nền tảng hoặc dịch vụ đặt ngoài lãnh thổ Việt Nam (gồm Cloud quốc tế và Public AI) để xử lý dữ liệu cá nhân thu thập tại Việt Nam được xác định là **chuyển dữ liệu cá nhân ra nước ngoài**.
 - Doanh nghiệp phải lập **Hồ sơ đánh giá tác động chuyển dữ liệu cá nhân ra nước ngoài (DPIA)** và nộp 01 bản chính cho cơ quan chuyên trách trong **60 ngày** kể từ ngày đầu tiên thực hiện.
 - Vi phạm quy định chuyển dữ liệu xuyên biên giới có thể bị phạt tới **5% tổng doanh thu năm trước liền kề** hoặc **3 tỷ đồng** (tùy mức nào cao hơn); các vi phạm khác bị phạt tới **3 tỷ đồng** và có thể bị buộc ngừng chuyển dữ liệu.
2. **Luật Dữ liệu 2024 (60/2024/QH15, hiệu lực 01/07/2025):** Phân loại dữ liệu theo mức độ quan trọng (dữ liệu cốt lõi, dữ liệu quan trọng) và kiểm soát chặt việc chuyển, xử lý dữ liệu xuyên biên giới; cơ quan nhà nước có quyền kiểm tra và yêu cầu dừng truyền tải khi phát hiện nguy cơ lộ lọt.
3. **Luật An ninh mạng 2018 (24/2018/QH14) và Nghị định 53/2022/NĐ-CP:** Điều 17 quy định phòng ngừa gián điệp mạng, bảo vệ bí mật kinh doanh và bí mật cá nhân; Điều 26 của cả luật và nghị định yêu cầu lưu trữ tại Việt Nam tối thiểu 24 tháng đối với ba nhóm dữ liệu (thông tin cá nhân, dữ liệu người dùng tạo ra, dữ liệu mối quan hệ) khi thuộc diện áp dụng.
4. **Luật Sở hữu trí tuệ (50/2005/QH11, sửa đổi 07/2022/QH15, Điều 84 và Điều 127):** Bí mật kinh doanh không cần đăng ký nhưng phải hội đủ ba điều kiện gồm chưa bị bộc lộ, tạo ra lợi thế kinh doanh và được chủ sở hữu bảo mật bằng biện pháp cần thiết. Nếu nhân viên tự ý đưa tài liệu mật lên nền tảng mở mà doanh nghiệp không có quy chế kiểm soát, doanh nghiệp mất tư cách được pháp luật bảo hộ khi xảy ra tranh chấp.
5. **Luật Cạnh tranh 2018 (23/2018/QH14, Khoản 4 Điều 45):** Nghiêm cấm hành vi xâm phạm thông tin bí mật trong kinh doanh, gồm tiếp cận, thu thập chống lại biện pháp bảo mật hoặc tiết lộ, sử dụng trái phép cho đối thủ.
6. **Bộ luật Lao động 2019 (Điều 125):** Cho phép áp dụng hình thức kỷ luật sa thải đối với người lao động tiết lộ bí mật kinh doanh, bí mật công nghệ nếu đã quy định rõ trong Nội quy lao động.

## Áp dụng bảng phân loại bảo mật ba cấp độ cho chứng từ và biểu mẫu XNK

Để chấm dứt tình trạng upload bừa bãi, doanh nghiệp bắt buộc áp dụng **khung bảo mật 3 cấp độ** cho toàn bộ **28 loại chứng từ XNK** và biểu mẫu cơ quan quản lý, kết hợp với [khung phân loại dữ liệu ba tầng](/blog/tuan-thu-ai-va-bao-mat-du-lieu-xuat-khau-nong-san) đã khuyến nghị trước đó:

| Cấp độ | Nguyên tắc xử lý | Danh mục chứng từ và biểu mẫu điển hình | Yêu cầu tuân thủ pháp lý và kỹ thuật |
|:---: |:--- |:--- |:--- |
| 🔴 **Cấp 1** | **Cấm hoàn toàn**, tuyệt đối không đưa lên AI hoặc Web công cộng | Tờ khai hải quan điện tử bản gốc, L/C Master; Commercial Invoice bản thô (nguyên đơn giá, tài khoản ngân hàng); bảng giá vốn COGS, báo cáo tài chính, sao kê ngân hàng; NDA, hợp đồng liên doanh, công thức độc quyền; dữ liệu gốc mã vùng trồng (PUC) và cơ sở đóng gói (PHC); hồ sơ nhân sự (CCCD, bảng lương, HĐLĐ) | Nghiêm cấm upload hoặc copy-paste. Chỉ xử lý nội bộ hoặc qua Local Middleware cách ly Internet để tránh mất bảo hộ theo Điều 84 Luật SHTT và vi phạm Điều 20 Luật 91/2025/QH15 |
| 🟡 **Cấp 2** | **Chỉ dùng khi đã ẩn danh**, bắt buộc làm sạch năm nhóm thông tin nhạy cảm | Hợp đồng ngoại thương, Proforma Invoice; Packing List, Vận đơn (B/L, AWB), Booking Note; C/O, chứng thư kiểm dịch (Phyto, Health Cert), CoA; biểu mẫu VNSW, eCoSys, kiểm tra chuyên ngành đã điền dữ liệu lô hàng | Bắt buộc Find & Replace toàn bộ tên công ty, số hiệu chứng từ, mã PUC/PHC, mã số thuế, đơn giá và số tài khoản trước khi phân tích; chỉ giữ thông số kỹ thuật như tên hàng, quy cách, GW/NW, chỉ tiêu CoA |
| 🟢 **Cấp 3** | **Hoàn toàn tự do**, được nạp toàn văn | Luật, Nghị định, Thông tư, biểu thuế XNK, MRLs; quy tắc quốc tế (Incoterms 2020, UCP 600, ISBP 745, CISG 1980); biểu mẫu cơ quan quản lý bản trống chưa điền dữ liệu thật; catalogue và company profile công khai | Được tải trực tiếp lên công cụ AI để tra cứu, tóm tắt và soạn thảo khung tài liệu chuẩn |

## Triển khai quy trình bốn bước quản lý và giải pháp kỹ thuật cho doanh nghiệp

**Bước 1. Thiết lập hàng rào pháp lý và quy chế nội bộ**

- Ban hành **Quy chế Bảo mật Dữ liệu XNK và Sử dụng AI**, phân định rõ Cấp 1, 2, 3 và danh mục bí mật kinh doanh theo Điều 84 Luật SHTT.
- Bổ sung điều khoản **NDA** và chế tài kỷ luật theo Điều 125 Bộ luật Lao động 2019 vào Hợp đồng lao động và Nội quy lao động.
- Thực hiện **Data Mapping** luồng dữ liệu nhân sự, khách hàng; nếu dùng nền tảng Cloud hoặc AI đặt máy chủ nước ngoài có xử lý dữ liệu cá nhân, lập và nộp **Hồ sơ DPIA trong 60 ngày** theo Luật 91/2025/QH15.

**Bước 2. Chuẩn hóa giao thức ẩn danh hóa thủ công cho chứng từ Cấp 2**

Khi cần dùng AI kiểm tra điều khoản hợp đồng hoặc đối chiếu thông số kỹ thuật, nhân viên phải chạy Find & Replace (Ctrl + H) cho **5 nhóm thông tin**:

1. **Tên và địa chỉ doanh nghiệp:** Thay bằng `[EXPORTER_COMPANY_A]`, `[BUYER_COMPANY_B]`, `[OFFICIAL_ADDRESS_A]`.
2. **Số hiệu chứng từ:** Thay bằng `SC-2026-XXX`, `BL-CARRIER-XXX`, `INV-XXX`.
3. **Mã định danh quản lý:** Thay mã vùng trồng thành `PUC-VN-XXX-1234`, mã đóng gói thành `PHC-VN-XXX-5678`, mã số thuế thành `VAT-TAX-ID-XXX`.
4. **Dữ liệu tài chính:** Thay đơn giá bằng `[UNIT_PRICE]` hoặc giá tròn số giả định; số tài khoản ngân hàng thành `[BANK_ACCOUNT_REDACTED]`.
5. **Giữ nguyên thông số kỹ thuật:** Giữ tên hàng, mã HS, trọng lượng Gross/Net, số khối CBM, nhiệt độ container lạnh và chỉ tiêu hóa lý CoA để AI đối soát.

**Bước 3. Triển khai trạm trung chuyển nội bộ Local Middleware với Token Vault AES-256**

Với doanh nghiệp xử lý hàng trăm đến hàng nghìn trang chứng từ scan mỗi tháng, ẩn danh thủ công rất dễ sót thông tin nhận dạng. Giải pháp cấp doanh nghiệp là **Local Middleware chạy hoàn toàn trên mạng LAN nội bộ**:

- **OCR và ghép bảng offline:** Xử lý bản scan, bảng biểu xuyên trang ngay trên máy chủ nội bộ, không đẩy file PDF gốc lên web OCR công cộng.
- **Tự động Masking và Token Vault AES-256:** Thay đồng bộ tên công ty, mã số thuế, số tài khoản, đơn giá bằng token an toàn (`TKN_ENTITY_SELLER`, `TKN_AMT_TOTAL`). Bảng ánh xạ giải mã nằm offline trong két AES-256; chỉ văn bản sạch 100% mới đi qua API AI (Enterprise Zero Data Retention) để đối chiếu Incoterms, UCP 600, sau đó giải mã ngược lại cho nhân viên. Chi tiết nền tảng kỹ thuật xem thêm tại [điều kiện dữ liệu và bảo mật khi dùng AI No-Code](/blog/chuan-bi-du-lieu-bao-mat-ai-no-code-thay-erp-sme).

**Bước 4. Kiểm soát kỹ thuật và ứng phó sự cố**

- Triển khai hệ thống **DLP (Data Loss Prevention)** cảnh báo hoặc chặn upload file chứa từ khóa mật (tờ khai, mã số thuế, IBAN/SWIFT) lên các tên miền AI và PDF công cộng chưa cấp phép.
- Khi phát hiện rò rỉ ra nước ngoài: khoanh vùng log truy cập, lập vi bằng chứng cứ số, đánh giá tác động vi phạm hợp đồng và DPIA, đồng thời phối hợp cơ quan chức năng (Cục A05 Bộ Công an hoặc Ủy ban Cạnh tranh Quốc gia theo Khoản 4 Điều 45 Luật Cạnh tranh 2018) nếu có dấu hiệu chiếm đoạt, sử dụng trái phép.

## Rút bài học từ tình huống rò rỉ mã PUC PHC và đơn giá do tự ý upload hồ sơ

**Tình huống:** Một doanh nghiệp xuất khẩu nông sản sấy thăng hoa sang EU giao nhân viên chứng từ mới kiểm tra chéo bộ hồ sơ gồm Commercial Invoice, Giấy kiểm dịch thực vật (Phytosanitary Certificate), tờ khai hải quan xuất khẩu và bảng kê mã vùng trồng (PUC) cùng cơ sở đóng gói (PHC). Vì vội kịp giờ tàu chạy, nhân viên tải toàn bộ file PDF gốc lên một trang chuyển đổi PDF sang Word miễn phí rồi dán vào ChatGPT bản cá nhân để nhờ kiểm tra lỗi chính tả.

**Hậu quả tiềm ẩn**:

- **Nguy cơ mất mã vùng trồng (PUC/PHC):** Nếu bị lộ cho thương lái trôi nổi mượn mã xuất khẩu gian lận, nước nhập khẩu có thể thu hồi mã vĩnh viễn và đình trệ toàn bộ chuỗi xuất khẩu.
- **Rủi ro pháp lý kép:** Doanh nghiệp không có quy chế cấm Shadow AI bằng văn bản nên khó chứng minh đã áp dụng biện pháp bảo mật cần thiết theo Điều 84 Luật SHTT; đồng thời thông tin cá nhân của người ký chứng từ trên tờ khai đã truyền qua nền tảng đặt máy chủ ngoài Việt Nam khi chưa có hồ sơ DPIA theo Luật 91/2025/QH15.

**Cách xử lý chuẩn mực:** Thu hồi quyền truy cập, xóa lịch sử phiên làm việc, ban hành ngay bảng phân loại 3 cấp độ, chuyển toàn bộ thao tác bóc tách chứng từ về Local Middleware nội bộ và áp dụng Find & Replace bắt buộc cho mọi hồ sơ Cấp 2.

## Giải đáp ba câu hỏi thường gặp về upload chứng từ lên AI

**Nhân viên upload biểu mẫu cơ quan nhà nước như tờ khai hải quan hay đơn đăng ký VNSW lên AI để kiểm lỗi có vi phạm pháp luật không?**
Có rủi ro vi phạm rất cao nếu biểu mẫu đã điền dữ liệu thực tế của lô hàng và doanh nghiệp. Biểu mẫu trống là dữ liệu công khai (Cấp 3), nhưng biểu mẫu đã kê khai chứa dữ liệu cá nhân (CCCD, số điện thoại, chữ ký số) và bí mật kinh doanh (trị giá, đối tác, mã vùng trồng). Khi đưa lên AI đặt máy chủ nước ngoài, doanh nghiệp kích hoạt nghĩa vụ chuyển dữ liệu ra nước ngoài theo Điều 20 Luật Bảo vệ dữ liệu cá nhân 2025 và có thể mất quyền bảo hộ bí mật kinh doanh theo Điều 84 Luật SHTT.

**Mức phạt tối đa nếu để nhân viên chuyển dữ liệu cá nhân ra nước ngoài trái phép từ năm 2026 là bao nhiêu?**
Theo Luật 91/2025/QH15 (hiệu lực 01/01/2026), vi phạm quy định chuyển dữ liệu cá nhân xuyên biên giới như không lập và nộp hồ sơ DPIA trong 60 ngày có thể bị phạt tới 5% tổng doanh thu năm trước liền kề hoặc 3 tỷ đồng, tùy mức nào cao hơn.

**Làm sao vừa tận dụng AI tăng tốc kiểm tra chứng từ vừa không lo rò rỉ dữ liệu?**
Cần kết hợp ba lớp gồm phân loại 28 chứng từ theo 3 cấp độ (cấm tuyệt đối Cấp 1), bắt buộc ẩn danh 5 nhóm thông tin nhạy cảm bằng Find & Replace với chứng từ Cấp 2, và đầu tư Local Middleware cùng Token Vault AES-256 chạy nội bộ trên mạng LAN để tách 100% thông tin nhạy cảm trước khi gọi AI phân tích.

---

Hãy ban hành ngay quy chế phân loại ba cấp độ cho 28 loại chứng từ, rà soát hồ sơ DPIA nếu đang dùng nền tảng AI đặt máy chủ nước ngoài và chuyển các thao tác bóc tách chứng từ nhạy cảm về Local Middleware nội bộ.

## Tài liệu & Nguồn tham khảo

- [Understanding AI Trust Layers: Core Principles and Implementation | Adlib News](https://www.adlibsoftware.com/news/ai-trust-layer)
- [Data masking explained: techniques, use cases, and limits](https://netwrix.com/en/resources/blog/data-masking)
- [Data Redaction Guide: Protect Sensitive Information | AI-Redact | AI-Redact](https://ai-redact.com/blog/data-redaction-guide)
