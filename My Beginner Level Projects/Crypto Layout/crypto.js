//**********************   HOME  **********************//
var all_btn = document.querySelectorAll('.btn2');
var count;
all_btn.forEach((item,el) => {
    all_btn[el].addEventListener('click', () => {
        for(var i=0; i<all_btn.length; i++){
            if(i != el){
                if(all_btn[i].classList.contains('movee')){
                    all_btn[i].classList.remove('movee');
                }
            }
        }
        all_btn[el].classList.toggle('movee');
    })
});