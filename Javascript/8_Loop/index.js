console.log("Xin chào, cybersoft", 1);
console.log("Xin chào, cybersoft", 2);
console.log("Xin chào, cybersoft", 3);
console.log("Xin chào, cybersoft", 4);
console.log("Xin chào, cybersoft", 5);

// While

// Khởi tạo biến điều kiện
let i = 1;
// Đưa biến điều kiện vào câu lệnh điều kiện
while (i <= 5) {
  // Hành động
  console.log("Xin chào, cybersoft", i);

  // Thay đổi biến điều kiện (tăng giá trị của biến i)
  i++;
}

// Tạo hàm và gán cho onclick của element
// Hàm này sẽ tự động được gọi khi click vào element
document.getElementById("bt1-submit").onclick = function () {
  // B1: DOM tới input để lấy giá trị number
  let n = +document.getElementById("bt1-number").value;
  // B2: Xử lý chia n cho 2, cho đến khi n nhỏ hơn bằng 1 và in giá trị ra giao diện
  let output = document.getElementById("bt1-output");
  let count = 1;

  while (n > 1) {
    n = Math.floor(n / 2);
    output.innerHTML += "count: " + count + " - num: " + n + "<br />";
    count++;
  }

  output.classList.add("d-block");
};

// Nhập vào 1 số bất kì, Tính tổng các kí số của số đó
// VD: 12345 => 1 + 2 + 3 + 4 + 5 = 15
function baitap1(n) {
  let sum = 0;

  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  return sum;
}
console.log("Tổng kí số của 12345 =", baitap1(12345));
console.log("Tổng kí số của 3581942 =", baitap1(3581942));

// Do...While: Điểm khác biệt so với while là do...while chắc chắn được chạy ít nhất 1 lần
let a = 1;
do {
  console.log("Do...while - Giá trị của a:", a);
} while (a > 5);

document.getElementById("bt2-submit").onclick = function () {
  let n = +document.getElementById("bt2-number").value;
  // VD: n = 3 => 1 + 2 + 3

  // Cách 1: while
  // let sum = 0;
  // let i = 1;
  // while (i <= n) {
  //   sum += i;
  //   i++;
  // }
  // Giải thích các bước với n = 3, i = 1
  // Lần 1: DK: 1 <= 3 => true. sum = 1, i = 2
  // Lần 2: DK: 2 <= 3 => true. sum = 3, i = 3
  // Lần 3: DK: 3 <= 3 => true. sum = 6, i = 4
  // Lần 4: DK: 4 <= 3 => false

  // Cách 2: do...while
  let sum = 0;
  let i = 0;
  do {
    i++;
    sum += i;
  } while (i < n);
  // Giải thích các bước với n = 3, i = 0
  // n = 3, i = 0
  // Lần 1: i = 1, sum = 1. DK: 1 < 3 => true
  // Lần 2: i = 2, sum = 3. DK: 2 < 3 => true
  // Lần 3: i = 3, sum = 6. DK: 3 < 3 => false

  let output = document.getElementById("bt2-output");
  output.classList.add("d-block");
  output.innerHTML = sum;
};

// For: Gom các khai báo khởi tạo biến điều kiên, biểu thức điều kiện và thay đổi giá trị của biến điều kiện vào 1 chỗ.
for (let j = 1; j <= 5; j++) {
  console.log("Xin chào, BC42", j);
}

// Tính tổng các số chẵn từ 1 đến n
function baitap2(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log("Tổng các số chẵn từ 1 đến 10", baitap2(10));
console.log("Tổng các số chẵn từ 1 đến 200", baitap2(200));

// Kiểm tra một số n có phải là số nguyên tố hay không
// SNT: số tự nhiên lớn hơn 1 chỉ chia hết cho 1 và chính nó
function baitap3(n) {
  // Kiểm tra nếu n < 2 => Không phải SNT
  if (n < 2) {
    return false;
  }

  // Kiểm tra nếu n === 2 => Nó là SNT
  if (n === 2) {
    return true;
  }

  // Kiểm tra nếu n là số chẵn => Không phải SNT
  if (n % 2 === 0) {
    return false;
  }

  // Ta mặc định ban đầu n là SNT
  // let isPrime = true;
  // Chứng minh n không phải là SNT để thay đổi isPrime thành false
  // Kiểm tra từ 2 đến n - 1, xem có số nào mà n chia hết hay không
  // for (let i = 2; i < n; i++) {
  //   if (n % i === 0) {
  //     isPrime = false;
  //   }
  // }
  // return isPrime;

  // Tối ưu: Kiểm tra các số lẻ từ 3 đến căn bậc 2 của n, xem có số nào mà n chia hết hay không
  // return về false khi chứng minh được n không phải là SNT
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      // Lập tức thoát khỏi hàm (thoát khỏi vòng lặp luôn) và trả ra kết quả
      return false;
    }
  }

  return true;
}

console.log("5 là SNT", baitap3(5));
console.log("9 là SNT", baitap3(9));

// Câu lệnh break - dùng để thoát khỏi vòng lặp
// Yêu cầu cộng sum = 1 + 2 + 3 + ... sao cho sum > n
function demoBreak(n) {
  let sum = 0;
  let i = 1;

  // Cách 1:
  // while (sum < n) {
  //   // Hành động vẫn sẽ được lặp lại khi sum < n
  //   sum += i;
  //   i++;
  // }

  // Cách 2:
  while (true) {
    sum += i;
    i++;

    if (sum > n) {
      break;
    }
  }

  console.log("Demo break - sum =", sum);
}
demoBreak(100);

// Câu lệnh continue - Bỏ qua các câu lệnh của lần lặp hiện tại
// Đối với while nó sẽ lập tức nhảy tới bước kiểm tra biểu thức điều kiện
// Đối với for nó sẽ lập tức nhay tới bước thay đôi giá trị biến điều kiện
function demoContinue() {
  // Cộng tất cả các số từ 1 đến 5 trừ số 4
  let sum = 0;
  for (let i = 1; i <= 5; i++) {
    if (i === 4) {
      continue;
    }
    // Những câu lệnh phía dưới sẽ bị bỏ qua nếu gặp lệnh continue
    sum += i;
  }
}

// Vòng lặp lồng nhau
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    console.log("Giá trị i - j", i, j);
  }
}
// Với i = 1 => Chạy j từ 1 đến 5
// Với i = 2 => Chạy j từ 1 đến 5
// ...
// Với i = 5 => Chạy j từ 1 đến 5

// YC: Vẽ hình vuông * kích thước 5x5
//     1 2 3 4 5
//  1  * * * * *
//  2  * * * * *
//  3  * * * * *
//  4  * * * * *
//  5  * * * * *
let square = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    square += "* ";
  }

  square += "\n";
}
console.log(square);

// Demo break với vòng lặp lồng nhau
for (let i = 1; i <= 5; i++) {
  console.log("i", i);

  for (let j = 1; j <= 5; j++) {
    if (j === 3) {
      break;
    }
    console.log("j", j);
  }
}







