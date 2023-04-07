// Data types (kiểu dữ liệu): loại dữ liệu mà một biến lưu trữ
// JS cung cấp một vài kiểu dữ liệu cơ bản như sau:
// - number (số)
// - string (chuỗi)
// - boolean (luận lý)
// - null
// - undefined

// Number
let a = 2;
let b = 5;

// Phép toán số học: +, -, *, /, % (chia lấy phần dư), ++ (tăng 1 đơn vị), -- (giảm một đơn vị)
let c = a + b; // 7
console.log("a + b =", c);

let d = b - a; // 3
console.log("b - a =", d);

let e = a * b; // 10
console.log("a * b =", e);

let f = b / a; // 2.5
console.log("b / a =", f);

let g = b % a; // 1
console.log("b % a =", g);

// Phép gán: =, +=, -=, *=, /=, %=
a += 1; // tương đương a = a + 1
console.log("a += 1", a);
b *= 3; // tương đương b = b * 3
console.log("b *= 3", b);

// ++, --
a++; // tương đương a += 1
console.log("a++", a); // 4
++a;
console.log("++a", a); // 5

// Nếu phép toán ++, -- được đưa vào phép gán, thì vị trí đặt phép toán sẽ ảnh hưởng tới kết quả cuối cùng

// Nếu để phép toán ++, -- đằng sau tên biến thì nó sẽ lấy giá trị hiện tại của biến để thực hiện phép tính và gán kết quả, sau đó mới tăng/giảm giá trị của biến
// Giá trị hiện tại: a = 5, b = 15
let h = a++ + b++;
console.log("a++ + b++ =", h, a, b);

// Giá trị hiện tại: a = 6, b = 16
// Nếu để phép toán ++, -- đằng trước tên biến thì nó sẽ lấy giá trị hiện tại của biến tăng/giảm trước, sau đó mới thực hiện phép tính và gán kết quả
let i = ++a * ++b;
console.log("++a * ++b =", i, a, b);

// Bài tập 1: Tính cạnh huyền tam giác ABC vuông tại A, cho biết 2 cạnh góc vuông
// Input: độ dài AB, AC
let ab = 3;
let ac = 4;

// Xử lý: bc^2 = ab^2 + bc^2
// Cách tính a^n:
// - a * a * ... * a (n lần)
// - Sử dụng toán tử **: a ** n
// - Sử dụng đối tượng Math được hỗ trợ mặc định trong JS: Math.pow(a, n)

// Cách tính căn bậc 2 của a
// Math.sqrt(a)
let bc = Math.sqrt(ab ** 2 + Math.pow(ac, 2));

// Output: độ dài BC
console.log("Bài tập 1: Độ dài BC =", bc);

// NOTE: cách tính căn bậc n: Math.pow(a, 1/n)

// Một số phương thức thường dùng của Math
console.log("Làm tròn xuống", Math.floor(7.8));
console.log("Làm tròn lên", Math.ceil(7.8));
console.log("Làm tròn tới số nguyên gần nhất", Math.round(5.4));
console.log("Tìm min", Math.min(4, 8, 3, 11, 4, 9));
console.log("Tìm max", Math.max(4, 8, 3, 11, 4, 9));

// Bài tập 2: Nhập vào n có 3 ký số, tính và xuất tổng 3 ký số của n
// VD: n = 361 => 3 + 6 + 1 = 10
let n = 495; // input
let total = 0; // output

// Thực hiện phép chia lấy phần dư cho 10, sẽ luôn lấy được số cuối cùng
total += n % 10; // total = 1
// Thực hiện phép chia cho 10 và làm tròn xuống, để loại bỏ con số cuối cùng
n = Math.floor(n / 10); // n = 36

// Lặp lại 2 bước trên
total += n % 10; // total = 7
n = Math.floor(n / 10); // n = 3

// Ở lần cuối cùng n chỉ còn 1 ký số, ta chỉ cần cộng với total
total += n; // total = 10

console.log("Bài tập 2: Giá trị tổng 3 ký số =", total);

// String (chuỗi)
let firstName = "Hieu";
let lastName = "Nguyen";

// Nối chuỗi bằng toán tử +
let fullName = firstName + " " + lastName;
console.log("fullName:", fullName);

// Kí tự \n trong chuỗi dùng để xuống hàng
let msg =
  "Chào mừng các bạn đến với khoá học bootcamp của Cybersoft.\n Khoá học bootcamp về FE cung cấp kiến thức về HTML, CSS, Javascript";
console.log(msg);

// Boolean (true/false)
let isActive = true;
let isLoggedIn = false;

// Ứng dụng của boolean dùng trong các phép toán so sánh
let x = 5;
let y = 8;
let z = 5;
let w = "8";

// - So sánh bằng: ==, ===
// Toán tử ==: đưa 2 giá trị về cùng kiểu dữ liệu trước khi so sánh giá trị
console.log("x == y:", x == y);
console.log("x == z:", x == z);
console.log("y == w:", y == w);
// Toán tử ===: kiểm tra kiểu dữ liệu trước tiên, nếu khác kiểu dữ liệu trả về false
console.log("y === w:", y === w);
// => Luôn luôn dùng toán tử === để so sánh

// - So sánh khác: !=, !==
console.log("x != y:", x != y);
console.log("y != w:", y != w);
console.log("y !== w:", y !== w);

// - So sánh lớn/bé: >, >=, <, <=
console.log("x < y:", x < y);
console.log("y <= z:", y <= z);

// So sánh chuỗi
// So sánh từng cặp kí tự một trong 2 chuỗi theo bãng mã ASCII
let nameA = "Alice";
let nameB = "Anna";
console.log("nameA === nameB:", nameA === nameB);
console.log("nameA > nameB:", nameA > nameB);

// null - undefined
// Tạo một biến và chưa biết gán giá trị gì nó cho nó, ta có thể gán null đại diện như là một giá trị chưa biết
let age = null;
console.log("null:", age);

// Tạo ra một biến mà không gán giá trị, thì giá trị mặc định của nó là undefined
let email;
// let email = undefined;
console.log("undefined:", email);

// Cách kiểm tra kiểu dữ liệu của một biến: typeof
let m = 10;
console.log("typeof m:", typeof m);
let str = "Hula";
console.log("typeof str:", typeof str);

console.log("typeof age:", typeof age);
console.log("typeof email:", typeof email);
