setTimeout(() => {
  alert("Hi, click on the images to view the Instagram story!");
  alert("You can also swipe the images from right to left.");
}, 3000);


var column = document.querySelector("#column");
var imageDiv = document.querySelector("#stories");
var images = document.querySelectorAll(".story");
var p = document.createElement("p");
var width = 0;
images.forEach((item, index) => {
  var cIndex = item[index];
  item.addEventListener("click", () => {
    item.classList.add("active");
    imageDiv.classList.add("parent");
    imageDiv.style.borderBottom = "none";
    imageDiv.appendChild(p);
    p.classList.add("pp");
    var widthLine = setInterval(() => {
      width++;
      p.style.width = width + "%";
    }, 30);
    if (index == Array.from(images).indexOf(item)) {
      for (var i = 0; i < images.length; i++) {
        if (i != index) {
          images[i].style.display = "none";
        }
      }
    }

    setTimeout(() => {
      item.classList.remove("active");
      imageDiv.classList.remove("parent");
      imageDiv.style.borderBottom = "1px solid black";
      p.classList.remove("pp");
      width = 0;
      p.style.width = "0";
      p.remove();
      if (index == Array.from(images).indexOf(item)) {
        for (var i = 0; i < images.length; i++) {
          if (i != index) {
            images[i].style.display = "inline-block";
          }
        }
      }
      clearInterval(widthLine);
    }, 3000);
  });
});
