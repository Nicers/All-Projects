var tab = document.getElementById('tab');
function clear_row(button) {

// ***** Method - 1   *******
    // var r1=button.parentNode.parentNode;
    // var index=r1.rowIndex;
    // var row=tab.rows[index];
    // row.remove();


// ***** Method - 2   *******
    // var r1=button.parentNode.parentNode;
    // r1.remove();


// ***** Method - 3   *******
    var row1 = button.closest('tr');  // closest finds the near parent of button related to table row.
    row1.remove();
}




// *************** ADD ROW  *********************
var tab2 = document.getElementById('tab2');
var tbody = tab2.querySelector('tbody');
function add_row() {
    var content = document.getElementById('con');
    // trim() remove white spaces & breaks from the text start and end.
    if (content.value.trim() == '') {
        alert('Please enter something')
    }
    else {
        var row2 = `
<tr>
<td><p>${content.value}</p><button class="edit" onclick="Edit()">Edit</button><button class="cross" onclick="clear_row(this)"><i class="fa-sharp fa-solid fa-xmark"></i></button></td>
</tr>
`;
        tbody.innerHTML += row2;
        content.value = '';
    }
}



// *************** EDIT ROW  *********************
function Edit(par){
    var input_content1=document.getElementById('con');

    if(input_content1.value.trim() == ''){

    var div_btn = document.getElementsByClassName('in_head')[0];
    var btn = document.createElement("button");
    btn.textContent = "Update";
    btn.addEventListener('click', () => {
        update(p_content,btn);
    });
    div_btn.appendChild(btn);

    var td_edit=par.parentNode;
    var p_content=td_edit.querySelector('p');
    input_content1.value=p_content.innerText;
    console.log(input_content1.value,'yes')
}
else{
alert('Please Add one row at a time')
}
}
function update(p_content,btn){
    var input_content2=document.getElementById('con');
    if(input_content2.value != ''){
      p_content.innerText=input_content2.value;
      alert('Text Successfully Updated');
      input_content2.value='';
      btn.remove();
    }
    else
    {
        alert('Please Add Something!');
    }
}