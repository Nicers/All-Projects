var icon = document.querySelector("#menuBar");
var tab = document.querySelector("#tabs");

icon.addEventListener("click", () => {
  if (tab.style.height == 0 || tab.style.height == "0px") {
    tab.style.height = "200px";
  } else {
    tab.style.height = "0";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 576) {
    tab.style.height = "auto";
  }
});
