// ========= 1.Khai báo biến =========
// Hiện không dùng var, chỉ dùng let và const do các nhược điểm sau
// - cho phép khai báo lại biến đã được khai báo
// - cơ chế hoisting:
// +B1: tất cả biến sẽ được đưa lên khai báo trước.ex: var d, var e,... và không gán giá trị
// +B2: nó sẽ chạy CT
// ex: console.log(d)
// let d=10; => kq hiện d undefind do hoisting sẽ khai báo d trước, sau đó sẽ hiện d với giá trị rỗng, sau đó mới gán d=10
// với let, cơ chế này sẽ không xuất hiện. biến vẫn được khởi tạo nhưng sẽ được cảnh báo là uninizelize => không thể truy cập vào biến trước khi khai báo biến
// - Scope: phạm vi hoạt động của một biến:
//  + global scope: biến toàn cục là biến được khai báo ở ngoài cùng của một file, có thể truy cập được ở mọi nơi
//  + function scope: biến được khai báo bên trong một function: chỉ có thể truy cập biến bên trong function nó khai báo
//  + block scope: biến được khai báo trong {}. VD: if(){}, for(){}, while(){}
// => var là function scope
function demoVarScope() {
  var a = 5;
  if (a > 3) {
    var a = 8;
    console.log("var scope", a); //=> 8
  }
}
// => let/const là block scope
function demoLetScope() {
  var a = 5;
  if (a > 3) {
    var a = 8;
    console.log("let scope", a); //=> 5
  }
}
// ========= 2.Arrow function =========
// 1. Các kiểu khai báo function:
// function(){} => có chế hoisting
// const foo = function (){}
// const foo = ()=>{}
// const bar = ()=>"Hello BC42" => cú pháp ngắn gọn để return về giá trị
const student = {
  name: "John",
  age: 28,
  print: function () {
    console.log(this.name, this.age);
  },
};
student.print(); //Jhon 28
const name = {
  name: "Ann",
  age: 20,
  print: function () {
    setTimeout(() => {
      console.log(this.name, this.age);
    }, 2000);
  },
};
student.print(); //Jhon 28
name.print(); //Ann 29
// => Khi gọi hàm bth thì dùng function, khi cần callback thì dùng arrow function
// call, bind, apply
function getInfor(a, b) {
  console.log("get infor", this.name, this.age);
}
//Hàm call: sẽ gọi hàm và đưa 1 object vào làm this của hàm, call sẽ truyền tham số tuần tự vào
// getInfor.call(student, 1, 2);
// Hàm sẽ trả về một hàm mới, và đưa object về làm this của hàm đó. do đó để dùng cần gọi lại hàm
// const studentInfor = getInfor.bind(student);
// studentInfor();
// Apply cũng giống call, nhưng tham số sẽ được đưa vào mảng
// getInfor.call(student, [1, 2]);

const a = {
  fullName: "a",
  age: "18",
};

const b = {
  fullName: "b",
  age: "20",
};

const c = {
  fullName: "c",
  age: "21",
};

function print() {
  return this.fullName + this.age;
}
print.call(a);
print.call(b);
// ========= 3. Default params =========
function renderStudent(students = []) {
  let html = students.reduce((result, student) => {
    return result + `<p>${student.name}</p>`;
  });
  console.log("Default params", html);
}
renderStudent([{ name: "A" }, { name: "B" }]);
//=> giá trị bắt buộc phải truyền vào phải để ở đầu, giá trị default value để ở sau
function calculateBill(price, discount = 0, tax = 10) {
  return price + (price * tax) / 100 - (price * discount) / 100;
}
console.log("calculateBill", calculateBill(100_000));
console.log("calculateBill", calculateBill(100_000, 5));
console.log("calculateBill", calculateBill(100_000, 5, 8));

//Những giá trị default nêu không được truyền vào sẽ nhận giá trị mặc định, nếu được truyền vào sẽ lấy giá trị user truyền
// ========= 4.Rest params =========
// - Không giới hạn số tham số truyền vào
// - Nhận vào mảng
// - Chỉ cần truyền mảng vào để tính toán
function sum(...number) {
  return number.reduce((total, item) => total + item, 0);
}
console.log("sum:", sum(1, 2));
console.log("sum:", sum(1, 2, 3));
console.log("sum:", sum(1, 2, 3, 4));
console.log("sum:", sum(1, 2, 3, 4, 8));

// ========= 5. Spread operator =========
// tương tự rest params
const obj = { a: 1, b: 2 };
// Tạo ra một object mới, sao chép toàn bộ giá trị của object hiện tại
const obj1 = { ...obj };
obj1.a = 3; //obj1{a:3,b:2}
console.log("clone obj:", obj, "obj1 là", obj1);
// Có thể vừa sao chép, vừa thay đổi
const obj2 = { ...obj, b: 5 }; //obj2{a:1,b:5}
//Thêm mới
const obj3 = { ...obj, c: 9 }; //obj3{a:1,b:2,c:9}
console.log(obj1, obj2, obj3);

const arr = [1, 2, 3, 4];
// Tạo ra một array mới, sao chép toàn bộ giá trị của array hiện tại
const arr1 = [...arr];

arr1[0] = 10;
console.log(arr1);

const arr2 = [-5, -8, ...arr, 5, 6]; //[-5 , -8 , 1, 2, 3, 4, 5, 6]
console.log("Min arr2:", Math.min(...arr2));
// ========= 6. Destructuring =========
// Cho phép bóc tách các phần tử bên trong object
// Bóc tách bằng tên key của object
const staff = {
  firstname: "Khai",
  lastname: "Trương",
  email: "khai@gmai.com",
};
// const firstname = staff.firstname;
// const lastname = staff.lastname;
// const email = staff.email;
const { firstname, lastname, email: myemail } = staff; //=> từ trong biến staff lấy ra các biến tên như trên và gán vào đó, key email gán biến myemail
console.log("Destructuring:", firstname, lastname, myemail);

//Bóc tác bằng vị trí của array
const date = ["19", "02", "2023"];
// const day = date[0];
// const month = date[1];
// const year = date[2];

const [day, month, year] = date;
console.log("Destructuring date:", day, month, year);
// ========= 7. Template string =========
// Cho phép xuống hàng, nối chuỗi với biển bằng toán tử ${variable}

let classname = "BC42";
let content = `Hello ${classname} JS`;
// ========= 8. Object literal =========
let age = 25;
let key = "email";
const person = {
  name: "John",
  // Phương thức thay vì khai báo sayHi:function(){}
  //Khi tên key và tên biến giống nhau, vd age:age, ta có thể rút gọn thành
  age, //age=25
  //Khai báo động tên thuộc tính bằng cặp []
  [key]: "john@gmail.com", //[key] sẽ được thay bằng email
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
};
person.sayHi();
// ========= 9.for.....in, for.........of  =========
const nums = [1, 3, 5, 7, 9, 10];
for (let i in nums) {
  console.log(`index:${i}-value:${nums[i]}`);
  // => vừa lấy giá trị vừa lấy vị trí
  // index:0-value:1
  // index:1-value:3
  // index:2-value:5
  // index:3-value:7
  // index:4-value:9
  // index:5-value:10
}

// chỉ lấy giá trị
for (let num of nums) {
  console.log(`value:${nums}`);
}
// có thể dùng for...in để duyệt object
for (let i in person) {
  console.log(`key - ${key}-value:${person[key]}`);
}
// ========= 10.Optional chaining (toán tử ?)  =========

//Toán tử && khi sử dụng trong phép gán sẽ lấy giá trị falsy value đầu tiên mà nó duyệt qua, nêu trong chuỗi không có falsy value, nó sẽ lấy giá trị cuối cùng
// const address =
//   document.getElementById("txtAddress") &&
//   document.getElementById("txtAddress").value;

// Toán tử ?.  : nếu biểu thức phía trước là falsy value sẽ trả về undefined
const address = document.getElementById("txtAddress")?.value;
console.log(`optional chaining: ${address}`);
person.sayHello?.();
// ========= 11.Nullish coalescing (toán tử ??)  =========
//Toán tử || trong phép gán sẽ lấy giá trị trushy value đầu tiên hoặc giá trị cuôi cùng nêu không có bất kì trusthy value nào
const score = null || 0 || OK || undefined; //=>OK
//Toán tử ?? tương tự ||, tuy nhiên nó chỉ bỏ qua null và undefined
const product = JSON.parse(localStorage.getItem("product")) || [];
const mark = 0 ?? "N/A"; //=> trả về 0
const mark1 = null ?? "N/A"; //=> trả về N/A
