/* Hàm upDate: kích hoạt khi di chuột (onmouseover) hoặc phím Tab focus tới (onfocus) */
function upDate(previewPic) {
  console.log("Kích hoạt upDate: ", previewPic.alt);

  let imageDiv = document.getElementById("image");
  
  // Thay đổi nội dung chữ thành alt của ảnh
  imageDiv.innerHTML = previewPic.alt;

  // Thay đổi hình nền thành nguồn ảnh
  imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Hàm unDo: kích hoạt khi chuột rời đi (onmouseleave) hoặc phím Tab rời đi (onblur) */
function unDo() {
  console.log("Kích hoạt unDo: Khôi phục trạng thái ban đầu");

  let imageDiv = document.getElementById("image");

  // Đưa ảnh nền về rỗng
  imageDiv.style.backgroundImage = "url('')";

  // Khôi phục câu thông báo ban đầu
  imageDiv.innerHTML = "Di chuột qua một hình ảnh bên dưới để hiển thị ở đây.";
}

/* 8 & 9. Hàm onload: tự động thêm tabindex cho từng ảnh thông qua vòng lặp for */
function initializeGallery() {
  // 9a. In ra console để kiểm tra sự kiện onload đã kích hoạt thành công
  console.log("Trang web đã tải xong - Hàm initializeGallery được kích hoạt!");

  // Lấy danh sách tất cả các ảnh có class preview
  let images = document.querySelectorAll(".preview");

  // 9b. Dùng vòng lặp for để lặp qua từng phần tử ảnh
  for (let i = 0; i < images.length; i++) {
    // 9c. Thêm thuộc tính tabindex để ảnh có thể nhận tiêu điểm từ bàn phím (phím Tab)
    images[i].setAttribute("tabindex", "0");
    console.log("Đã thêm tabindex cho ảnh thứ: " + (i + 1));
  }
}