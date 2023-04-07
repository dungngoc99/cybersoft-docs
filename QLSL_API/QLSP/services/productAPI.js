const URL = "https://63e86415ac3920ad5beb7b08.mockapi.io/api/products";
function apiGetProducts() {
  return axios({
    method: "GET",
    url: URL,
  });
}
function apiCreatProducts() {
  return axios({
    method: "GET",
    url: URL,
    data: product,
  });
}
function apiDeleteProducts() {
  return axios({
    method: "DELETE",
    url: `${URL}/${productId}`,
    data: product,
  });
}
function apiGetProductById(productId) {
  return axios({
    method: "GET",
    url: `${URL}/${productId}`,
    data: product,
  });
}
