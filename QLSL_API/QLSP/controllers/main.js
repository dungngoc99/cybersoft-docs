getProduct();
// Gửi yêu cầu lấy dánh sách sản phẩm từ API
function getProduct() {
  apiGetProducts()
    .then((response) => {
      // Call API thanh cong
      const products = response.data.map((product) => {
        return new Product(
          product.id,
          product.name,
          product.price,
          product.img,
          product.description
        );
      });
      console.log("Products:", response.data);
      renderProducts(response.data);
    })
    .catch((error) => {
      //Call API that bai
      alert("API get products error");
    });
}
// Hàm thêm sản phẩm: DOM và gửi yêu cầu thêm sp tới API
function creatProduct() {
  const product = {
    name: getElement("TenSP").value,
    price: getElement("GiaSP").value,
    img: getElement("HinhSP").value,
    description: getElement("loaiSP").value,
  };

  apiCreatProducts(product)
    .then((response) => {
      // Sau khi gọi API thành công, dữ liệu chỉ mới đổi ở phía server
      // Cần gọi lại API lấy danh sách sản phẩm(lúc này bao gồm sp vừa được thêm thành công) và hiển thị ra giao diện
      getProduct();
    })
    .catch((error) => {
      alert("Thêm sản phẩm thất bại");
    });
}

// Hàm xóa sản phẩm
function deleteProduct(productId) {
  apiDeleteProducts(productId)
    .then(() => {
      getProduct();
    })
    .catch((error) => {
      alert("Xóa SP thất bại");
    });
}

// Hàm lấy chi tiết và hiển thị sản phẩm lên modal
function selecteProduct(productId) {
  getElement("#btnThemSP").addEventListener("click", () => {
    getElement(".modal-title").innerHTML = "Cập nhật sản phẩm";
    getElement(".modal-footer").innerHTML = `
    <button class="btn btn-secondary"
    data-dismiss="modal">Hủy</button>
    <button class="btn btn-primary" onclick="createProduct()">Cập nhật</button>
    `;
  });

  apiGetProductById(productId)
    .then(() => {})
    .catch(() => {});
}
// Hàm hiển thị danh sách sản phẩm rả table
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
          data-toggle="modal"
          data-target="#myModal"
          onclick="selecteProduct('${product.id}')
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
  });
}
// =============== DOM ==============
getElement("#btnThemSP").addEventListener("click", () => {
  getElement(".modal-title").innerHTML = "Thêm sản phẩm";
  getElement(".modal-footer").innerHTML = `
  <button class="btn btn-secondary"
  data-dismiss="modal">Hủy</button>
  <button class="btn btn-primary" onclick="createProduct()">Thêm</button>
  `;
});
