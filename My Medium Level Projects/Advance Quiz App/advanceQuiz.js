var quiz = [
  {
    question: "Which is the largest desert in the world",
    option: ["Kalahari", "Gobi", "Sahara", "Antarctica"],
  },
  {
    question: "What is the largest desert in the world",
    option: ["Abahari", "Cobi", "Lahara", "Jntarctica"],
  },
  {
    question: "Who is the largest desert in the world",
    option: ["Lahari", "Obhi", "Khara", "Ptarctica"],
  },
  {
    question: "Why is the largest desert in the world",
    option: ["Hari", "Booi", "Ahara", "Tarctica"],
  },
];


var parentDiv = document.querySelector(".allBtn");
var childBtnDiv = document.querySelector(".optionBtn");
var question = document.querySelector("h4");
var allBtns = document.querySelectorAll("#optionBtn");
var count = 0,
  nextButton,
  marks = 0;


function displayContent(index, btns) {
  var nextBtn = document.querySelector(".next");
  nextBtn.remove();
  console.log(quiz[index].option[0]);
  question.innerHTML = `${index + 1}. ` + quiz[index].question;
  var option = quiz[index].option;
  console.log(option);

  for (var i = 0; i < option.length; i++) {
    allBtns[i].innerHTML = option[i];
  }
}


function checkAnswer(btn) {
  count++;
  if (btn.innerHTML == quiz[count-1].option[0]) {
    marks += 5; 
    btn.classList.add("btnCorrect");

    nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.classList.add("next");
    nextButton.classList.add("rounded");
    nextButton.classList.add("px-5");
    nextButton.classList.add("py-1");
    parentDiv.appendChild(nextButton);
    nextButton.addEventListener("click", () => {
      if (count <= 3) {
        displayContent(count, btn);
        btn.classList.remove("btnCorrect");
      } else {
        showResult();
      }
    });
  } else {
    btn.classList.add("btnFalse");
    allBtns[0].classList.add("btnCorrect");

    nextButton = document.createElement("button");
    nextButton.innerHTML = "Next";
    nextButton.classList.add("next");
    nextButton.classList.add("rounded");
    nextButton.classList.add("px-5");
    nextButton.classList.add("py-1");
    parentDiv.appendChild(nextButton);
    nextButton.addEventListener("click", () => {
      if (count <= 3) {
        btn.classList.remove("btnFalse");
        allBtns[0].classList.remove("btnCorrect");
        displayContent(count, btn);
      } else {
        showResult();
      }
    });
  }
}


var againPlay;
function showResult() {
  parentDiv.remove();
  var container = document.querySelector(".box");
  var content = document.createElement("h3");
  content.textContent = "You win! + Score = " + marks;
  container.appendChild(content);

  againPlay = document.createElement("button");
  againPlay.textContent = "Play Again";
  againPlay.classList.add("next");
  againPlay.classList.add("rounded");
  againPlay.classList.add("px-5");
  againPlay.classList.add("py-1");
  againPlay.classList.add("mt-3");
  container.appendChild(againPlay);
  againPlay.addEventListener('click', () => {
    document.location.reload();
  });
}
