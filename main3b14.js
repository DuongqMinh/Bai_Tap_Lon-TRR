function baitoanlietke(){
    function factorial(n) {
        if (n === 0 || n === 1) {
          return 1;
        }
        return n * factorial(n - 1);
      }
// Danh sách màu
const colors = ["Đỏ", "Xanh lam", "Vàng", "Lục", "Tím"];

// Hàm chọn ngẫu nhiên 2 quả bóng từ 5 quả (mỗi màu khác nhau)
function chooseBalls() {
    // Tạo mảng mới chứa các màu đã chọn
    const chosenColors = [];

    // Lặp 2 lần để chọn 2 quả bóng
    for (let i = 0; i < 2; i++) {
        // Tạo biến lưu trữ vị trí màu được chọn
        let chosenIndex;
        // Lặp lại cho đến khi chọn được màu chưa được chọn
        do {
            chosenIndex = Math.floor(Math.random() * colors.length);
        } while (chosenColors.includes(colors[chosenIndex]));

        // Thêm màu được chọn vào mảng
        chosenColors.push(colors[chosenIndex]);
    }
    // Trả về mảng các màu đã chọn
    return chosenColors;
}
// Hàm hiển thị kết quả
function displayResult(chosenColors) {
    const resultElement = document.getElementById("baitoanlietke");
    // Tạo element li cho mỗi kết quả
    const liElement = document.createElement("li");
    liElement.textContent = `Hai quả bóng được chọn là: ${chosenColors[0]} và ${chosenColors[1]}`;
    // Thêm element li vào ul
    resultElement.appendChild(liElement);
}
    var a = 5;
    var c = 2;
    const gt = (factorial(a) / factorial(a - c))/2;
for (let i = 0; i < gt; i++) {
    const chosenColors = chooseBalls();
    displayResult(chosenColors);
}
console.log(gt);
}