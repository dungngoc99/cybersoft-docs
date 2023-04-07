// Cú pháp khởi tạo một array lưu trữ giá trị, các giá trị được phân cách nhau bởi dấu phẩy
let numbers = [1, 5, 6, 8, 10];
console.log("numbers", numbers);

//   index       0      1        2
let animals = ["dog", "cat", "chicken"];
console.log("animals", animals);
// Truy cập vào từng phần tử trong mảng thông qua index (chỉ mục)
console.log("animals[1]", animals[1]);
// Trả ra undefined nếu truy cập index không tồn tại của mảng
console.log("animals[5]", animals[5]);

// Để lấy ra độ dài của mảng ta dùng length
console.log("Độ dài mảng animals:", animals.length);
// Để truy cập vào phần tử cuối cùng ta ta kết hợp với length
console.log("Phần tử cuối cùng của mảng animals:", animals[animals.length - 1]);

// Để duyệt tất cả phần tử trong một mảng ta dùng vòng lặp for
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log("Tổng các phần tử trong mảng numbers:", sum);

// Đối với kiểu dữ liệu là mảng, nó sẽ cung cấp cho ta các phương thức để thay đổi giá trị của nó như thêm, xoá, tìm kiếm,...

// push(value1, value2, value3, ...): Thêm một hoặc nhiều phần tử vào cuối mảng
animals.push("lion", "bear", "duck");
console.log("Mảng animals sau khi push:", animals);

// pop(): Xoá phần tử cuối cùng của mảng, và trả ra giá trị của phần tử đó
animals.pop();
console.log("Mảng animals sau khi pop:", animals);

// unshift(value1, value2, value3, ...): Thêm một hoặc nhiều phần tử vào đầu mảng
animals.unshift("duck", "rabbit");
console.log("Mảng animals sau khi unshift:", animals);

// shift(): Xoá phần tử đầu tiên của mảng, và trả ra giá trị của phần tử đó
animals.shift();
console.log("Mảng animals sau khi shift:", animals);

// splice(start, deleteCount, value1, value2, value3, ...)
// start: vị trí bắt đầu
// deleteCount: số lượng phần tử muốn xoá
// value1, value2, value3: các phần tử muốn thêm vào
// splice return về một mảng những phần tử đã bị xoá

let removedAnimals = animals.splice(2, 2); // Từ index thứ 2, xoá 2 phần tử
console.log("Mảng animals sau khi xoá phần tử bằng splice:", animals);
console.log("Mảng những phần tử đã bị xoá bằng splice:", removedAnimals);

animals.splice(3, 0, "duck", "chicken"); // từ index thứ 3, thêm 2 phần tử
console.log("Mảng animals sau khi thêm phần tử bằng splice:", animals);

// slice(start, end): Cắt mảng ban đầu ra một mảng con mới mà không làm thay đổi mảng ban đầu
// start: vị trí bắt đầu cắt
// end: vị trí kết thúc - 1
let subAnimals = animals.slice(1, 5); // Cắt từ index 1 đến 4
// let subAnimals = animals.slice(2); // Cắt từ index 2 đến cuối
// let subAnimals = animals.slice(-2); // Cắt 2 phần tử cuối cùng
console.log("Mảng animal:", animals);
console.log("Mảng con được cắt từ mảng animals:", subAnimals);

// concat: Nối 2 hoặc nhiều mảng lại với nhau, phương thức này trả về một mảng mới và không làm thay đổi các mảng ban đầu
let nums1 = [1, 5, 3];
let nums2 = [9, 4, 6];
let nums3 = [5, 8, 2];
let nums = nums1.concat(nums2, nums3);
console.log("Mảng nums sau khi được nối mảng:", nums);

// indexOf(value): tìm kiếm phần tử trong mảng
// Nó sẽ trả về index nếu tìm thấy phần tử đó, ngược lại sẽ trả về -1
// Trường hợp nếu một giá trị bị trùng lặp trong mảng, thì indexOf sẽ luôn luôn trả về index của phần tử đầu tiên nó tìm thấy
let index = animals.indexOf("duck");
if (index !== -1) {
  console.log("Tìm thấy giá trị 'duck' trong mảng animals");
} else {
  console.log("Không tìm thấy giá trị 'duck' trong mảng animals");
}

// lastIndexOf(value): tương tự indexOf nhưng tìm từ cuối mảng về đầu mảng

// join(separator): Chuyển mảng thành chuỗi
// separator: kí tự phân cách khi chuyển thành chuỗi
let str = animals.join(" - ");
console.log("Chuyển mảng thành chuỗi:", str);

// reverse(): đảo ngược vị trí các phần tử trong mảng
animals.reverse();
console.log("Mảng animals sau khi reverse", animals);

// sort(): Sắp xếp vị trí các phần tử trong mảng
animals.sort();
console.log("Mảng animals sau khi sort", animals);

// Trường hợp sort với mảng số
numbers.sort(compare); // chỉ truyền tên hàm không bao gồm cặp ()
console.log("Mảng numbers sau khi sort", numbers);

// Hàm hướng cho phương thức sort cách sắp xếp các giá trị như thế nào
function compare(a, b) {
  // sort tăng dần
  // return a - b

  // sort giảm dần
  return b - a;
}

// =======================================================================

let arrNums = [1, 2, 3, 4, 5];
console.log("arrNums", arrNums);

// - array.map(callback)
// Tạo ra một mảng mới từ mảng arrNums ban đầu, và các phần tử trong mảng mới sẽ x2 giá trị so với mảng ban đầu: [2, 4, 6, 8, 10]

// Cách 1: Dùng vòng lặp bình thường
// let arrDoubles = [];
// for (let i = 0; i < arrNums.length; i++) {
//   arrDoubles.push(arrNums[i] * 2);
// }
// console.log("arrDoubles", arrDoubles);

// Cách 2: Dùng map
let arrDoubles = arrNums.map((value, index) => {
  // Giá trị ta return bên trong callback sẽ được đưa vào mảng mới
  return value * 2;
});
console.log("arrDoubles", arrDoubles);

// Khi nào sẽ sử dụng hàm map: khi ta muốn xử lý từng phần tử trong mảng theo cùng một cách và trả về các giá trị sau khi xử lý cho một mảng mới (mảng mới có kích thước bằng mảng ban đầu)

// - array.filter(callback)
// Tạo ra một mảng mới chỉ bao gồm các số chẵn từ mảng arrNums ban đầu.

// Cách 1: Dùng vòng lặp bình thường
// let arrEven = [];
// for (let i = 0; i < arrNums.length; i++) {
//   if (arrNums[i] % 2 === 0) {
//     arrEven.push(arrNums[i]);
//   }
// }
// console.log("arrEven", arrEven);

// Cách 2: Dùng filter
let arrEven = arrNums.filter((value, index) => {
  // Trong callback nếu return về true, phần tử đó sẽ được giữ lại trong mảng mới
  return value % 2 === 0;
});
console.log("arrEven", arrEven);

// Khi nào sẽ sử dụng hàm filter: khi ta muốn lọc các phần tử từ mảng ban đầu cho một mảng mới (mảng mới có kích thước nhỏ hơn hoặc bằng mảng ban đầu, và giá trị các phần tử bên trong mảng mới không bị thay đổi)

// - array.reduce(callback)
// Tính tổng các phần tử trong mảng

// Cách 1:
// let total = 0;
// for (let i = 0; i < arrNums.length; i++) {
//   total += arrNums[i];
// }
// console.log("total:", total);

// Cách 2: Dùng reduce
// array.reduce((accumulator, value, index) => {})
// accumulator: giá trị trả về của lần tính toán trước đó, ở lần đầu tiên sẽ có 2 trường hợp
// + Có cung cấp giá trị khởi tạo: Lấy giá trị khởi tạo làm giá trị cho accumulator
// + Không cung cấp giá trị khởi tạo: Lấy giá trị đầu tiên của array làm giá trị cho accumulator
let total = arrNums.reduce((total, value, index) => {
  // Giá trị return trong callback sẽ được chuyển tiếp cho tham số total ở lần lặp tiếp theo
  // Ở lần lặp cuối cùng, giá trị return sẽ được trả ra là kết quả của hàm reduce
  return total + value;
}, 0);
console.log("total:", total);

// Mảng ban đầu: [1, 2, 3, 4, 5]
// Lần 1: total = 0, value = 1. return total + value = 1
// Lần 2: total = 1, value = 2. return total + value = 3
// Lần 3: total = 3, value = 3. return total + value = 6
// Lần 4: total = 6, value = 4. return total + value = 10
// Lần 5: total = 10, value = 5. return total + value = 15

// Khi nào sẽ sử dụng hàm reduce: khi ta muốn dùng giá trị của các phần tử trong mảng để tạo ra một thứ hoàn toàn khác (string, number, array,...)

// forEach
arrNums.forEach((value, index) => {
  // nhận được giá trị và index của phần tử đang duyệt qua và thực hiện một hành động nào đó
  // forEach khác map ở chỗ nó sẽ không trả về một mảng mới
  console.log(value, index);
});















