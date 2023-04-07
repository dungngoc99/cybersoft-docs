// Demo localstorage

// Lấy một giá trị từ localStorage lên, nếu key không tồn tại trả về null
let message = localStorage.getItem("message");
console.log(message);

// Lưu một giá trị xuống localStorage
localStorage.setItem("message", "Hello Cybersoft");
localStorage.setItem("username", "dannd");

// Localstorage không thể lưu dữ liệu là object, array,...
// Để lưu các kiểu dữ liệu trên vào localStorage ta cần chuyển chúng về định dạng JSON
const user = { id: 1, username: "dannd" };
const userJson = JSON.stringify(user);
localStorage.setItem("user", userJson);

const userStorage = localStorage.getItem("user");
const userObject = JSON.parse(userStorage);
console.log(userObject);

// Xoá một giá trị đang được lưu trong localStorage dựa vào key
localStorage.removeItem("username");

// Xoá toàn bộ giá trị đang được lưu trong localStorage
// localStorage.clear();

// sessionStorage có các phương thức tương tự localStorage
