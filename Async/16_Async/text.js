// Event loop: Cơ chế để javascript xử lý các tác vụ bất đồng bộ
// http://latentflip.com/loupe
console.log("a");

// Trình duyệt cung cấp 1 API setTimeout, dùng để trì hoãn các câu lệnh
// setTimeout được chạy một cách bất đồng bộ, nó sẽ không block các câu lệnh phía sau nó
setTimeout(() => {
  console.log("b");
}, 2000);

console.log("c");

// AJAX
function getDataFromAPI() {
  const xhttp = new XMLHttpRequest();
  // Mở và gửi 1 request từ client tới server
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();
  // Callback này sẽ được chạy khi server trả kết quả về cho client
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // Data nhận được từ API
      const posts = JSON.parse(xhttp.responseText);
      // Gọi hàm callback và đưa data từ API vào
      callback(posts);
    }
  };
}
getDataFromAPI((posts) => {
  // logic;
  let html = "";
  for (let i = 0; i < posts.length; i++) {
    html += `
          <p>${posts[i].title}</p>
        `;
  }
  document.body.innerHTML += html;
});

// ResfulAPI: chuẩn giao tiếp giữa client và server
//https://topdev.vn/blog/api-la-gi/

// Các tác vụ bất đồng bộ bị lệ thuộc lẫn nhau
function getData(url, callback) {
  // Gỉa lập thao tác gọi API bằng cách delay 2s
  setTimeout(() => {
    const data = { id: 1, name: John };
  }, 2000);
}
getData("url1", (data1) => {
  console.log(data1);
});
