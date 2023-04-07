// Tạo mảng chứa danh sách sinh viên
let studentList = getStudentList();
console.log("studentList", studentList);
// Hiển thị danh sách sinh viên ra table khi mở trang web lên
renderTable(studentList);

// Hàm thêm sinh viên
function createStudent() {
  // B1: DOM
  let id = getElement("#txtMaSV").value;
  let name = getElement("#txtTenSV").value;
  let email = getElement("#txtEmail").value;
  let password = getElement("#txtPass").value;
  let dateOfBirth = getElement("#txtNgaySinh").value;
  let course = getElement("#khSV").value;
  let math = +getElement("#txtDiemToan").value;
  let physics = +getElement("#txtDiemLy").value;
  let chemistry = +getElement("#txtDiemHoa").value;

  // B1.1: Kiểm tra các input có hợp lệ hay không
  let isValid = validate();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }

  // B2: Khởi tạo object student
  const student = new Student(
    id,
    name,
    email,
    password,
    dateOfBirth,
    course,
    math,
    physics,
    chemistry
  );

  // B3: Thêm object student vào mảng studentList
  studentList.push(student);

  // B4: Gọi hàm renderTable để hiển thị danh sách studentList ra table
  renderTable(studentList);

  // B5: Gọi hàm resetForm để xoá hết tất cả value của các input
  resetForm();

  // B6: Lưu studentList xuống localStorage
  storeStudentList();
}

// Hàm tìm kiếm sinh viên theo tên
function searchStudent() {
  // B1: DOM
  let search = getElement("#txtSearch").value;

  // B2: Lọc những student có name khớp với giá trị search
  let newStudentList = studentList.filter((student) => {
    let name = student.name.toLowerCase();
    search = search.toLowerCase();

    return name.indexOf(search) !== -1;
  });

  // B3: Gọi hàm renderTable để hiển thị ra giao diện
  renderTable(newStudentList);
}

// Hàm xoá sinh viên theo id
function deleteStudent(studentId) {
  // Cách 1: Tìm index của student cần xoá trong mảng studentList và xoá bằng hàm splice
  // let index = studentList.findIndex((student) => {
  //   // Nếu return về true => trả ra index của phần tử dang duyệt qua
  //   // Trả ra -1 nếu tất cả đều return về false
  //   return student.id === studentId;
  // });
  // studentList.splice(index, 1);

  // Cách 2: Dùng filter
  studentList = studentList.filter((student) => {
    return student.id !== studentId;
  });

  // Gọi hàm renderTable để cập nhật giao diện
  renderTable(studentList);

  // Lưu studentList xuống localStorage
  storeStudentList();
}

// Hàm tìm sinh viên theo id để fill thông tin lên form
function selectStudentToUpdate(studentId) {
  // B1: Tìm sinh viên muốn chỉnh sửa dựa vào id
  let selectedStudent = studentList.find((student) => {
    // Nếu return về true => trả ra giá trị của phần tử dang duyệt qua
    // Trả ra undefined nếu tất cả đều return về false
    return student.id === studentId;
  });

  // B2: Lấy thông tin của sinh viên tìm được để fill lên form
  getElement("#txtMaSV").value = selectedStudent.id;
  getElement("#txtTenSV").value = selectedStudent.name;
  getElement("#txtEmail").value = selectedStudent.email;
  getElement("#txtPass").value = selectedStudent.password;
  getElement("#txtNgaySinh").value = selectedStudent.dateOfBirth;
  getElement("#khSV").value = selectedStudent.course;
  getElement("#txtDiemToan").value = selectedStudent.math;
  getElement("#txtDiemLy").value = selectedStudent.physics;
  getElement("#txtDiemHoa").value = selectedStudent.chemistry;

  // B3: Disable input mã sv và button thêm sv
  getElement("#btnCreate").disabled = true;
  getElement("#txtMaSV").disabled = true;
}

// Hàm cập nhật thông tin sinh viên
function updateStudent() {
  // B1: DOM
  let id = getElement("#txtMaSV").value;
  let name = getElement("#txtTenSV").value;
  let email = getElement("#txtEmail").value;
  let password = getElement("#txtPass").value;
  let dateOfBirth = getElement("#txtNgaySinh").value;
  let course = getElement("#khSV").value;
  let math = +getElement("#txtDiemToan").value;
  let physics = +getElement("#txtDiemLy").value;
  let chemistry = +getElement("#txtDiemHoa").value;

  // B1.1: Kiểm tra các input có hợp lệ hay không
  let isValid = validate();
  // isValid là false => form không hợp lệ => không cho phép tạo student bằng cách kết thúc hàm
  if (!isValid) {
    return;
  }

  // B2: Khởi tạo object student
  const student = new Student(
    id,
    name,
    email,
    password,
    dateOfBirth,
    course,
    math,
    physics,
    chemistry
  );

  // B3: Cập nhật thông tin mới của student
  let index = studentList.findIndex((student) => {
    return student.id === id;
  });
  studentList[index] = student;

  // B4: gọi hàm renderTable để cập nhật giao diện
  renderTable(studentList);

  // B5: gọi hàm reset form
  resetForm();

  // B6: Lưu studentList xuống localStorage
  storeStudentList();
}

// Hàm hiển thị danh sách sinh viên ra table
function renderTable(studentList) {
  // let name = "Dan"
  // let msg = "Hello " + name
  // let msg = `Hello ${name}` // => `Hello Dan`

  // Cách 1: Dùng vòng lặp for
  // let html = "";
  // for (let i = 0; i < studentList.length; i++) {
  //   let student = studentList[i];
  //   html += `
  //     <tr>
  //       <td>${student.id}</td>
  //       <td>${student.name}</td>
  //       <td>${student.email}</td>
  //       <td>${student.dateOfBirth}</td>
  //       <td>${student.course}</td>
  //       <td>${student.calcScore()}</td>
  //     </tr>
  //   `;
  // }

  // Cách 2: Dùng reduce
  let html = studentList.reduce((output, student) => {
    return (
      output +
      `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.email}</td>
        <td>${student.dateOfBirth}</td>
        <td>${student.course}</td>
        <td>${student.calcScore()}</td>
        <td>
          <button
            class="btn btn-primary"
            onclick="selectStudentToUpdate('${student.id}')"
          >
            Chỉnh sửa
          </button>
          <button
            class="btn btn-danger"
            onclick="deleteStudent('${student.id}')"
          >
            Xoá
          </button>
        </td>
      </tr>
    `
    );
  }, "");

  getElement("#tbodySinhVien").innerHTML = html;
}

// Hàm reset giá trị của các input
function resetForm() {
  getElement("#txtMaSV").value = "";
  getElement("#txtTenSV").value = "";
  getElement("#txtEmail").value = "";
  getElement("#txtPass").value = "";
  getElement("#txtNgaySinh").value = "";
  getElement("#khSV").value = "";
  getElement("#txtDiemToan").value = "";
  getElement("#txtDiemLy").value = "";
  getElement("#txtDiemHoa").value = "";

  getElement("#txtMaSV").disabled = false;
  getElement("#btnCreate").disabled = false;
}

function getElement(selector) {
  return document.querySelector(selector);
}

// ==========================================================
// Validate input trước khi cho phép thêm/cập nhật sinh viên
function validate() {
  // Mặc định ban đầu là form hợp lệ
  let isValid = true;

  // kiểm tra mã sv
  let id = getElement("#txtMaSV").value;
  if (!id.trim()) {
    // Input mã sv không hợp lệ
    isValid = false;
    getElement("#spanMaSV").innerHTML = "Mã sinh viên không được để trống";
  }

  // Kiểm tra email
  let email = getElement("#txtEmail").value;
  if (!email.trim()) {
    isValid = false;
    getElement("#spanEmailSV").innerHTML =
      "Email sinh viên không được để trống";
  } else if (!/^[\w.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
    isValid = false;
    getElement("#spanEmailSV").innerHTML = "Email sinh viên không hợp lệ";
  } else {
    getElement("#spanEmailSV").innerHTML = "";
  }

  // Kiểm tra password
  let password = getElement("#txtPass").value;
  if (!password.trim()) {
    isValid = false;
    getElement("#spanMatKhau").innerHTML =
      "Mật khẩu sinh viên không được để trống";
  } else if (
    !/((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{8,20})/.test(password)
  ) {
    isValid = false;
    getElement("#spanMatKhau").innerHTML = "Mật khẩu sinh viên không hợp lệ";
  } else {
    getElement("#spanMatKhau").innerHTML = "";
  }

  return isValid;
}

// ==========================================================
// Viết các hàm xử lý lưu/lấy thông tin danh sách sinh viên từ localStorage
function storeStudentList() {
  // Chuyển array studentList thành JSON
  const json = JSON.stringify(studentList);
  // Lưu xuống localStorage với key studentList
  localStorage.setItem("studentList", json);
}

function getStudentList() {
  // Lấy data từ localStorage với key studentList
  const json = localStorage.getItem("studentList");
  if (!json) {
    return [];
  }

  // Chuyển JSON thành array
  const studentList = JSON.parse(json);
  // Bởi vì khi chuyển object thành JSON, tất cả phương thức của object đó đều bị mất
  // Ta cần khởi tạo lại các object từ constructor để các object có thể sử dụng lại các phương thức
  for (let i = 0; i < studentList.length; i++) {
    const student = studentList[i];
    studentList[i] = new Student(
      student.id,
      student.name,
      student.email,
      student.password,
      student.dateOfBirth,
      student.course,
      student.math,
      student.physics,
      student.chemistry
    );
  }

  return studentList;
}
