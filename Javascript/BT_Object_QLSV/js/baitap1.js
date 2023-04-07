function printInformation() {
  // B1: DOM lấy giá trị từ các inputs
  let maSV = getElement("#txtMaSV").value;
  let tenSV = getElement("#txtTenSV").value;
  let loaiSV = getElement("#loaiSV").value;
  let diemToan = +getElement("#txtDiemToan").value;
  let diemVan = +getElement("#txtDiemVan").value;

  // B2: Tạo object student chứa các thông tin trên
  const student = {
    maSV: maSV,
    // Khi key và biến value trùng tên với nhau, ta có thể rút gọn lại như sau
    tenSV, // => tenSV: tenSV
    loaiSV,
    diemToan,
    diemVan,

    tinhDTB() {
      return (this.diemToan + this.diemVan) / 2;
    },
    xepLoai() {
      let dtb = this.tinhDTB();
      if (dtb >= 8) {
        return "Giỏi";
      }

      if (dtb >= 6.5) {
        return "Khá";
      }

      if (dtb >= 5) {
        return "Trung Bình";
      }

      return "Yếu";
    },
  };

  // B3: Hiển thị thông tin lên giao diện
  getElement("#spanTenSV").innerHTML = student.tenSV;
  getElement("#spanMaSV").innerHTML = student.maSV;
  getElement("#spanLoaiSV").innerHTML = student.loaiSV;
  getElement("#spanDTB").innerHTML = student.tinhDTB();
  getElement("#spanXepLoai").innerHTML = student.xepLoai();
}

function getElement(selector) {
  return document.querySelector(selector);
}
