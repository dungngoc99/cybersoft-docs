// Function constructor: khuôn mẫu để tạo thành các object
// Bắt buộc dùng function decleration để tạo, và phải viết hoa chữ cái đầu tiên
// Cách sử dụng: const student = new Student("0001", "Dan", "Bình thường", 8, 5)
// Javascript prototype

// B1: Khai báo các giá trị khởi tạo cho object trong tham số hàm
// B2: Dùng this để khai báo các thuộc tính cho object
function Student(id, name, type, math, literature) {
  // JS ngầm định tạo ra 1 object: this = {}

  // this.id: thuộc tính của object
  // id: giá trị được truyền vào khi khởi tạo object
  this.id = id;
  this.name = name;
  this.type = type;
  this.math = math;
  this.literature = literature;

  // this.calcScore = function () {
  //   return (this.math + this.literature) / 2;
  // };

  // JS ngầm định return về object this
}
// Để khai báo các method cho constructor ta nên dùng prototype
Student.prototype.calcScore = function () {
  return (this.math + this.literature) / 2;
};
Student.prototype.getRank = function () {
  let score = this.calcScore();

  if (score >= 8) {
    return "Giỏi";
  }

  if (score >= 6.5) {
    return "Khá";
  }

  if (score >= 5) {
    return "Trung Bình";
  }

  return "Yếu";
};

// Sử dụng:
let student1 = new Student("0001", "Dan", "Khá", 8, 5);
console.log(student1);
console.log(student1.calcScore());
console.log(student1.getRank());

let student2 = new Student("0002", "Hieu", "Khá", 9, 6);
console.log(student2);
console.log(student2.calcScore());
console.log(student2.getRank());
