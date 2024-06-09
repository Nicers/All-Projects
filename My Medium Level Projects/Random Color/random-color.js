function generate(){
          const t=document.querySelector('.text');
          const num=Math.floor(Math.random()*16777255);
         const cl='#'+num.toString(16);
          console.log(num);
          t.innerHTML=cl;
          document.body.style.backgroundColor=cl;
}


/*document.getElementsByClassName('bt').addEventListener( 
  "click",
  generate
)*/

generate();