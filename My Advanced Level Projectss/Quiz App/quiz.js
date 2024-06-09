var inner1 = document.querySelector(".inner1");
var inner2 = document.querySelector(".inner2");
var question = document.getElementById("question");
var options = document.querySelectorAll("li");
var all_data = document.querySelector(".data");
var result = document.querySelector(".result");
var question_result = document.querySelectorAll(".res");
var answer = document.getElementById("answer");
var total_mark = document.querySelector(".total");
var count = 0;
var mark = 0;
var sum = 0;

var quiz = [
  {
    question: "Who is developed Javascript Language ?.",
    option: ["John", "Newton", "Micheal"],
    answer: "John",
  },
  {
    question: "What is the name of last Prophet ?.",
    option: ["Adam", "Ibrahim", "Muhammad"],
    answer: "Muhammad",
  },
  {
    question: "What is the capital of Pakistan ?.",
    option: ["Karachi", "Islamabad", "Lahore"],
    answer: "Islamabad",
  },
  {
    question: "Makkah in which country ?.",
    option: ["Saudi Arabia", "Palestin", "Araq"],
    answer: "Saudi Arabia",
  },
];

var marks_question = [];

function start() {
  inner1.remove();
  inner2.style.display = "block";
}
// function displayy(){
//     question.innerHTML = quiz[count].question;
//             options.forEach((item, index) => {
//                 item.innerHTML = quiz[count].option[index];
//         });
// }
// if(count==0){
//     displayy();
// }
function check() {
  var user_answer = document.getElementById("answer").value;
  if (user_answer == "") {
    alert("Please enter any option");
  } else {
    var user_answer1 = user_answer.trim();
    if (user_answer1.toLowerCase() == quiz[count].answer.toLowerCase()) {
      // alert('Correct');
      count++;
      mark = mark + 25;
        marks_question[count - 1] = mark;

      if (count <= 3) {
        question.innerHTML = quiz[count].question;
        options.forEach((item, index) => {
          item.innerHTML = quiz[count].option[index];
        });
        answer.value = "";
      } else {
        resultt();
      }
    } else {
      // alert('False');
      count++;
      mark = 0;
      marks_question[count - 1] = mark;
      if (count <= 3) {
        question.innerHTML = quiz[count].question;
        options.forEach((item, index) => {
          item.innerHTML = quiz[count].option[index];
        });
        answer.value = "";
      } else {
        resultt();
      }
    }
  }
}

function resultt() {
  alert("Quiz Completed");
  inner2.style.display = "none";
  all_data.style.marginTop = "3rem";
  result.style.display = "block";
  // inner1.style.display = 'none';
  question_result.forEach((item, index) => {
    // alert(item.innerHTML+"  "+index+"  "+marks_question[index]);
    item.innerHTML = marks_question[index];
  });
  for (var i = 0; i < marks_question.length; i++) {
    sum += marks_question[i];
  }
  total_mark.innerHTML = sum;
}

function restart() {
  location.reload();
}
