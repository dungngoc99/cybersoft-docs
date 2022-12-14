// Variables (biến): Cách để khai báo, yêu cầu hệ điều hành cung cấp vùng nhớ nhằm lưu trữ giá trị nào đó
// Cách khai báo biến trong JS:
// let + (tên biến) = (giá trị khai báo)
// Khai báo biến là message -> dữ liệu dạng chuỗi (string)
// Dấu nháy đôi dùng để xác định đó là đoạn văn bản
let message = "Hello World!!!";
// Gọi tới tên biến sẽ trả ra giá trị
console.log(message);

// var: là từ khóa khai báo biến cũ, hiện tại không được sử dụng nhiều nữa

// Khai báo biến là score -> dữ liệu là con số (number)
let score = 10;
console.log(score);

// Ta có thể gán biến toán tử =
score = 7;
// trong trường hợp này nếu khai báo let score = 7 -> báo lỗi, do let score đã được khai báo bằng 10 trước đó
console.log(score);

// Khai báo biến với từ khóa const (khai báo hằng số)
const PI = 3.14;
console.log(PI);
// PI = 3.1415 -> Lỗi
// Không thể gán biến đã khai báo const

// QUY TẮC ĐẶT TÊN BIẾN: 
// let first-name = "Alice"//Không đặt tên biến có dấu gạch (-)
// let 2name = "OK"//Không đặt tên biến bắt đầu bằng số, số ở vị trí khác đều được
// let let = "OK"//Không đặt tên biến trùng với từ khóa của JS

// Nên đặt tên biến có ý nghĩa: score-con số, massage-đoạn text,... Tránh đặt các tên như x = 10, y = "OK"
let firstName="Don"//Nên đặt tên biến theo dạng camelCase
console.log(firstName)

// Nếu là gọi hằng số, nên đặt tên biến tất cả in, phân cách nhau bởi dấu gạch dưới: NUMBER_OF_USERS