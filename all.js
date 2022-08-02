// 預設計數
let count = 0;

// seletors
const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
btns.forEach((item) => {
  item.addEventListener("click", function (e) {
    const styles = e.target.classList;
    // class包含特定名稱時執行
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
