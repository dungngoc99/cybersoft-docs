//====================Kế thừa======================
class Student {
  //Phương thức khởi tạo, được tự động khởi chạy khi class được khởi tạo
  //Dùng để khởi tạo giá trị cho các thuộc tính
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  // khai báo phương thức
  sayHi() {
    console.log(`Hello ${this.name}`);
  }
}
const student = new Student("Alice", "alice@gmai.com");
console.log(student);
student.sayHi();

class Employee {
  constructor(id, email, name, age) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
  }
  print() {
    console.log(`ID:${this.id} - name:${this.name}`);
  }
  calcSalary() {
    return 3_000_000;
  }
}

// extends : từ khóa kế thừa
// class Sale kế thừa toàn bộ thuộc tính và phương thức class Employeee
class Sale extends Employee {
  // Nếu muốn bổ sung thêm các thuộc tính Sale, ta cần override constructor
  constructor(id, email, name, age, bonus) {
    // super: là từ khóa đại diện cho class cha mà nó đang kế thừa
    //super(...): gọi tới constructor của class cha
    super(id, email, name, age);
    //Tự định nghĩa các thuộc tính thuộc về class Sale
    this.bonus = bonus;
  }
  // Override lại phương thức calcSalray của class cha
  calcSalary() {
    // super.calcSalary(): gọi đến phương thức calcSalary() của class cha
    return super.calcSalary() * 1.5 * ((100 + this.bonus) / 100);
  }
}
const sale1 = new Sale("0001", "Khải", "khai@gmail.com", 22, 10);
console.log(sale1);
sale1.print();
const saleSalary = sale1.calcSalary();
console.log(sale1.calcSalary());

class Maketing extends Employee {
  constructor(id, email, name, age, KPI) {
    super(id, email, name, age);
    this.KPI = false;
  }
  //Phương thức chỉ thuộc Maketing
  setKPI() {
    //logic kiểm tra KPI true hay false
    this.KPI = true;
  }
  calcSalary() {
    return super.calcSalary() * 2.5;
  }
}
const maketing1 = new Maketing("0002", "Hiêu", "hieu@gmail,com", 20);
console.log(maketing1);
maketing1.print();
const maketing1Salary = maketing1.calcSalary();
console.log("Lương maketing:", maketing1Salary);
//==================== Đa hình ======================
const sale2 = new Sale("0003", "Tuấn", "tuan@gmail.com", 30, 15);
const sale3 = new Sale("0004", "Nam", "nam@gmail.com", 26, 16);
const maketing2 = new Maketing("0004", "Toàn", "toan@gmail.com", 24);
const employees = [maketing1, sale1, sale2, maketing2, sale3];

//Tính đa hình thể hiện ở chỗ khi các class khác nhau cùng kế thừa 1 class (Maketing và Sale cùng kế thừa Employees), mà ở class cha có định nghĩa 1 phương thức nào đó (phương thức calcSalary) thì ta chắc chắn có thể gọi tới phương thức đó mà không cần quan tâm nó thuộc Maketing hay Sale

function renderEmpoyees() {
  const html = employees.reduce((result, item) => {
    return (
      result +
      `
    <tr>
      <td>${item.name}</td>
      <td>${item.calcSalary()}</td>
      <td>${item.id}</td>
      <td>${item.email}</td>
    </tr>
    `
    );
  }, "");
  document.getElementById("employee-list").innerHTML = html;
}
renderEmpoyees();
