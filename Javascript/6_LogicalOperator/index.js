// Toán tử logic:
// OR: ||
// AND: &&
// NOT: !

let a = 5;
let b = 8;
let c = 12;

// OR: Chỉ cần một điều kiện là true thì kết quả trả ra sẽ là true
// Trường hợp duy nhất trả ra false khi tất cả điều kiện đều là false
console.log(true || false || false || true); // true
console.log(a > b || c > b); // true
console.log(a > b || a > c); // false

let isAllowed = false;
let isAdmin = true;
// Kiểm tra quyền truy cập, thoả mãn 1 trong 2 điều kiện được phép truy cập hoặc là admin
if (isAllowed || isAdmin) {
  console.log("Access allowed");
}

// AND: Chỉ cần một điều là false thì kết quả trả ra sẽ là false
// Trường hợp duy nhất trả ra true khi tất cả điều kiện đều là true
console.log(true && false && true); // false
console.log(b > a && c > a); // true
console.log(b < a && c > a); // false

let hour = 12;
let minute = 30;
if (hour === 12 && minute === 30) {
  console.log("This time is 12:30");
}

// NOT: nghịch đảo giá trị boolean
console.log(!true);

let str = "";
// Kiểm tra xem chuỗi str có rỗng hay không
// Thay vì kiểm tra str === "" ta có thể dùng !str
if (!str) {
  console.log("Chuỗi str rỗng");
}

// => Muốn kiểm tra 1 biến a có phải là những giá trị: 0, "", false, null, undefined, NaN hay không ta chỉ cần if(!a)
