// Callback function là gì???
// Một function nhận vào tham số là một function khác
// Tham số function này được gọi là callback function và nó sẽ được gọi và thực thi ở bên trong function chứa nó

// name: string
// callback: function
function sayHello(name, callback) {
  // xử lý
  const msg = "Hello " + name;

  // Nếu ta muốn dùng giá trị msg để làm một số hành động
  // console.log(msg);
  // alert(msg)
  // return msg;
  // return msg.toUpperCase()

  // Thực hiện thao tác gọi hàm callback
  return callback(msg);
}

function logger(msg) {
  console.log(msg);
}

function showAlert(msg) {
  alert(msg);
}

// sayHello("Alice", logger);
// sayHello("Bob", showAlert);

// Sử dụng callback function bằng hàm ẩn danh
let msg = sayHello("Yasuo", function (msg) {
  return msg;
});
console.log(msg);

let msgUpper = sayHello("Yone", function (msg) {
  return msg.toUpperCase();
});
console.log(msgUpper);

// VD2
function calculateSum(n, callback) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return callback ? callback(sum) : sum;
  // Nếu có truyền callback => return callback(sum)
  // Nếu không truyên callback => return sum
}

let sum = calculateSum(10);
console.log("sum:", sum);

let avg = calculateSum(20, function (sum) {
  return sum / 20;
});

// ======================================================

// 2 cách tạo function đã học
function fnA() {}
let fnB = function () {};

// Arrow function (Hàm mũi tên)
let fnC = () => {
  console.log("Arrow function");
};
fnC();

// Arrow function có return
// let getMessage = (name) => {
//   return "Hi " + name;
// };

// Rút gọn thành
let getMessage = (name) => "Hi " + name;
console.log(getMessage("Dan"));

// Ứng dụng arrow function trong callback
let doubleSum = calculateSum(5, (sum) => {
  return sum * 2;
});

let tripleSum = calculateSum(5, (sum) => sum * 2);

// NOTE: Quay lại phần 10_Array để ứng dụng callback vào các hàm map, filter, reduce,...








