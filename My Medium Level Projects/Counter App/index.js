var btns = document.querySelectorAll("button");
var value = document.querySelector("#number");

var count = 0;
value.innerHTML = count;

btns.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.innerHTML == "DECREASE") {
      count -= 1;
      value.innerHTML = count;
      value.style.color = "red";
    } else if (item.innerHTML == "INCREASE") {
      count += 1;
      value.innerHTML = count;
      value.style.color = "green";
    } else if (item.innerHTML == "RESET") {
      value.innerHTML = 0;
      value.style.color = "white";
    }
  });
});
