// Lắng nghe sự kiện user click vào button Tính Nào
document.getElementById("calculate").onclick = function () {
  // B1: Lấy giá trị của các inputs
  // Lưu ý các giá trị khi lấy từ html về đều có kiểu liệu là string
  // Đối với các giá trị mà ta mong muốn nó là number, ta cần thực hiện thao tác ép kiểu bằng cách đặt toán tử + phía giá trị đó, VD: +"100" => 100
  let price = +document.getElementById("price").value;
  let tip = +document.getElementById("tip").value;
  let quantity = +document.getElementById("quantity").value;

  // B2: Tính toán
  let result = (price * tip) / 100 / quantity;

  // B3: Hiển thị kết quả ra giao diện
  document.getElementById("result-wrapper").style.display = "block";
  document.getElementById("result").innerHTML = "$" + result;
};
