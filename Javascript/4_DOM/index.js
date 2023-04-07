// DOM

// Dùng đối tượng document do trình duyệt cung cấp, để tương tác với thẻ body, đổi background thành màu đỏ
document.body.style.backgroundColor = "aliceblue";

// getElementById dùng để DOM tới một thẻ bất kì có id tương ứng
let titleEl = document.getElementById("title");
console.log("titleEl:", titleEl);

// Để thay đổi nội dung của element: innerHTML
titleEl.innerHTML = "DOM là gì???";

let contentEl = document.getElementById("content");
console.log("contentEl:", contentEl);

// Thay đổi inline style của element
contentEl.style.color = "red";
contentEl.style.fontSize = "25px";
contentEl.style.fontWeight = "bold";

// Thay đổi class của element
contentEl.classList.add("container", "content");
contentEl.classList.remove("content");
// Kiểm tra class container có trong element hay không
let hasContainerClass = contentEl.classList.contains("container");
console.log("Có class container hay không:", hasContainerClass);
// toggle: nếu element đã có class, thì sẽ xoá đi, nếu chưa có thì sẽ thêm vào
// contentEl.classList.add("active");
contentEl.classList.toggle("active");

// Lấy ra và thay đổi những thuộc tính của một element
let usernameEl = document.getElementById("username");
console.log("Value của input username:", usernameEl.value);
// Thay đổi thuộc tính value của element
usernameEl.value = "cybersoft academy";
// Thay đổi thuộc tính disabled của element
usernameEl.disabled = true;

// Lắng nghe sự kiện được phát sinh từ một element và thực hiện một hành động nào đó
let clickEl = document.getElementById("click");
clickEl.onclick = function () {
  // Những câu lệnh bên trong cặp {} sẽ được chạy khi user click vào button
  alert("clicked");
};

let showEl = document.getElementById("show");
showEl.onclick = function () {
  let cybersoftEl = document.getElementById("cybersoft");
  cybersoftEl.style.display = "block";
};

// Bài tập bóng đèn
document.getElementById("turn-on").onclick = function () {
  // Khi user click vào button bật đèn
  // DOM tới thẻ img, và gán giá trị cho thuộc tính src
  document.getElementById("bulb").src = "./img/pic_bulbon.gif";
};
document.getElementById("turn-off").onclick = function () {
  // Khi user click vào button tắt đèn
  // DOM tới thẻ img, và gán giá trị cho thuộc tính src
  document.getElementById("bulb").src = "./img/pic_bulboff.gif";
};

// Bài tập đăng nhập
document.getElementById("login").onclick = function () {
  // B1: Lấy giá trị của các inputs
  let username = document.getElementById("tai-khoan").value;
  let password = document.getElementById("mat-khau").value;

  // B2: Hiển thị các giá trị này ra thẻ div
  let outputEl = document.getElementById("output");
  outputEl.style.display = "block";
  outputEl.style.color = "white";
  outputEl.style.backgroundColor = "blue";
  outputEl.innerHTML = "Tài khoản: " + username + " Mật khẩu: " + password;
};

// Tạo mới một element bằng JS

// Tạo thẻ h1
let h1El = document.createElement("h1");
// Thêm nội dung cho thẻ h1
h1El.innerHTML = "Đây là thẻ h1 được tạo từ JS";
// Thêm thẻ h1 vừa tạo vào bên trong thẻ body
document.body.appendChild(h1El);

let h3El = document.createElement("h3");
h3El.innerHTML = "Hula";
// Thêm thẻ h3 vừa tạo vào bên trong thẻ div có id là wrapper
document.getElementById("wrapper").appendChild(h3El);










