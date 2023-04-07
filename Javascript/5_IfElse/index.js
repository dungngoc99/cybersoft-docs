// // let year = prompt("Năm nay là năm bao nhiêu:");
// let year = "2022";
// // Kiểm tra xem user có nhập đúng năm 2022 hay không
// if (year === "2022") {
//   // Các câu lệnh bên trong block if chỉ được chạy nếu điều kiện trả về true
//   console.log("Bravo!!!!!");
// }

// let a = 5;
// let b = 10;
// let isALessThanB = a < b; // true
// if (isALessThanB === true) {
//   console.log("A nhỏ hơn B");
// }

// // Boolean convention
// // falsy values: 0, "", false, null, undefined, NaN
// // truthy values: những giá trị khác 6 giá trị bên trên
// if (0) {
//   console.log("falsy value");
// }
// if ("Hello") {
//   console.log("truthy value");
// }

// // Bài tập tính tiền phạt thẻ tín dụng:
// let creditCardBalance = 10_000_000;
// let paymentBalance = 7_000_000;
// let pentalty = 0;

// // Tính phần tiền chưa thanh toán
// let balance = creditCardBalance - paymentBalance;

// // Kiểm tra xem phần tiền chưa thanh toán có lớn hơn 0 hay không
// if (balance > 0) {
//   pentalty = (balance * 1.5) / 100;
// }

// console.log("Số tiền phạt:", pentalty);

// // If-else
// let month = "10";
// // Kiểm tra xem user có nhập đúng tháng hay không
// if (month === "12") {
//   console.log("You are right!!!!!");
// } else {
//   console.log("You are wrong!!!!!");
// }

// // Bài tập: Tính tiền phải trả cho nhân viên dựa vào số giờ làm và tiền theo giờ. Nếu số giờ làm lớn hơn 40 phải trả giờ OT với hệ số 1.5
// let hours = 48; // số giờ làm
// let salary = 100_000; // số tiền mỗi giờ
// let rate = 1.5; // hệ số OT
// let totalSalary = 0; // tổng số tiền phải trả cho nhân viên

// if (hours <= 40) {
//   totalSalary = hours * salary;
// } else {
//   // Số giờ làm lớn hơn 40 tiếng
//   totalSalary = 40 * salary + (hours - 40) * salary * 1.5;
// }

// console.log("Số tiền phải trả cho nhân viên:", totalSalary);

// // If - elseif - else
// // let age = prompt("Guess my age:");
// let age = 27;

// if (age < 27) {
//   console.log("Too young");
// } else if (age > 27) {
//   console.log("Too old");
// } else {
//   console.log("Exactly");
// }

// // Bài tập: Cho đơn giá và số lượng sản phẩm, tính tiền phải trả dựa theo quy tắc:
// // số lượng từ 51 đến 100: giảm 8%
// // số lượng từ 101 trở lên: giảm 12%
// let productName = "Kitkat";
// let productQuantity = 70;
// let productPrice = 12_000;
// let totalPrice = 0;

// if (productQuantity <= 50) {
//   // Số lượng nhỏ hơn bằng 50
//   totalPrice = productPrice * productQuantity;
// } else if (productQuantity <= 100) {
//   // Số lượng từ 51 đến 100
//   totalPrice = productPrice * productQuantity * 0.92;
// } else {
//   // Số lượng từ 101
//   totalPrice = productPrice * productQuantity * 0.88;
// }

// console.log("Sản phẩm:", productName, "Tổng tiền:", totalPrice);

// // Toán tử bậc 3: let result = condition ? valueA : valueB
// let myAge = 15;

// let isAllowed;
// if (myAge > 16) {
//   isAllowed = true;
// } else {
//   isAllowed = false;
// }

// // Trường hợp sử dụng if-else để quyết định gán giá trị cho 1 biến, ta có thể rút gọn bằng toán tử bậc 3, chỉ sử dụng khi cần GÁN giá trị cho 1 biến theo điều kiện
// let accessAllowed = myAge > 16 ? true : false;

// let exp = 3;
// // let mySalary;
// // if (exp >  3) {
// //   mySalary = 1500
// // } else {
// //   mySalary = 1000
// // }
// let mySalary = exp > 3 ? 1500 : 1000;

// // Không nên lồng quá nhiều toán tử bậc 3 lại với nhau
// // let result = conditionA ? value1 : conditionB ? value2 : value3

// // // Chuyển thành if-else
// // let result
// // if(conditionA) {
// //   result = value1
// // } else if(conditionB) {
// //   result = value2
// // } else {
// //   result = value3
// // }

// // Switch case

var month = 7;

// => tháng 2 có 28 ngày
// if (month === 1) {
//   console.log("tháng 1 có 31 ngày");
// } else if (month === 2) {
//   console.log("tháng 2 có 28 ngày");
// } else if (month === 3) {
//   console.log("tháng 3 có 31 ngày");
// }

switch (month) {
  case 1:
    console.log("tháng 1 có 31 ngày");
    break;
  case 2:
    console.log("tháng 2 có 28 ngày");
    break;
  case 3:
    console.log("tháng 3 có 31 ngày");
    break;
  case 4:
    console.log("tháng 4 có 30 ngày");
    break;
  default:
    console.log("Tháng không hợp lệ!");
}
