
// *********************         HEADER      **********************
function dropdown(){
    var menu=document.getElementById('menu');
    if(menu.style.display=='block'){
        menu.style.display='none'
    }
    else{
        menu.style.display='block';
    }
}


// *********************         HERO SECTION      **********************
// var slider_images = document.querySelectorAll('.slider-content');
// var radio1 = document.getElementById('slide1');
// var radio2 = document.getElementById('slide2');
// var slider_image_css1 = window.getComputedStyle(slider_images[0]);

// function moveLeft() {
//     // var slider_image_css2 = window.getComputedStyle(slider_images[1]);

//     if (slider_image_css1.getPropertyValue('display') !== 'none') {
//       slider_images[0].style.display = 'none';
//       slider_images[1].style.display = 'block';
//       radio1.checked=false;
//       radio2.checked=true;
//     } 
//     else
//     {
//       slider_images[0].style.display = 'block';
//       slider_images[1].style.display = 'none';
//       radio1.checked=true;
//       radio2.checked=false;
//     }
// }

// function move_right(){
//   if (slider_image_css1.getPropertyValue('display') !== 'none') {
//     slider_images[0].style.display = 'none';
//     slider_images[1].style.display = 'block';
//     radio1.checked=false;
//     radio2.checked=true;
//   } 
//   else
//   {
//     slider_images[0].style.display = 'block';
//     slider_images[1].style.display = 'none';
//     radio1.checked=true;
//     radio2.checked=false;
//   }
// }





// var slide_moving;
// function icon_change(){
//   var slide_pause=document.getElementById('slide_pause1'); 
//   var slide_play=`<i class="fa fa-circle-play" id="slide_pause1" onclick="icon_change()"></i>`;
//   var slide_pause2=`<i class="fa-regular fa-light fa-circle-pause" id="slide_pause1" onclick="icon_change()"></i>`

//   if(slide_pause.outerHTML === slide_pause2)
//   {
//     slide_pause.outerHTML=slide_play;
//     slide_moving = setInterval(moveLeft, 2000);
//   }
//   else
//   if(slide_pause.outerHTML == slide_play)
//   {
//     slide_pause.outerHTML=slide_pause2;
//     clearInterval(slide_moving);
//   }
// }
// }


var slider_images = document.querySelectorAll('.slider-content');
var radio1 = document.getElementById('slide1');
var radio2 = document.getElementById('slide2');
var currentIndex = 0;

function moveLeft() {
  slider_images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + slider_images.length) % slider_images.length;
  slider_images[currentIndex].style.display = 'block';
  RadioButtons();
}

function moveRight() {
  slider_images[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % slider_images.length;
  slider_images[currentIndex].style.display = 'block';
  RadioButtons();
}

function RadioButtons() {
  if (currentIndex === 0) {
    radio1.checked = true;
    radio2.checked = false;
  } else {
    radio1.checked = false;
    radio2.checked = true;
  }
}

var slide_moving;
slide_moving = setInterval(moveLeft, 3000);
function iconChange(){
  var slide_pause=document.getElementById('slide_pause1'); 
  var slide_play=`<i class="fa fa-circle-play" id="slide_pause1" onclick="iconChange()"></i>`;
  var slide_pause2=`<i class="fa-regular fa-light fa-circle-pause" id="slide_pause1" onclick="iconChange()"></i>`

  if(slide_pause.outerHTML === slide_pause2)
  {
    slide_pause.outerHTML=slide_play;
    clearInterval(slide_moving);
  }
  else
  if(slide_pause.outerHTML == slide_play)
  {
    slide_pause.outerHTML=slide_pause2;
    slide_moving = setInterval(moveLeft, 2000);
  }
}

