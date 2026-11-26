---
title: Viết AI Prompt ba lớp tra cứu HS Code nông sản chuẩn xác
description: Hướng dẫn viết AI Prompt 3 lớp tra cứu HS Code nông sản chuẩn Thông tư 85/2026/TT-BTC, so sánh ECUS với Local RAG và phối hợp đại lý hải quan an toàn.
publishDate: 2026-11-26
category: Ứng Dụng AI Trong XNK
headlinePhoto: /media/mda-xnk-ai-17.webp
headlinePhotoAlt: Nhân viên chứng từ nông sản dùng AI Prompt ba lớp và phần mềm ECUS tra cứu mã HS Code
headlinePhotoCaption: Chuyên mục Ứng Dụng AI Trong XNK — MDA Agro-Export Hub
author: Ms Jen Phạm (Nhung Phạm)
readingTime: 7 phút đọc
tags:
  - HS Code
  - AI Prompt 3 lớp
  - ECUS
  - Local RAG
  - Thông tư 85/2026/TT-BTC
faqSchema:
  - question: Cách viết AI prompt 3 lớp tra cứu HS Code chính xác cho nhân viên chứng từ mà không lo AI bị ảo giác là gì?
    answer: Để viết AI Prompt 3 lớp tra cứu HS Code chống ảo giác, lớp 1 phải khóa vai trò chuyên viên phân loại theo Thông tư 85/2026/TT-BTC; lớp 2 cung cấp mô tả kỹ thuật đầy đủ của hàng hóa (bản chất, thành phần, công dụng, quy cách chế biến chứ không dùng tên thương mại); lớp 3 yêu cầu AI chỉ trích xuất mã HS từ kho dữ liệu biểu thuế Local RAG kèm trích dẫn chú giải chương/nhóm và cảnh báo để con người kiểm tra lại trên ECUS.
  - question: So sánh tra cứu HS Code thủ công bằng phần mềm truyền thống (ECUS) và phân loại HS Code tự động bằng AI/Python RAG cho doanh nghiệp XNK?
    answer: Tra cứu thủ công trên phần mềm ECUS và lật sổ biểu thuế đảm bảo căn cứ pháp lý nhưng tốn nhiều thời gian khi danh mục hàng nông sản đa dạng; trong khi AI/Python RAG giúp khoanh vùng nhanh nhóm 2–4 chữ số (>90% ở cấp chương) kèm trích dẫn chú giải trong vài giây. Tuy nhiên ở cấp 6–8 chữ số, AI vẫn dễ nhầm lẫn giữa các mã gần nhau nên phải kết hợp AI gợi ý nhanh và chuyên viên đối chiếu lại trên ECUS.
  - question: So sánh hiệu quả giữa tự dùng AI tra cứu HS Code và soát chứng từ nội bộ so với thuê dịch vụ đại lý khai thuê hải quan cho SME?
    answer: "Tự dùng AI nội bộ giúp doanh nghiệp chủ động hồ sơ kỹ thuật theo Thông tư 85/2026/TT-BTC và xử lý nhanh 80% mã hàng phổ thông với chi phí thấp, nhưng không thay thế được trách nhiệm pháp lý. Với các mặt hàng nông sản chế biến phức tạp hoặc có nguy cơ tranh chấp thuế suất, doanh nghiệp SME nên kết hợp mô hình Hybrid: dùng AI RAG sơ duyệt nội bộ, sau đó tham vấn đại lý khai thuê hải quan hoặc xin xác định trước mã số theo Điều 18 Luật Hải quan."
  - question: Thông tư 85/2026/TT-BTC yêu cầu doanh nghiệp xuất nhập khẩu chuẩn bị hồ sơ kỹ thuật gì để giải trình mã HS Code?
    answer: Từ ngày 15/09/2026, Thông tư 85/2026/TT-BTC (thay thế Thông tư 14/2015 và 17/2021) yêu cầu doanh nghiệp phải xây dựng cơ sở dữ liệu hồ sơ kỹ thuật cho từng nhóm sản phẩm ngay từ đầu, đối chiếu với Danh mục hàng hóa XNK Việt Nam, Chú giải HS của WCO và Chú giải bổ sung AHTN để làm căn cứ giải trình khi kiểm tra sau thông quan.
  - question: Doanh nghiệp xuất khẩu nông sản áp dụng AI như thế nào để tự động hóa tra cứu và rà soát mã HS Code nhất quán?
    answer: Doanh nghiệp xuất khẩu nông sản (trái cây tươi/sấy, gạo, thủy sản) xây dựng thư viện mô tả kỹ thuật sản phẩm (độ ẩm, quy cách sơ chế, đóng gói) đưa vào hệ thống Local RAG kết nối Biểu thuế XNK Việt Nam và Chú giải HS, giúp đề xuất mã HS nhất quán cho từng SKU và ngăn ngừa tình trạng mỗi nhân viên áp một mã khác nhau trên tờ khai và C/O.
sources:
  - title: HS Codes in the US
    url: https://www.reddit.com/r/logistics/comments/1sm3soq/hs_codes_in_the_us/
  - title: "Cẩm Nang Thủ Tục Hải Quan 2026: Quy Trình, Hồ Sơ, Thuế, Phạt"
    url: https://vantaianpha.vn/cam-nang-thu-tuc-hai-quan
  - title: "Công văn 7594/TCHQ-PC Thực hiện NĐ 128/2020/NĐ-CP về xử phạt vi phạm hành chính trong lĩnh vực hải quan : Văn bản pháp luật"
    url: https://vbpl.ts24.com.vn/support/solutions/articles/16000117182-c%C3%B4ng-v%C4%83n-7594-tchq-pc-th%E1%BB%B1c-hi%E1%BB%87n-n%C4%91-128-2020-n%C4%91-cp-v%E1%BB%81-x%E1%BB%AD-ph%E1%BA%A1t-vi-ph%E1%BA%A1m-h%C3%A0nh-ch%C3%ADnh-trong-l%C4%A9nh-v%E1%BB%B1c-h%E1%BA%A3i-qu
  - title: "Thông tư 85/2026/TT-BTC: Phân loại hàng hóa không còn chỉ là xác định ..."
    url: https://doanhnghiephoinhap.vn/thong-tu-852026tt-btc-phan-loai-hang-hoa-khong-con-chi-la-xac-dinh-ma-hs-trong-hoat-dong-xuat-nhap-khau-145093.html
  - title: Classification of Import and Export Goods Under Circular 85/2026/TT ...
    url: https://aresvietnam.vn/en/classification-of-import-and-export-goods-under-circular-85-2026-tt-btc
  - title: A review of machine learning, deep learning and large language model based harmonized system code classification techniques for import and export commodities | Discover Computing | Springer Nature Link
    url: https://link.springer.com/article/10.1007/s10791-026-10428-y
  - title: "Attribution Techniques for Mitigating Hallucinated Information in RAG Systems: A Survey"
    url: https://arxiv.org/html/2601.19927v1
  - title: "RAG hallucination: What is it and how to avoid it"
    url: https://www.k2view.com/blog/rag-hallucination
---

> **Bạn có biết**
> 
> Hướng dẫn viết AI Prompt 3 lớp tra cứu HS Code chuẩn Thông tư 85/2026/TT-BTC, so sánh ECUS với Local RAG và phối hợp đại lý hải quan an toàn.
> 
> - Dùng các công cụ AI không kiểm soát để tra mã HS từ tên thương mại dễ khiến AI bịa ra mã không tồn tại, trong khi phân loại cấp 6 đến 8 chữ số đòi hỏi mô tả kỹ thuật chuẩn xác.
> - Cấu trúc Master Prompt năm thành phần gồm ROLE, TASK, CONTEXT, FORMAT và CONSTRAINT khóa chặt vai trò theo Thông tư 85/2026/TT-BTC và ép AI cảnh báo thiếu dữ liệu thay vì bịa mã HS.
> - Kết hợp AI nội bộ khoanh vùng nhanh nhóm hàng 2 đến 4 chữ số trong vài giây rồi đối chiếu chốt mã 8 chữ số trên phần mềm ECUS giúp tiết kiệm thời gian và giữ đúng căn cứ pháp lý.
> - Tự dùng AI nội bộ xử lý tốt 80 phần trăm mã hàng phổ thông nhưng không thay thế được trách nhiệm pháp lý, nên cần phối hợp đại lý hải quan hoặc xin xác định trước mã số cho hàng phức tạp.

## Tránh bẫy AI bịa mã HS khi tra cứu bằng tên thương mại của sản phẩm

Nhiều bạn làm chứng từ khi gặp mặt hàng nông sản mới thường có thói quen gõ tên thương mại hoặc mã hàng nội bộ lên các công cụ AI không kiểm soát để hỏi mã HS cho nhanh. Kết quả trả về nhìn rất xuôi tai, nhưng khi đưa vào phần mềm khai báo hải quan hay gửi cho đơn vị giao nhận thì mới tá hỏa phát hiện mã HS đó không hề tồn tại trong biểu thuế hiện hành.

Các nghiên cứu về phân loại mã HS bằng trí tuệ nhân tạo cho thấy AI có thể đoán đúng nhóm chương 2 chữ số với tỷ lệ trên 90 phần trăm, nhưng khi đi xuống chi tiết 6 đến 8 chữ số thì độ khó tăng vọt do sự chồng chéo ngôn ngữ và mô tả ngắn. Chỉ cần thiếu thông tin về độ ẩm, tỷ lệ đường hay cách sơ chế, hệ thống sẽ suy đoán ra một mã gần đúng và gây rắc rối lớn khi thông quan.

Trước khi mở bất kỳ công cụ tra cứu nào, người làm chứng từ doanh nghiệp phải chuẩn hóa mô tả hàng hóa theo 5 thuộc tính gồm bản chất sản phẩm, thành phần cấu tạo, quy cách chế biến, công dụng và hình thức đóng gói. Nếu bạn còn băn khoăn cách làm sạch dữ liệu đầu vào để giữ bí mật giá vốn, hãy xem thêm bài [Ba chốt chặn dữ liệu và bảo mật SME phải khóa trước khi dùng AI](/blog/chuan-bi-du-lieu-bao-mat-ai-no-code-thay-erp-sme).

## Áp dụng cấu trúc câu lệnh năm thành phần để triệt tiêu mã HS ảo

Để AI hoạt động chính xác và không bịa đặt mã số, câu lệnh tra cứu kết hợp kho biểu thuế nội bộ (Local RAG) cần tuân thủ cấu trúc **Master Prompt 5 thành phần tiêu chuẩn** sau:

1. **[ROLE]:** Định hình vai trò chuyên gia cao cấp cho AI (ví dụ: chuyên viên phân loại hàng hóa XNK 10 năm kinh nghiệm, tuân thủ Thông tư 85/2026/TT-BTC và Danh mục hàng hóa xuất nhập khẩu Việt Nam).
2. **[TASK]:** Tác vụ nghiệp vụ cụ thể cần giải quyết (ví dụ: rà soát và đề xuất mã HS cấp 8 chữ số cho mặt hàng nông sản, đối chiếu Chú giải HS và Chú giải bổ sung AHTN).
3. **[CONTEXT]:** Cung cấp đầy đủ ngữ cảnh lô hàng đã qua ẩn danh hóa bằng Data Masking (bản chất, thành phần, độ ẩm, quy cách chế biến, công dụng, đóng gói), tuyệt đối không gửi tên đối tác hay giá vốn.
4. **[FORMAT]:** Quy định cấu trúc câu trả lời rõ ràng (Bảng Markdown 4 cột: Mã HS đề xuất, Mô tả theo Biểu thuế, Căn cứ Chú giải/Thông tư, Điểm cần kiểm chứng thêm).
5. **[CONSTRAINT]:** Ràng buộc kỹ thuật chốt chặn bẫy bịa số liệu (chỉ được trích xuất mã HS có thật trong kho biểu thuế đã nạp, ép AI xuất cảnh báo đỏ `⚠️ THIẾU DỮ LIỆU` khi thông số kỹ thuật chưa đủ).

> **📋 MASTER PROMPT MẪU HOÀN CHỈNH SẴN SÀNG COPY-PASTE**
> ```text
> [ROLE] Bạn là Chuyên gia Phân loại Hàng hóa Hải quan với 10 năm kinh nghiệm, tuân thủ Thông tư 85/2026/TT-BTC và Danh mục hàng hóa XNK Việt Nam.
> [TASK] Phân tích thông số kỹ thuật dưới đây để đề xuất tối đa 3 phương án mã HS 8 chữ số phù hợp nhất kèm căn cứ Chú giải HS / AHTN.
> [CONTEXT] Sản phẩm đã ẩn danh: Xoài sấy dẻo, độ ẩm 15%, không tẩm đường hoặc chất bảo quản, thái lát, đóng túi hút chân không 500g xuất khẩu.
> [FORMAT] Trình bày bằng Bảng Markdown 4 cột: Mã HS đề xuất | Mô tả Biểu thuế | Căn cứ Chú giải | Điểm cần chuyên viên kiểm tra lại trên ECUS.
> [CONSTRAINT] Chỉ trích xuất mã HS tồn tại trong kho biểu thuế nội bộ đã nạp. Tuyệt đối không tự suy đoán; nếu thiếu thông số quyết định phân nhóm, bắt buộc xuất cảnh báo đỏ "⚠️ THIẾU DỮ LIỆU" và liệt kê câu hỏi cần làm rõ.
> ```

Bạn có thể tham khảo thêm cách chống AI bịa đặt số liệu tại bài [Dùng AI đúng cách trong XNK để tăng hiệu quả và giảm rủi ro bịa số](/blog/dung-ai-dung-cach-trong-xnk-tang-hieu-qua-giam-hallucination), hoặc tìm hiểu quy trình chuẩn hóa bộ câu lệnh cho đội ngũ chứng từ tại [chương trình đào tạo chuyên sâu ứng dụng AI trong XNK cho doanh nghiệp](https://mekongdeltaagri.com/dich-vu/dao-tao-chuyen-sau-doanh-nghiep/ung-dung-ai-xnk/).

## Kết hợp trợ lý AI nội bộ với phần mềm ECUS để chốt mã tám chữ số chuẩn xác

Việc lật từng trang biểu thuế và dò tìm thủ công trên phần mềm ECUS đảm bảo độ chắc chắn về mặt pháp lý, nhưng lại tốn rất nhiều thời gian nếu doanh nghiệp nông sản xuất khẩu hàng chục mặt hàng khác nhau từ trái cây tươi, hàng sấy đến thủy sản chế biến. Ngược lại, hệ thống AI nội bộ chạy trên kho dữ liệu chuẩn hóa có thể khoanh vùng nhanh phân nhóm hàng và lọc ra các chú giải liên quan chỉ trong vài giây.

Tuy nhiên, người làm nghề không nên đặt bài toán chọn một bỏ một giữa AI và ECUS. AI đóng vai trò trợ lý sơ duyệt giúp thu hẹp phạm vi tra cứu và tổng hợp nhanh hồ sơ kỹ thuật, còn phần mềm ECUS cùng bảng biểu thuế hiện hành là nơi chuyên viên chứng từ đối chiếu chốt mã 8 chữ số cuối cùng.

Từ ngày 15 tháng 9 năm 2026, Thông tư 85/2026/TT-BTC yêu cầu doanh nghiệp phải xây dựng cơ sở dữ liệu kỹ thuật cho từng nhóm hàng hóa để chứng minh căn cứ phân loại khi kiểm tra sau thông quan. Nhờ kết hợp hai bước này, doanh nghiệp vừa giữ được tốc độ xử lý nhanh, vừa tạo lập sẵn bộ hồ sơ giải trình bài bản cho từng mã hàng.

<img src="/media/nhung-linkedin-17.webp" alt="Hướng dẫn viết AI Prompt 3 lớp tra cứu HS Code chuẩn Thông tư 85/2026/TT-BTC" loading="lazy" decoding="async" class="mda-inline-img" />

## Phối hợp rà soát nội bộ với đại lý hải quan cho những mặt hàng nông sản phức tạp

Nhiều chủ doanh nghiệp vừa và nhỏ băn khoăn liệu có thể tự dùng công cụ AI nội bộ để cắt hoàn toàn chi phí thuê đại lý khai thuê hải quan hay không. Thực tế vận hành cho thấy tự tra cứu nội bộ bằng AI giúp doanh nghiệp chủ động chuẩn hóa thư viện mã hàng và xử lý trôi chảy khoảng 80 phần trăm các mặt hàng nông sản quen thuộc.

Dù vậy, Nghị định 128/2020/NĐ-CP và Công văn 7594/TCHQ-PC đã bỏ quy định miễn phạt đối với trường hợp khai đúng tên hàng nhưng sai mã số lần đầu. Trách nhiệm pháp lý trên tờ khai hải quan hoàn toàn thuộc về doanh nghiệp, không một công cụ AI nào đứng ra chịu phạt hay giải trình thay con người.

Với những mặt hàng nông sản chế biến sâu hoặc nằm ở ranh giới nhạy cảm về thuế suất, mô hình an toàn nhất là kết hợp: nội bộ dùng Master Prompt 5 thành phần để chuẩn bị trước hồ sơ kỹ thuật, sau đó tham vấn đại lý khai thuê hải quan giàu kinh nghiệm hoặc nộp hồ sơ xin xác định trước mã số theo Điều 18 Luật Hải quan. Doanh nghiệp muốn chuyển giao trọn bộ quy trình này cho phòng chứng từ có thể xem chi tiết tại [khóa đào tạo ứng dụng AI trong XNK của MDA Hub](https://mekongdeltaagri.com/dich-vu/dao-tao-chuyen-sau-doanh-nghiep/ung-dung-ai-xnk/).

---

Nếu phòng chứng từ của bạn đang tốn nhiều giờ tra cứu mã HS nông sản trên ECUS hoặc lo ngại sai lệch giữa các nhân viên, hãy áp dụng ngay Master Prompt 5 thành phần và tham khảo chương trình đào tạo in-house tại https://mekongdeltaagri.com/dich-vu/dao-tao-chuyen-sau-doanh-nghiep/ung-dung-ai-xnk/.
