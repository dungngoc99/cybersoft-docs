// Truy cập tới tất cả tag p
let pEls = document.getElementsByTagName("p");
console.log("pEls:", pEls);

for (let i = 0; i < pEls.length; i++) {
  console.log(pEls[i]);
  pEls[i].style.fontSize = "30px";
}

// Truy cập các thẻ p có class là heading
let headingEls = document.getElementsByClassName("heading");
console.log("headingEls:", headingEls);

for (let i = 0; i < headingEls.length; i++) {
  console.log(headingEls[i]);
  pEls[i].style.color = "red";
}

// querySelector: nhận vào selector giống như ta dùng css
// id: #heading
// class: .heading
// tag: p
// trả về element đầu tiên tìm thấy
let pElFirst = document.querySelector("p");
console.log("pElFirst:", pElFirst);
let contentElFirst = document.querySelector(".content");
console.log("contentElFirst:", contentElFirst);

// querySelectorAll: tương tự querySelector nhưng trả về toàn bộ element
let contentEls = document.querySelectorAll(".content");
console.log("contentEls:", contentEls);

contentEls.forEach((elment, index) => {
  console.log(elment);
});

let listContentEls = document.querySelectorAll("ul > li > .content");
console.log("listContentEls:", listContentEls);





