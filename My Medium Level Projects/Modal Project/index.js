// var openModal = document.querySelector('button');
var row = document.querySelector('#column');

function openModal(){
    var modal = document.createElement('div');
    modal.classList.add('modalOpen');

    var modalIcon = document.createElement('i');
    modalIcon.classList.add("fa-solid", "fa-xmark");
    modalIcon.setAttribute('onClick', 'closeModal()');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modalContent');
    var modalh1 = document.createElement('h1');
    modalh1.innerHTML = 'Open my';


    modalContent.appendChild(modalIcon);
    modalContent.appendChild(modalh1);
    modal.appendChild(modalContent);
    row.appendChild(modal);
}



var specifiedElement = document.querySelector('.modalContent');
document.addEventListener('click', function(event) {
    var isClickInside = specifiedElement.contains(event.target);
    if (isClickInside) {
      alert('You clicked inside')
    }
    else {
      alert('You clicked outside')
    }
});
function closeModal(){
    document.querySelector('.modalOpen').remove();
}