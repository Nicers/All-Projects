//Message
setTimeout(() => {
  alert('Ata Ur Rehman is the owner of this website! 😀');
}, 2000);



//************ HEADER Mobile
document.addEventListener("DOMContentLoaded", () => {
  function handleResize() {
    if (window.innerWidth < 769) {
      var tab = document.querySelector('#tab');
      var headerTab = document.querySelector('#header-tab');
      var menuBar = document.querySelector('#menu');
      tab.classList.add('hidden');
      tab.classList.remove('flex');
      tab.classList.add('flex-col');
      tab.classList.add('fixed');
      menuBar.style.display = 'block';
    } else if (window.innerWidth > 769) {
      var tab = document.querySelector('#tab');
      var headerTab = document.querySelector('#header-tab');
      var menuBar = document.querySelector('#menu');
      tab.classList.remove('hidden');
      tab.classList.add('flex');
      tab.classList.remove('flex-col');
      tab.classList.remove('fixed');
      tab.classList.remove('mobile-header');
      menuBar.style.display = 'none';
    }
  }

  handleResize();
  window.addEventListener("resize", handleResize);
});



//************ Show Mobile Tabs when click on 3 line bar
function showHeader(){
  var tab = document.querySelector('#tab');
  var menuBar = document.querySelector('#menu');
  if(tab.classList.contains('hidden')){
    tab.classList.remove('hidden');
    tab.classList.add('mobile-header');
    menuBar.style.zIndex = '1000';
    menuBar.classList.remove('fa-sharp','fa-solid','fa-bars-staggered');
    menuBar.classList.add('fa-solid','fa-xmark');
    }
    else{
      tab.classList.add('hidden');
      tab.classList.remove('mobile-header');
      menuBar.classList.remove('fa-solid', 'fa-xmark');
      menuBar.classList.add('fa-sharp', 'fa-solid', 'fa-bars-staggered');
  }
}


//************ HEADER FIXED
window.onscroll = function() {
  myFunction()
  topUp()
};
window.onload = function(){
  topUp();
} 

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
  header.classList.remove("sticky");
  }
}


//************ Bottom To Top
function topUp() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    var topBtn = document.querySelector('#goTop');
    topBtn.style.display = 'block flex';
  }else{
    topBtn.style.display = 'none flex';
  }
}
function goTop(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


//************* MENU 
var food = document.querySelectorAll(".food");
var snack = document.querySelectorAll(".snack");
var beverage = document.querySelectorAll(".beverage");

function showAll() {
  [food, snack, beverage].forEach((item) => {
    item.forEach((item) => {
      item.style.display = "block";
    });
  });
}

function showCommon(eat){
    eat.forEach((item) => {
        if ((item.style.display = "none")) {
          item.style.display = "block";
        }
      });
}

function showFood() {
  showCommon(food);

  [snack,beverage].forEach((item) => {
    item.forEach((item) => {
    item.style.display = "none";
  })
});
}

function showSnack() {
  showCommon(snack);

  [food, beverage].forEach((item) => {
  item.forEach((item) => {
    item.style.display = "none";
  })
});
}

function showBeverage() {
  showCommon(beverage);

  [food, snack].forEach((item) => {
    item.forEach((item) => {
    item.style.display = "none";
  })
});
}



//************************ Testimonial Slider
var allTestimonial = document.querySelectorAll('.card_article');

allTestimonial.forEach((item) => {
  item.addEventListener('mousedown', (e) => {
    item.style.cursor = 'grabbing';
  });
  
  item.addEventListener('mouseup', (e) => {
    item.style.cursor = 'grab';
  });

});
//******* SWIPER JS
let swiperCards = new Swiper(".card__content", {
  speed: 400,
  spaceBetween: 30,
  
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  grabCursor: true,

  breakpoints:{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});


