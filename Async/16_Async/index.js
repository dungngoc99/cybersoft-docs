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
function getDataFromAPI(callback) {
  const xhttp = new XMLHttpRequest();

  // Mở và gửi 1 request từ client tới server
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
  xhttp.send();

  // Call back này sẽ được chạy khi server trả kết quả về cho client
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Data nhận được từ API
      const posts = JSON.parse(xhttp.responseText);
      // Gọi hàm callback và đưa data từ API vào
      callback(posts);
    }
  };
}

getDataFromAPI((posts) => {
  // logic
  let html = "";
  for (let i = 0; i < posts.length; i++) {
    html += `
          <p>${posts[i].title}</p>
        `;
  }
  document.body.innerHTML += html;
});

document.body.innerHTML += "<h1>Hello BC42</h1>";

// ResfulAPI: Chuẩn giao tiếp giữa client và server
// https://topdev.vn/blog/api-la-gi/

// Các tác vụ bất đồng bộ bị lệ thuộc lẫn nhau
// VD: Lấy thông tin 1 user => Dùng thông tin của user (userId) để lấy tất cả bài posts của user đó => Từ thông tin của 1 bài posts (postId) để lấy tất cả comments của bài posts đó
function getData(url, callback) {
  // Giả lập thao tác gọi API bằng cách delay 2s
  setTimeout(() => {
    const data = { id: 1, name: "John" };
    callback(data);
  }, 2000);
}

// callback hell
getData("users url", (userData) => {
  console.log("Get user done");
  getData("posts url", (postsData) => {
    console.log("Get posts done");
    getData("comments url", (commentsData) => {
      console.log("Get comments done");
    });
  });
});

// Một kĩ thuật mới gọi là PROMISE được tạo ra để giải quyết callback hell
// Promise có 3 trạng thái
// - PENDING: Chờ xử lý
// - FULFILLED: Xử lý thành công
// - REJECTED: Xử lý thất bại

// Cú pháp để khởi tạo một promise
// Promise nhận vào 1 tham số là callback function, callback này có 2 tham số là resolve và reject
// resolve: function sẽ được gọi khi tác vụ bất đồng bộ trong promise xử lý thành công
// reject: function sẽ được gọi khi tác vụ bất đồng bộ trong promise có lỗi xảy ra
const promise = new Promise((resolve, reject) => {
  // Giả lập một tác vụ bất đồng bộ
  setTimeout(() => {
    // Xử lý thành công
    // const data = Math.floor(Math.random() * 100);
    // resolve(data);

    // Xử lý thất bại
    reject("Something wrong!!!");
  }, 3000);
});

// then: Dùng để xử lý khi Promise xử lý thành công (resolve bên trong Promise được gọi)
// catch: Dùng để xử lý khi Promise gặp lỗi (reject bên trong Promise được gọi)
promise
  .then((data) => {
    console.log("Promise fulfilled", data);
  })
  .catch((error) => {
    console.log("Promise rejected", error);
  });

// Giả lập các tác vụ bất đồng bộ lệ thuộc nhau bằng promise
function getDataPromise(url) {
  return new Promise((resolve, reject) => {
    // Giả lập thao tác gọi API bằng cách delay 2s
    setTimeout(() => {
      const data = "Data from promise";
      resolve(data);
    }, 2000);
  });
}

// Cơ chế chaining của promise
getDataPromise("users url")
  .then((userData) => {
    // Có thông tin của user, gọi tiếp get posts
    console.log("Promise - user done");
    return getDataPromise("posts url");
  })
  .then((postsData) => {
    // Có thông tin của posts, gọi tiếp get comments
    console.log("Promise - posts done");
    return getDataPromise("comments url");
  })
  .then((commentsData) => {
    // Có thông tin comments
    console.log("Promise - comments done");
  })
  .catch((error) => {
    console.log("Promise - error", error);
  });

// fetch: Hàm dùng để request API (thay thế cho XMLHttpRequest) dựa trên cơ chế của promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    if (!response.ok) {
      // request API thất bại
      // throw là từ khoá dùng để ném ra một lỗi, khi gặp từ khoá này ngay lập tức sẽ đi tới callback của catch
      throw "API ERROR";
    }

    return response.json();
  })
  .then((data) => {
    console.log("Fetch:", data);
  })
  .catch((error) => {
    console.log(error);
  });

// axios: thư viện dùng để request API, cũng dựa trên cơ chế của promise
axios({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/albums",
})
  .then((response) => {
    console.log("Axios:", response.data);
  })
  .catch((error) => {
    console.log("Axios:", error);
  });
