// Data Types (kiểu dữ liệu): loại dữ liệu là một biến lưu trữ
// JS cung cấp một vài kiểu dữ liệu cơ bản như sau:
// - string (chuỗi)
// - number (số)
// - boolean (luận lý true/false)
// - null (rỗng)
// - undefinded

// NUMBER
let a = 2;
let b = 5;
// Toán tử làm việc với number: + , - , * , / , % (chia lấy dư), ++ (tăng 1 đơn vị), -- (giảm 1 đơn vị)
let c = a + b; //7
console.log("a + b =", c);

let d = b - a; //3
console.log("b - a =", d);

let e = a * b; //10
console.log("a * b =", e);

let f = b / a; //2.5
console.log("b / a =", f);

let g = b % a; //1
console.log("b % a =", g);

// Phép gán: =, +=, -=, *=, /=, %=
a += 1; // tương đương với a = a + 1
console.log("a += 1 ~", a);
b *= 3; // tương đương với b = b * 3
console.log("b *= 3 ~", b);

// Phép ++, --
a++; // tương đương a = a + 1 = 3 + 1 = 4
console.log("a++ = ", a);
++a; // tương đương a = a + 1 = 4 + 1 = 5
console.log("++a =", a);

//Nếu phép toán ++, -- được đưa vào phép gán, thì vị trí đặt phép toán sẽ ảnh hưởng đến kết quả cuối cùng

//Giá trị hiện tại a = 5, b = 15
//Nếu để phép toán ++, -- đằng sau tên biến, nó sẽ lấy giá trị hiện tại của biến để thực hiện phép tính và gán kết quả, sau đó mới tăng giảm giá trị của biến
let h = a++ + b++;
console.log("a++ + b++ =", h, a, b); //20 6 16

//Giá trị hiện tại a = 6, b = 16
//Nếu để phép toán ++, -- đằng trước tên biến, nó sẽ lấy giá trị tăng (giảm) của biến, sau đó mới thực hiện phép tính
let i = ++a + ++b;
console.log("++a + ++b =", i, a, b); //24 7 17

let k = ++a * ++b;
console.log("++a * ++b =", k, a, b); //144 8 18

//Phép tính bình phương a^n:
// - a*a*...*a (n lần)
//Sử dụng toán tử **: a**n
//Sử dụng đối tượng Math được hỗ trợ mặc định trong JS: Math.pow(a, n)

//Phép tính căn bậc 2 của a:
//- Math.sqrt(a)
//Cách tính căn bậc n:
//- Math.pow(a, 1/n)

//Một số công thức thường dùng của Math
console.log("Làm tròn xuống của 7.89 =", Math.floor(7.89));
console.log("Làm tròn lên của 7.89 =", Math.ceil(7.89));
console.log("Làm tròn đến số nguyên gần nhất của 7.89 =", Math.round(7.89));
console.log("Làm tròn đến số nguyên gần nhất của 7.49 =", Math.round(7.49));
console.log(
  "Tìm min của dãy 3, 5, 9, 11, 2, 22 là:",
  Math.min(3, 5, 9, 11, 2, 22)
);
console.log(
  "Tìm max của dãy 3, 5, 9, 11, 2, 22 là:",
  Math.max(3, 5, 9, 11, 2, 22)
);

//Bài tập 1: Tam giác ABC vuông tại A, cho biết AB, AC. Tính BC?
//Input: độ dài AB, AC
let ab = 3;
let ac = 4;
//Xử lí: bc^2 = ab^2 + ac^2 => bc
let bc = Math.sqrt(ab ** 2 + Math.pow(ac, 2));
//Output: độ dài BC
console.log("Bài tập 1: Độ dài bc =", bc);

//Bài tập 2: Nhập vào n số có 3 ký số, tính và xuất tổng 3 ký số của n
//VD: n = 361 => 3 + 6 + 1 = 10
//Input:
let n = 361;
//Xử lí: thực hiện phép chia lấy dư để lấy được số lẻ cuối cùng
let total = 0;
total += n % 10;
//Thực hiện phép chia cho 10 rồi làm tròn xuống
n = n / 10;
n = Math.floor(n);
total += n % 10;
n = n / 10;
n = Math.floor(n);
total += n % 10;
//Output:
console.log("Bài tập 2: Giá trị tổng 3 ký số là: ", total);
