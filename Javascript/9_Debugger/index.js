// Trường hợp lỗi hay gặp, DOM đến một element với id không tồn tại sẽ trả ra null
let inputEl = document.getElementById("input");
// console.log(inputEl.value);
// Uncaught TypeError: Cannot read properties of null (reading 'value')

function demo() {
  // debugger; // Luôn nhớ xoá câu lệnh debugger sau khi đã kiểm tra xong
  let a = 5;
  let b = 10;
  let c = a + b;
}

demo();
