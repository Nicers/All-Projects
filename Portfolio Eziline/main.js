//  ****************  DESIGN  ***************
const container = document.querySelector('.design');
const design1 = document.querySelector('#design-one');
const design2 = document.querySelector('#design-two');
const design3 = document.querySelector('#design-three');
const design4 = document.querySelector('#design-four');
const icon = document.querySelector('.icon');



//  ****************  COUNTER  ***************
const counter1= document.querySelector('#counter-1');
const counter2= document.querySelector('#counter-2');
const counter3= document.querySelector('#counter-3');
const counter4= document.querySelector('#counter-4');
const counter5= document.querySelector('#counter-5');


function updated(e, targetValue) {
    let counts;
    let upto = 0;
    function updateCounter() {
      e.innerHTML = ++upto;
      if (upto == targetValue) {
        clearInterval(counts);
      }
    }
    counts = setInterval(updateCounter, 50);
  }
  
  window.addEventListener('scroll', () => {
    updated(counter1, 56);
    updated(counter2, 87);
    updated(counter3, 16);
    updated(counter4, 7);
  });





  //  ****************  SLIDER  ***************
  window.addEventListener('DOMContentLoaded', () => {
    function clickAutoplayButton() {
      const autoplayButton = document.querySelector('.slider__switch');
      if (autoplayButton) {
        autoplayButton.click();
      }
    }
    setTimeout(clickAutoplayButton, 1000);
  });




  //  ****************  Animation on Portfolio  ****************
  function rotateImageOnScroll() {
    const projectImages = document.querySelectorAll('.project-1right a img.rotate-img');
  
    function updateImageRotation() {
      const scrollY = window.scrollY;
      const rotationAngle = scrollY * 0.1;
      projectImages.forEach((image) => {
        const elementTop = image.getBoundingClientRect().top;
        const elementBottom = image.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight && elementBottom >= 0) {
          image.classList.add('animate');
        } else {
          image.classList.remove('animate');
        }
      });
  
      requestAnimationFrame(updateImageRotation);
    }
  
    updateImageRotation();
  }
  window.addEventListener('load', rotateImageOnScroll);