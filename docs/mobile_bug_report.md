# Báo Cáo Kiểm Toán Mobile UI/UX & Danh Sách Bug — Mekong Delta Agri (MDA)

- **Website:** [https://mekongdeltaagri.com/](https://mekongdeltaagri.com/)
- **Ngày cập nhật:** 22/11/2026
- **Tổng số lỗi:** **15 bug** (`5 P0` Nghiêm trọng · `7 P1` UX / Nhận diện · `3 P2` Tương phản & Bất đồng hệ thống)
- **Phạm vi loại trừ theo yêu cầu:** Không tính việc nhúng chữ/CTA trong file ảnh là bug (giữ nguyên quy trình generate ảnh chủ đích của dự án; chỉ ghi nhận lỗi khi lớp phủ HTML đè lên ảnh hoặc khung ảnh bị xén/trống/vỡ).
- **Lưu ý phạm vi kiểm thử:** Môi trường trình duyệt kiểm thử tự động bị chặn DevTools nên chưa giả lập được đúng viewport `360px`; lỗi mất nút menu ở độ rộng `360px` (`M-01`) được ghi nhận theo hiện tượng thực tế trên thiết bị Samsung và cần dev tái hiện trực tiếp tại `360×800px`.

## 1. Tổng quan phân bổ lỗi theo màn hình

| Màn hình / Khu vực | P0 | P1 | P2 | Tổng |
| --- | :---: | :---: | :---: | :---: |
| Header & Open Menu (Toàn site) | 2 | 3 | 0 | **5** |
| Tin tức & Hải quan (`/tin-tuc/`) | 1 | 1 | 1 | **3** |
| Trang chủ (`/`) | 0 | 1 | 1 | **2** |
| Dịch vụ (`/dich-vu/`) | 1 | 0 | 1 | **2** |
| Ứng dụng AI XNK (`/dich-vu/.../ung-dung-ai-xnk/`) | 1 | 0 | 0 | **1** |
| Giới thiệu (`/gioi-thieu/`) | 0 | 1 | 0 | **1** |
| Blog (`/blog/`) | 0 | 1 | 0 | **1** |
| **Tổng cộng** | **5** | **7** | **3** | **15** |

## 2. Danh sách 15 lỗi Mobile UI/UX theo mức độ ưu tiên (P0 → P2)

| Mã | Mức | Màn hình & URL | Hiện tượng lỗi trên Mobile UI | Hướng sửa UI/UX & CSS đề xuất |
| --- | :---: | --- | --- | --- |
| **M-01** | **P0** | Header `360px` — [Toàn site](https://mekongdeltaagri.com/) | **Mất nút mở menu (hamburger) trên màn hình rộng 360px** (thiết bị Samsung). *(Ghi nhận thực tế từ thiết bị người dùng; cần dev tái hiện trực tiếp ở `360px`).* | Đặt `min-width: 0; flex: 1` cho khối logo, ẩn hoặc rút gọn tagline dài `MDA AGRO-EXPORT KNOWLEDGE HUB` ở breakpoint `≤ 390px`, và đặt `flex-shrink: 0` cho nút hamburger để luôn bám mép phải màn hình `360px`. |
| **M-02** | **P0** | Open Menu — [Toàn site](https://mekongdeltaagri.com/) | Nút đóng menu (`X`) nằm sát mép phải ngăn kéo drawer nên bị cắt xén hoặc khuất trên màn hình hẹp; người dùng buộc phải chạm vùng nền tối bên trái để đóng. | Giới hạn chiều rộng drawer `max-width: 85vw`, thêm `padding-right: 16px` và đảm bảo nút `X` đạt vùng chạm tối thiểu `44×44px` nằm gọn trong vùng an toàn. |
| **M-03** | **P0** | [Ứng dụng AI XNK](https://mekongdeltaagri.com/dich-vu/dao-tao-chuyen-sau-doanh-nghiep/ung-dung-ai-xnk/) | Ảnh Hero banner bị vỡ hoàn toàn (broken image), hiển thị biểu tượng ảnh lỗi kèm alt text thô (*"Ứng dụng AI và Middleware Local AI kiểm soát chứng từ XNK bảo mật"*). | Kiểm tra lại đường dẫn file ảnh trong `public/` hoặc cấu hình tối ưu ảnh Astro; xác minh HTTP `200` cho file ảnh trước khi deploy lên Hostinger. |
| **M-04** | **P0** | [Dịch vụ](https://mekongdeltaagri.com/dich-vu/) | Khối ảnh Hero banner phía trên nhãn xanh đậm bị trống hoàn toàn, chỉ hiện một khung nền xanh nhạt lớn tạo khoảng trống thừa trên màn hình đầu tiên. | Bổ sung đúng file ảnh Hero cho trang Dịch vụ, hoặc ẩn container khung ảnh nếu trang không dùng ảnh banner để tránh khoảng chết. |
| **M-05** | **P0** | [Tin tức & Hải quan](https://mekongdeltaagri.com/tin-tuc/) | Ảnh của bản tin tiêu điểm (*Cập nhật quy định HS Code...*) bị dính chuỗi trích dẫn kỹ thuật thô `[cite_uploaded:AI Power in Import and Export.docx]` ngay trên hình ảnh. | Xuất lại và thay mới file ảnh sạch hoàn toàn không dính chuỗi nguồn kỹ thuật; thêm bước kiểm tra ảnh đầu ra trước khi xuất bản. |
| **M-06** | **P1** | Header vs Open Menu — [Toàn site](https://mekongdeltaagri.com/) | **Bất đồng tên logo & tagline (đã xác minh trực tiếp):** Thanh Header hiển thị `MEKONG DELTA AGRI` / `MDA AGRO-EXPORT KNOWLEDGE HUB`, nhưng khi mở Open Menu lại đổi thành `MDA HUB` / `MEKONG DELTA AGRI`. | Tạo 1 component `BrandLogo.astro` dùng chung duy nhất cho cả Header và Open Menu (ví dụ thống nhất `MEKONG DELTA AGRI` + 1 dòng phụ rút gọn duy nhất như `MDA Hub`). |
| **M-07** | **P1** | Open Menu — [Toàn site](https://mekongdeltaagri.com/) | Mục *Dịch Vụ Đào Tạo & Tư Vấn* có biểu tượng mũi tên `v` nhưng nhấn vào không thu gọn được danh sách 3 mục con (tương tác giả). | Gắn sự kiện toggle đóng/mở thực sự kèm `aria-expanded`, hoặc bỏ biểu tượng mũi tên nếu chủ đích luôn mở sẵn danh sách con. |
| **M-08** | **P1** | Open Menu — [Toàn site](https://mekongdeltaagri.com/) | Lỗi cuộn kép (scroll chaining): khi cuộn xuống cuối menu drawer, xuất hiện thanh cuộn riêng song song với thanh cuộn ngoài của trang web. | Khóa cuộn trang nền (`overflow: hidden` trên `body`) khi mở drawer và thêm `overscroll-behavior: contain` cho vùng cuộn menu. |
| **M-09** | **P1** | [Trang chủ](https://mekongdeltaagri.com/) | Mép phải ảnh Banner Carousel hơi bị xén sát viền khung trên mobile; các chấm chuyển slide (`••••`) có vùng bấm quá nhỏ và nằm đè lên hình ảnh. | Đổi khung ảnh carousel sang hiển thị trọn vẹn không cắt mép (`object-fit: contain` hoặc khớp đúng `aspect-ratio` của ảnh gốc) và dời hàng chấm phân trang xuống dưới ảnh với vùng bấm `≥ 32–44px`. |
| **M-10** | **P1** | [Giới thiệu](https://mekongdeltaagri.com/gioi-thieu/) | Lớp phủ HTML đè lên ảnh Hero: nhãn xanh đậm *Mekong Delta Agri • Hub Tri Thức...* đè lên chữ trong ảnh; lớp sóng đáy banner che khuất nút ở đáy ảnh; watermark nền lộ mờ sau pill badge *Về MD AGRI*. | Gỡ bỏ lớp sóng phủ đáy ảnh và đưa nhãn xanh đậm ra ngoài khung ảnh (nằm phía dưới ảnh) để hiển thị trọn vẹn 100% ảnh thiết kế; ẩn watermark nền ở viewport `< 768px`. |
| **M-11** | **P1** | [Blog](https://mekongdeltaagri.com/blog/) | Badge danh mục HTML *Đào Tạo XNK Thực Chiến* trên thẻ bài đầu tiên đè trực tiếp lên dòng chữ phía trên cùng trong ảnh thumbnail. | Đưa badge danh mục ra ngoài khung ảnh (nằm phía trên tiêu đề bài viết trong phần text của card) để không bao giờ che nội dung ảnh. |
| **M-12** | **P1** | [Tin tức & Hải quan](https://mekongdeltaagri.com/tin-tuc/) | Bài viết tiêu điểm (*Cập nhật quy định HS Code...*, 13/11/2026) bị lặp lại y nguyên ngay bên dưới ở mục *Các Bản Tin Đáng Chú Ý Khác*. | Lọc trừ (exclude) slug/ID của bài viết đang hiển thị ở khối *Tin Tiêu Điểm* khỏi danh sách *Các Bản Tin Đáng Chú Ý Khác*. |
| **M-13** | **P2** | [Trang chủ](https://mekongdeltaagri.com/) & [Tin tức](https://mekongdeltaagri.com/tin-tuc/) | Độ tương phản màu thấp trên nút cam *Nhận Tư Vấn Lộ Trình* (Trang chủ) và badge cam sáng *Tin Tiêu Điểm* (`/tin-tuc/`) dùng chữ trắng. | Đổi nền sang cam đậm hơn (ví dụ `#C2410C` hoặc `#B45309` với chữ trắng, đạt tương phản `≥ 4.5:1` chuẩn WCAG AA). |
| **M-14** | **P2** | [Tin tức](https://mekongdeltaagri.com/tin-tuc/) vs [Blog](https://mekongdeltaagri.com/blog/) | Bất đồng công cụ tìm kiếm & lọc: `/blog/` có thanh Search và nút lọc danh mục, còn `/tin-tuc/` không có thanh tìm kiếm hay bộ lọc nào. | Tái sử dụng chung component thanh Search + Filter (cuộn ngang trên mobile) cho cả `/blog/` và `/tin-tuc/`. |
| **M-15** | **P2** | [Dịch vụ](https://mekongdeltaagri.com/dich-vu/) vs [Giới thiệu](https://mekongdeltaagri.com/gioi-thieu/) | Lặp nguyên khối 4 thẻ giá trị cốt lõi (*100% Thực Chiến, 4 Thị Trường, Bảo Mật Local AI, Huấn Luyện 1-1*) giống hệt nhau trên cả hai trang tĩnh. | Giữ khối 4 giá trị cốt lõi ở `/gioi-thieu/`; trên `/dich-vu/` thay bằng thanh tóm tắt nhanh thông số chọn gói (Thời lượng · Hình thức · Đối tượng). |

## 3. Các điểm bất đồng UI/UX cần chuẩn hóa thành Component dùng chung

| Thành phần UI | Hiện trạng bất đồng giữa các trang | Quy chuẩn đồng nhất đề xuất |
| --- | --- | --- |
| **Logo & Header 360px** | Header ghi `MEKONG DELTA AGRI / MDA AGRO-EXPORT KNOWLEDGE HUB` (chật ngang ở `360px`), còn Open Menu lại ghi `MDA HUB / MEKONG DELTA AGRI`. | Dùng 1 component `BrandLogo` duy nhất cho cả Header và Open Menu; trên màn hình `≤ 390px` chỉ giữ tên chính (ẩn tagline dài) để nút hamburger không bao giờ bị đẩy ra ngoài. |
| **Khung hiển thị Ảnh Hero** | `/gioi-thieu/` bị nhãn & sóng HTML đè lên ảnh; `/dich-vu/` trống khung; `/ung-dung-ai-xnk/` vỡ ảnh; Trang chủ bị chấm slide đè lên ảnh. | Đặt khung ảnh Hero khớp đúng tỉ lệ ảnh đã generate, **không đặt lớp phủ HTML (sóng, nhãn, chấm slide) đè lên vùng ảnh** để giữ nguyên vẹn toàn bộ chữ và nút trong ảnh thiết kế. |
| **Thẻ bài viết (Blog & Tin tức)** | `/blog/` đặt badge danh mục đè lên chữ trong thumbnail; `/tin-tuc/` lặp bài Tiêu điểm xuống danh sách ngay dưới. | Dùng chung 1 component `ArticleCard`: Ảnh thumbnail sạch không có badge đè lên → Dòng meta (Badge + Ngày đăng) nằm dưới ảnh → Tiêu đề H3 → Tóm tắt. |
| **Thanh Search & Filter** | `/blog/` có thanh tìm kiếm và 5 nút lọc danh mục; `/tin-tuc/` hoàn toàn không có công cụ tìm kiếm/lọc. | Dùng chung 1 thanh Search + Filter pills cuộn ngang cho cả hai chuyên mục Blog và Tin tức & Hải quan. |

## 4. Điểm đạt cần giữ nguyên & Checklist QA trước khi deploy

### Điểm đạt cần giữ nguyên
- **Khung nội dung không tràn ngang:** Phần thân các trang tĩnh, Blog và Tin tức không phát sinh thanh cuộn ngang.
- **Bảng so sánh responsive tốt:** Bảng 2 cột trên [Ứng dụng AI XNK](https://mekongdeltaagri.com/dich-vu/dao-tao-chuyen-sau-doanh-nghiep/ung-dung-ai-xnk/) co giãn gọn gàng trên màn hình điện thoại.
- **Nút CTA chính dễ chạm:** Các nút hành động chính trên thân trang có kích thước chạm tốt và không bị nút nổi che chữ.

### Checklist QA bắt buộc trước khi deploy
- [ ] **Test trực tiếp ở viewport `360×800px` (Samsung):** Đảm bảo nút hamburger hiển thị đủ khoảng cách bên phải Header và không bị đẩy tràn ra ngoài.
- [ ] **Test đóng/mở Open Menu Drawer:** Kiểm tra nút `X` đủ `44×44px` nằm gọn trong màn hình, tên logo khớp 100% với Header, khóa cuộn nền và bấm thu gọn được mục con.
- [ ] **Kiểm tra không có HTML Overlay đè lên ảnh:** Đảm bảo nhãn, lớp sóng, chấm slide và badge danh mục đều nằm ngoài vùng ảnh thiết kế.
- [ ] **Kiểm tra HTTP `200` cho toàn bộ ảnh Hero & Tin tức:** Đảm bảo không còn khung trống, ảnh vỡ hay ảnh dính chuỗi `[cite_uploaded:...]`.

## 5. Danh sách màn hình đã kiểm tra
1. [Trang chủ (Home), Header & Open Menu Drawer](https://mekongdeltaagri.com/)
2. [Trang tĩnh Giới thiệu](https://mekongdeltaagri.com/gioi-thieu/)
3. [Trang tĩnh Dịch vụ](https://mekongdeltaagri.com/dich-vu/)
4. [Trang tĩnh Ứng dụng AI XNK](https://mekongdeltaagri.com/dich-vu/dao-tao-chuyen-sau-doanh-nghiep/ung-dung-ai-xnk/)
5. [Trang Blog](https://mekongdeltaagri.com/blog/)
6. [Trang Tin tức & Hải quan](https://mekongdeltaagri.com/tin-tuc/)
