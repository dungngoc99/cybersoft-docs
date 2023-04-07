// 1. đoạn code không chạy vào thời điểm ban đầu , mà chạy khi cta muốn
// 2. chương trình không bị lặp code
// => Function (Hàm)

// khai báo hàm calcSum
// tham số đầu vào, một function không có giới hạn tham số
function calcSum(a, b) {
  let sum = a + b;
  return sum;
  return 112;

  console.log("asdasd");
  console.log("asdasd");
  console.log("asdasd");
  console.log("asdasd");
  console.log("asdasd");
}

// gọi hàm chạy
calcSum(2, 4); // a= 2, b =4
calcSum(8, 9); // a = 8, b = 9
calcSum();

// function có giá trị trả về
// một function chỉ return về 1 giá trị, khi đã return thì
// coi như ngắt function

let s1 = calcSum(8, 9);
let s2 = calcSum(10, 100); //110

console.log(s1);
console.log(s2);

// note: biến tạo ra ở trong function thì chỉ được dùng bên trong function đó thôi.
// console.log(sum); // error

function printValue() {
  let c = 7;
  let d = 10;
  let sum = calcSum(c, d);
  console.log(sum);
}

// events: sự kiện , click ,mouseover, mousever, keyup, keydown, keypress...
// document.getElementById("btnTest").onclick = printValue;
// anonymous function
// document.getElementById("btnTest").onclick = function () {
//   let c = 7;
//   let d = 10;
//   let sum = calcSum(c, d);
//   console.log(sum);
// };

/**
 * Input: điểm chuẩn , điểm 3 môn , khu vực (A,B,C,X), loại đối tượng (1,2,3,0)
 *
 * Process: (pseudo code)
 *      1. làm sao lấy input (User Interface) UI
 *      2. Tính điểm ưu tiên
 *         2.1 TÍnh điểm ưu tiên theo khu vực (if else )
 *         2.2 Tính điểm ưu tiên theo đối tượng (if else)
 *      3. Tính tổng điểm = điểm 3 môn + điểm ưu tiên
 *      4. Kiểm tra kết quả: (if else)
 *
 * Output: tính tổng điểm ,kết quả
 *
 */

// input: area => return điểm
function calcAreaGrade(area) {
  switch (area) {
    case "A":
      return 2;
    case "B":
      return 1;
    case "C":
      return 0.5;
    default:
      return 0;
  }
}

// input : type => return điểm
function calcTypeGrade(type) {
  switch (type) {
    case "1":
      return 2.5;
    case "2":
      return 1.5;
    case "3":
      return 1;
    default:
      return 0;
  }
}

function ex1() {
  // code
  let standardGrade = +document.getElementById("txtStandardGrade").value;
  let subject1 = +document.getElementById("txtSubject1").value;
  let subject2 = +document.getElementById("txtSubject2").value;
  let subject3 = +document.getElementById("txtSubject3").value;
  let area = document.getElementById("area").value; // "A"
  let type = document.getElementById("type").value;
  let totalGrade = 0;
  let areaGrade = calcAreaGrade(area);
  let typeGrade = calcTypeGrade(type);

  totalGrade = subject1 + subject2 + subject3 + areaGrade + typeGrade;
  if (
    subject1 > 0 &&
    subject2 > 0 &&
    subject3 > 0 &&
    totalGrade >= standardGrade
  ) {
    console.log("Đậu", totalGrade);
  } else {
    console.log("Rớt", totalGrade);
  }
}

// parameters (tham số) vs arguments(đối số)

// declaration function (hoisting)
function test() {
  console.log("test");
}
test();

// expression function (ko hỗ trợ hoisting)
let test1 = function () {
  console.log("test1111");
};
test1();

// hoisting: đưa hết tất cả các khai báo biến và hàm lên trên cùng trước khi chạy,
// cho phép chúng ta sử dụng 1 biến hoặc hàm trước khi khao báo
// var a;

console.log(a);
let a = 10;
console.log(a);
