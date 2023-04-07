// Object trong javascript là một khái niệm trừu tượng dùng để biểu diễn một đối tượng cụ thể. Trong đó các thuộc tính dùng để mô tả đặc điểm và tính chất của đối tượng đó.

// let os = "Window 11"
// let cpu = "Inter i7 12900"
// let ram = "8GB"
// ...

// Về bản chất object là tập hợp của các cặp key và value.
// Với key được gọi là thuộc tính, còn value là giá trị tương ứng của thuộc tính đó
let laptop = {
  os: "Window 11",
  cpu: "Intel i7 12900",
  ram: "8GB",
  // Trường hợp key có các kí tự đặc biệt ngoại trừ "_", "$". Ví dụ dấu cách, thì phải được đặt bên trong dấu nháy kép "" hoặc nháy đơn ''
  "graphic card": "NVIDIA 3090",
};

// Truy cập vào các thuộc tính (property) của object
// Sử dụng toán tử . theo sau là tên thuộc tính (chỉ dùng được trong trường hợp key không có kí tự đặc biệt)
console.log("OS:", laptop.os);
console.log("CPU:", laptop.cpu);
// Sử dụng toán tử [], bên trong là tên thuộc tính được đặt bên trong chuỗi
console.log("RAM:", laptop["ram"]);
console.log("GRAPHIC CARD:", laptop["graphic card"]);

// Thay đổi giá trị các thuộc tính của object
laptop.ram = "12GB";
console.log("LAPTOP UPDATED:", laptop);

// Thêm mới thuộc tính vào object
// thuộc tính brand chưa tồn tại trong object laptop nên nó sẽ hiểu là thêm mới
laptop.brand = "Dell";
console.log("LAPTOP ADDED:", laptop);

// Xoá thuộc tính của object
delete laptop["graphic card"];
console.log("LAPTOP DELTED:", laptop);

// Truy cập thuộc tính của object với key là một biến
let key = "cpu";
// let key = prompt("Input your property:")
// Trường hợp này không thể sử dụng toán tử .
console.log(laptop[key]); // => laptop["cpu"]

// Kiểm tra một thuộc tính có tồn tại trong object hay không
let student = {
  name: "Bob",
  email: "bob@gmail.com",
  age: 25,
  address: undefined,
};

// address có tồn tại trong object student nhưng mang giá trị undefined
console.log("student.address", student.address); // undefined
// className không ton tại trong object student
console.log("student.className", student.className); // undefined

console.log(
  "Kiểm tra thuộc tính address có tồn tại trong object student",
  "address" in student
);
console.log(
  "Kiểm tra thuộc tính className có tồn tại trong object student",
  "className" in student
);

// Phương thức (method) của object
let student1 = {
  // Thuộc tính
  name: "Alice",
  email: "alice@gmail.com",
  age: 25,
  // Điểm số
  html: 8,
  css: 7,
  javascript: 10,

  // Phương thức
  getInfor: function () {
    // Bên trong các phương thức của object ta có thể sử dụng 1 từ khoá "this"
    // this bên trong một phương thức đại diện cho đối tượng gọi tới phương thức đó

    // console.log(student1.name, student1.email, student1.age);
    console.log(this.name, this.email, this.age);
  },

  // Cú pháp rút gọn khi khai báo phương thức
  calculateAverageScore() {
    return (this.html + this.css + this.javascript) / 3;
  },

  // Không dùng arrow để khai báo phương thức cho object
  // Lý do: arrow function không định nghĩa this cho đối tượng gọi tới phương thức
  getTotalScore: () => {
    return this.html + this.css + this.javascript;
  },
};

// Gọi phương thức của object
student1.getInfor();
console.log("Điểm trung bình của student1:", student1.calculateAverageScore());
console.log("Tổng điểm của student1:", student1.getTotalScore());
