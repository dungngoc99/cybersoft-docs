// Cách 1: Thêm element bằng document.createElement và document.appendChild

// document.getElementById("submit").onclick = function () {
//   // B1: Lấy các giá trị của các inputs
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let address = document.getElementById("address").value;

//   // B2: Từ các giá trị input, tạo các thẻ tr, td

//   let tbody = document.getElementById("student-list"); // <tbody></tbody>

//   // Tạo thẻ tr, và đưa vào bên trong tbody
//   let tr = document.createElement("tr"); // <tr></tr>
//   tbody.appendChild(tr); // <tbody> <tr></tr> </tbody>

//   // Tạo thẻ td, chứa thông tin name và đưa vào bên trong tr
//   let tdName = document.createElement("td"); // <td></td>
//   tdName.innerHTML = name; // <td>Nam</td>
//   tr.appendChild(tdName); // <tbody> <tr> <td>Nam</td> </tr> </tbody>

//   // Tạo thẻ td, chứa thông tin email và đưa vào bên trong tr
//   let tdEmail = document.createElement("td");
//   tdEmail.innerHTML = email;
//   tr.appendChild(tdEmail);

//   // Tạo thẻ td, chứa thông tin address và đưa vào bên trong tr
//   let tdAddress = document.createElement("td");
//   tdAddress.innerHTML = address;
//   tr.appendChild(tdAddress);
// };

// Cách 2: Thêm element bằng innerHTML, kết hợp với cộng chuỗi
document.getElementById("submit").onclick = function () {
  // B1: Lấy các giá trị của các inputs
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let address = document.getElementById("address").value;

  // B2: Từ các giá trị input, tạo các thẻ tr, td
  let tdName = "<td>" + name + "</td>";
  let tdEmail = "<td>" + email + "</td>";
  let tdAddress = "<td>" + address + "</td>";

  let tr = "<tr>" + tdName + tdEmail + tdAddress + "</tr>";

  let tbody = document.getElementById("student-list");
  tbody.innerHTML += tr;
};
