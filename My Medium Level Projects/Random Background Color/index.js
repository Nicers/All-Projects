var btn = document.querySelector("button");
var colorSpan = document.querySelector("span");
var bgColor = document.querySelector("body");

btn.addEventListener("click", () => {
  var color = "";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 9) + 1;
  }
  colorSpan.innerHTML = "#" + color;
  bgColor.style.backgroundColor = "#" + color;
});
