var table = document.querySelector("#question");
var fullQuestion = document.querySelectorAll(".fullQuestion");

const answers = [
  `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
  `Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from Rs 250 to Rs 1,100 a month. No extra costs, no contracts.`,
  `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
  `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`,
  `Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.`,
  `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
];

console.log(answers[0]);
function showAnswer(index) {
  if (fullQuestion[index].childElementCount == 1) {
    createAnswer(index);
  } else {
    deleteAnswer(index);
  }
}

function createAnswer(index) {
  var answer = `
    <div class='px-5 py-6 bg-[#353434]' id='ans${index}'>
    <p class='py-5'>${answers[index]}</p>    
    </div>
    `;
  changeIcon(index);
  fullQuestion[index].innerHTML += answer;
}

function changeIcon(index) {
  var di = fullQuestion[index].querySelector("div i");
  di.classList.toggle("fa-add");
  di.classList.toggle("fa-multiply");
}
function deleteAnswer(index) {
  var ans = fullQuestion[index].querySelector(`#ans${index}`);
  ans.remove();
  changeIcon(index);
}
