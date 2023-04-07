// Trong JS chia làm 2 loại kiểu dữ liệu
// + Kiểu dữ liệu nguyên thuỷ (primitive values): string, number, boolean, null, undefined
// + Kiểu dữ liệu object (reference values): array, object

// Ta copy giá trị của biến msg gán cho biến letters, chúng ta sẽ có 2 biến ĐỘC LẬP với nhau, và mỗi biến đều lưu trữ giá trị "Hello"
let msg = "Hello";
let letters = msg;

// Khi một object được gán cho một biến, biến đó không lưu trữ bản thân object đó mà chỉ lưu trữ địa chỉ của vùng nhớ chứa object đó. Nói một cách khác biến đó là tham chiếu tới object
let user = {
  name: "Alice",
};

// Khi ta copy một biến object, thì ta chỉ copy reference (tham chiếu tới vùng nhớ), còn bản thân object không được tạo mới
let admin = user;
admin.email = "alice@gmail.com";

console.log("Object user:", user);

// So sánh object

let obj1 = { a: 1 };
let obj2 = { a: 1 };
// Khi ta thực hiện so sánh object là ta đang so sánh tham chiếu (địa chỉ vùng nhớ) của nó
console.log("obj1 === obj2", obj1 === obj2); // false

let obj3 = obj1; // Cả 2 biến obj1 và obj3 tham chiếu tới cùng một vùng nhớ
console.log("obj1 === obj3", obj1 === obj3); // true

// Clone (nhân bản) object
let student = {
  name: "Bob",
  age: 20,
};

// Dùng Object.assign để tạo ra một object mới và kế thừa lại các thuộc tính của object hiện tại
let clone = Object.assign({}, student);
clone.email = "bob@gmail.com";

console.log("Object student", student);
console.log("Object clone student", clone);

// Khai báo object bằng const
const staff = {
  name: "Max",
  age: 30,
  email: "max@gmail.com",
};

// Ta không thể gán object mới cho biến const
// staff = { name: "Mike" };

// Tuy nhiên ta vẫn có thể thay đổi các properties của object
staff.name = "Max Mad";
staff.age = 28;

// NOTE: thông thường khi khai báo object, array, function ta hay dùng const
