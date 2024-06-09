var open1=document.querySelector('.fa-sharp');
var close=document.querySelector('.open_icon');
var s_open=getComputedStyle(open1);

function opened(){
    if(s_open.getPropertyValue('display') === 'block'){
        // open1.style.display='none';
        // close.style.display='block';
            open1.style.display = 'none';
            close.style.right='-5.4%';
    }
}


function closed(){
    var s_close=getComputedStyle(close);
    if(s_open.getPropertyValue('display') === 'none'){
            open1.style.display = 'block';
            close.style.right='-100%';
        // open1.style.display='block';
        // close.style.display='none';
    }
}

