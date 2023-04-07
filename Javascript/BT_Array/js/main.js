// Function DOM và lấy danh sách điểm
function getScores() {
  let scoreEls = document.querySelectorAll(".td-scores");
  let scores = [];
  scoreEls.forEach((element) => {
    scores.push(+element.innerHTML);
  });

  return scores;
}

// document.getElementById("btnSVCaoDiemNhat").onclick = () => {}
// document.getElementById("btnSVCaoDiemNhat").addEventListener("click", () => {})

document.querySelector("#btnSVCaoDiemNhat").addEventListener("click", () => {
  // Gọi hàm getScores để lấy danh sách điểm
  let scores = getScores();

  // scores = [6.4, 8.2, 3.4, 9.8, 2.4, 1.4, 9.4]

  // Mặc định số lớn nhất là phần tử đầu tiên của mảng
  let max = scores[0];
  // Duyệt từng phần tử và kiểm tra nếu phần tử nào lớn hơn giá trị max hiện tại, thì gán giá trị của phần tử đó cho max
  scores.forEach((value) => {
    if (value > max) {
      max = value;
    }
  });

  alert("Điểm cao nhất: " + max);
});

document.querySelector("#btnSVThapDiemNhat").addEventListener("click", () => {
  let scores = getScores();

  let min = scores[0];
  scores.forEach((value) => {
    if (value < min) {
      min = value;
    }
  });

  alert("Điểm thấp nhất: " + min);
});

document.querySelector("#btnSVDiemHon5").addEventListener("click", () => {
  let scores = getScores();

  let result = scores.filter((value) => value > 5);

  alert("Danh sách điểm lớn hơn 5: " + result.join(", "));
});







