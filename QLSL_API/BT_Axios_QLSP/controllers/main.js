getProducts();

// Hàm gửi yêu cầu lấy danh sách sản phẩm từ API
function getProducts(searchValue) {
  apiGetProducts(searchValue)
    .then((response) => {
      // Call API thành công
      const products = response.data.map((product) => {
        return new Product(
          product.id,
          product.name,
          product.price,
          product.img,
          product.description
        );
      });

      renderProducts(products);
    })
    .catch((error) => {
      // Call API thất bại
      alert("API get products error");
    });
}

// Hàm thêm sản phẩm: DOM và gửi yêu cầu thêm sản phẩm tới API
function createProduct() {
  const product = {
    name: getElement("#TenSP").value,
    price: getElement("#GiaSP").value,
    img: getElement("#HinhSP").value,
    description: getElement("#loaiSP").value,
  };

  apiCreateProduct(product)
    .then((response) => {
      // Sau khi gọi API thêm sản phẩm thành công, dữ liệu chỉ mới thay đổi ở phía server
      // Cần gọi lại API lấy danh sách sản phẩm (lúc này sẽ bao gồm sản phẩm vừa được thêm thành công) và hiển thị ra giao diện
      getProducts();
    })
    .catch((error) => {
      alert("Thêm sản phẩm thất bại");
    });
}

// Hàm xoá sản phẩm
function deleteProduct(productId) {
  apiDeleteProduct(productId)
    .then(() => {
      getProducts();
    })
    .catch((error) => {
      alert("Xoá sản phẩm thất bại");
    });
}

// Hàm lấy chi tiết 1 sản phẩm và hiển thị lên modal
function selectProduct(productId) {
  apiGetProductById(productId)
    .then((response) => {
      const product = response.data;
      getElement("#TenSP").value = product.name;
      getElement("#HinhSP").value = product.img;
      getElement("#GiaSP").value = product.price;
      getElement("#loaiSP").value = product.description;

      // Mở và cập nhật giao diện cho modal
      getElement(".modal-title").innerHTML = "Cập nhật sản phẩm";
      getElement(".modal-footer").innerHTML = `
        <button class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
        <button class="btn btn-primary" onclick="updateProduct('${product.id}')">Cập nhật</button>
      `;
      $("#myModal").modal("show");
    })
    .catch((error) => {
      alert("Lấy chi tiết sản phẩm thất bại");
    });
}

// Hàm cập nhật sản phẩm
function updateProduct(productId) {
  const product = {
    name: getElement("#TenSP").value,
    price: getElement("#GiaSP").value,
    img: getElement("#HinhSP").value,
    description: getElement("#loaiSP").value,
  };

  apiUpdateProduct(productId, product)
    .then((response) => {
      getProducts();
    })
    .catch((error) => {
      alert("Cập nhật sản phẩm thất bai");
    });
}

// Hàm hiển thị danh sách sản phẩm ra table
function renderProducts(products) {
  let html = products.reduce((result, product, index) => {
    return (
      result +
      `
      <tr>
        <td>${index + 1}</td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
          <img src="${product.img}" with="70" height="70" />
        </td>
        <td>${product.description}</td>
        <td>
          <button
            class="btn btn-primary"
            onclick="selectProduct('${product.id}')"
          >
            Xem
          </button>
          <button
            class="btn btn-danger"
            onclick="deleteProduct('${product.id}')"
          >
            Xoá
          </button>
        </td>
      </tr>
    `
    );
  }, "");

  document.getElementById("tblDanhSachSP").innerHTML = html;
}

// ============ DOM ===============
getElement("#btnThemSP").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm sản phẩm";
  getElement(".modal-footer").innerHTML = `
    <button class="btn btn-secondary" data-dismiss="modal">Huỷ</button>
    <button class="btn btn-primary" onclick="createProduct()">Thêm</button>
  `;
});

getElement("#txtSearch").addEventListener("keydown", (event) => {
  // event là một object chứa thông tin về sự kiện được phát sinh
  // event.target: trả ra cái element phát sinh ra sự kiện
  if (event.key !== "Enter") return;

  const searchValue = event.target.value;
  getProducts(searchValue);
});

// ============ Helpers ==============
function getElement(selector) {
  return document.querySelector(selector);
}
