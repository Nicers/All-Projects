//**********      LOADER     ************/
var loader = document.querySelector("#loader");
window.addEventListener("load", () => {
  this.setInterval(() => {
    loader.style.display = "none";
  }, 1000);
});

//**********      HEADER TOGGER     ************/
var nav_control = document.getElementById("togger");
var navSidebar = document.getElementById("sideBar");
var navCloser = document.getElementById("navCloser");

// nav_control.addEventListener('click',() => {
//     alert('yes')
//     navSidebar.classList.add('sidebar-show');
// });

function displaySide() {
  navSidebar.classList.add("sidebar-show");
}

navCloser.addEventListener("click", () => {
  navSidebar.classList.remove("sidebar-show");
});

//**********      WIDTH CALCULATION     ************/
document.addEventListener("DOMContentLoaded", () => {
  var innerHorizontal = document.querySelector("#inner-horizontal");
  var innerElement = innerHorizontal.innerHTML;
  var login =
    '<a href="" id="login" class="d-flex align-items-center gap-1 pe-4"> <i class="fa fa-user fs-3 fw-bold text-white"></i><span>Login</span></a>';

  var isAdd = false;

  function handleResize() {
    if (!isAdd && window.innerWidth >= 576) {
      isAdd = true;
      innerHorizontal.innerHTML = login + innerElement;
    } else if (isAdd && window.innerWidth < 576) {
      isAdd = false;
      var loginID = document.querySelector("#login");
      if (loginID) {
        loginID.remove();
      }
    }
  }

  handleResize();

  window.addEventListener("resize", handleResize);
});

//**********************      TESTIMONIAL SLIDER      ************************/

var control1 = document.querySelector("#one");
var control2 = document.querySelector("#two");
var control3 = document.querySelector("#three");
control1.addEventListener("click", () => {
  slide(0);
  if (control2.classList.contains("labels")) {
    control2.classList.add("slide-control");
    control2.classList.remove("labels");
    control1.classList.remove("slide-control");
    control1.classList.add("labels");
  } else if (control3.classList.contains("labels")) {
    control3.classList.add("slide-control");
    control3.classList.remove("labels");
    control1.classList.remove("slide-control");
    control1.classList.add("labels");
  } else {
    control1.classList.remove("slide-control");
    control1.classList.add("labels");
  }
});
control3.addEventListener("click", () => {
  slide(2);
  if (control2.classList.contains("labels") == true) {
    control2.classList.add("slide-control");
    control2.classList.remove("labels");
    control3.classList.remove("slide-control");
    control3.classList.add("labels");
  } else if (control1.classList.contains("labels")) {
    control1.classList.add("slide-control");
    control1.classList.remove("labels");
    control3.classList.remove("slide-control");
    control3.classList.add("labels");
  } else {
    control3.classList.remove("slide-control");
    control3.classList.add("labels");
  }
});

control2.addEventListener("click", () => {
  slide(1);
  if (
    control1.classList.contains("labels") == true ||
    control3.classList.contains("labels") == true
  ) {
    if (control1.classList.contains("labels") == true) {
      control1.classList.add("slide-control");
      control1.classList.remove("labels");
      control2.classList.remove("slide-control");
      control2.classList.add("labels");
    } else {
      control3.classList.add("slide-control");
      control3.classList.remove("labels");
      control2.classList.remove("slide-control");
      control2.classList.add("labels");
    }
  } else {
    control2.classList.remove("slide-control");
    control2.classList.add("labels");
  }
});

//----------------->      Slider Boxes( square ) Motion means itself move left and right
window.addEventListener("load", () => {
  autoSlide();
});
function autoSlide() {
  setInterval(() => {
    slide(getCardActiveIndex() + 1);
  }, 3000);
}
function slide(tagIndex) {
  const itemsArray = Array.from(document.querySelectorAll(".test-card1"));
  const itemActive = document.querySelector(".card_active");
  if (tagIndex >= itemsArray.length) {
    tagIndex = 0;
  }
  const newItemActive = itemsArray[tagIndex];
  newItemActive.classList.add("card_next_pos");
  setTimeout(() => {
    newItemActive.classList.add("card_next");
    itemActive.classList.add("card_next");
  }, 20);
  newItemActive.addEventListener(
    "transitionend",
    () => {
      itemActive.className = "test-card1";
      newItemActive.className = "test-card1 card_active";
    },
    {
      once: true,
    }
  );
}
function getCardActiveIndex() {
  const itemsArray = Array.from(document.querySelectorAll(".test-card1"));
  const itemActive = document.querySelector(".card_active");
  const itemActiveIndex = itemsArray.indexOf(itemActive);
  change_Control(itemActiveIndex);
  return itemActiveIndex;
}

//----------------->      Change Slider Circle Controller means when slide then its correspond circle color will be change.
function change_Control(tagIndex) {
  var control1 = document.querySelector("#one");
  var control2 = document.querySelector("#two");
  var control3 = document.querySelector("#three");

  if (tagIndex == 0) {
    if (control2.classList.contains("labels")) {
      control2.classList.add("slide-control");
      control2.classList.remove("labels");
      control1.classList.remove("slide-control");
      control1.classList.add("labels");
    } else if (control3.classList.contains("labels")) {
      control3.classList.add("slide-control");
      control3.classList.remove("labels");
      control1.classList.remove("slide-control");
      control1.classList.add("labels");
    } else {
      control1.classList.remove("slide-control");
      control1.classList.add("labels");
    }
  } else if (tagIndex == 2) {
    if (control1.classList.contains("labels")) {
      control1.classList.add("slide-control");
      control1.classList.remove("labels");
      control3.classList.remove("slide-control");
      control3.classList.add("labels");
    } else if (control2.classList.contains("labels")) {
      control2.classList.add("slide-control");
      control2.classList.remove("labels");
      control3.classList.remove("slide-control");
      control3.classList.add("labels");
    } else {
      control3.classList.remove("slide-control");
      control3.classList.add("labels");
    }
  } else if (tagIndex == 1) {
    if (
      control1.classList.contains("labels") == true ||
      control3.classList.contains("labels") == true
    ) {
      if (control1.classList.contains("labels")) {
        control1.classList.add("slide-control");
        control1.classList.remove("labels");
        control2.classList.remove("slide-control");
        control2.classList.add("labels");
      } else {
        control3.classList.add("slide-control");
        control3.classList.remove("labels");
        control2.classList.remove("slide-control");
        control2.classList.add("labels");
      }
    } else {
      control2.classList.remove("slide-control");
      control2.classList.add("labels");
    }
  }
}
