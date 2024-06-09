var btn = document.querySelectorAll("button");
var sign = document.querySelectorAll('i');
var expression = document.getElementById("expression");
var expression_show = document.getElementById("expression_show");
var operands = [];
var count = 0;

btn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.innerHTML != '=') {
      if (expression_show.value.length == 1 && expression_show.value == "0") {
        check_sign(item);
      } else {
        if (item.innerHTML == "C" || item.innerHTML == "CE") {
          if (item.innerHTML == "C") {
            expression_show.value = expression_show.value.slice(0, -1);
            expression.value = expression.value.slice(0, -1);
          } else {
            expression_show.value = 0;
            expression.value = 0;
          }
        } else {
          if (
            isNaN(operands[count - 1]) == true &&
            isNaN(item.innerHTML) == true &&
            (item.innerHTML != "C" || item.innerHTML != "CE")
          ) {
            alert("Do not allow!");
          } else {
            if (item.innerHTML == "C" || item.innerHTML == "CE") {
              if (item.innerHTML == "C") {
                expression_show.value = expression_show.value.slice(0, -1);
                expression.value = expression.value.slice(0, -1);
              } else {
                expression_show.value = 0;
                expression.value = 0;
              }
            } else {
              if(isNaN(item.innerHTML)){
                expression_show.value += '\n';
                expression.value += item.innerHTML;
                expression_show.value[expression_show.value.length-1].classList.add('item');               
              }
              else{
                expression_show.value += item.innerHTML;
                expression.value += item.innerHTML;
              }
              operands[count] = Number(item.innerHTML);
              count++;
            }
          }
        }
      }
    }
  });
});

function sum() {
  expression_show.value = eval(expression.value);
}

function check_sign(item) {
  if (isNaN(item.innerHTML) == true) {
    alert("Please Enter any numbers!");
  } else {
    expression_show.value = "";
    expression_show.value += item.innerHTML;
    expression.value += item.innerHTML;
    operands[count] = Number(item.innerHTML);
    count++;
  }
}
