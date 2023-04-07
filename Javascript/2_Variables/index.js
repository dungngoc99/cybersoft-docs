// Variables (biến): Cách để khai báo yêu cầu hệ điều hành cung cấp một vùng nhớ để lưu trữ một giá trị nào đó

// Cách khai báo biến trong JS
// Khai báo biến tên là message lưu trữ dữ liệu là 1 chuỗi (string)
let message = "Hello World!!!";
// Gọi tới tên biến sẽ trả ra giá trị
console.log(message);

// var là một từ khoá khai báo biến cũ, hiện tại không còn được sử dụng nhiều

// Khai báo biến tên là score lưu trữ dữ liệu là 1 con số (number)
let score = 10;
console.log(score);

// Ta có thể thay đổi giá trị của một biến bằng toán tử =
score = 7;
console.log(score);

// Khai báo biến với từ khoá const (khai báo một hằng số)
// Hằng số không cho phép gán lại giá trị mới
const PI = 3.14;
// PI = 3.1415 // Lỗi
console.log(PI);

// Convention (quy tắc) khi đặt tên biến

// let first-name = "Alice" // Không được đặt tên biến có kí tự "-"
// let 2name = "OK" // Không được đặt tên biến có số ở đầu
// let let = 1 // Tên biến không được trùng với các từ khoá của JS

let x = 10; // Nên đặt tên biến có ý nghĩa, thay vì x nên là score, value, number, total,...
let firstName = "Dan"; // Nên đặt tên biến theo dạng camelCase
// Nếu là hằng số thì nên đặt tên biến theo dạng NUMBER_OF_USERS
