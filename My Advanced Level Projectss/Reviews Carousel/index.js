var btnMove = document.querySelectorAll(".btns");
var randomMove = document.querySelector("#surprise");

// Testimonial Box Elements
var image = document.querySelector("img");
var nam = document.querySelector("strong");
var title = document.querySelector("#title");
var description = document.querySelector("#description");

const allUsers = {
  user1: {
    image: "Images/ata.jpeg",
    name: "Ata Ur Rehman",
    title: "WEB DEVELOPER",
    description:
      "As a web developer, you wield the power to craft digital experiences, shaping the virtual landscapes where people interact, transact, and explore. Your expertise transcends mere lines of code; it's a fusion of creativity, logic, and innovation.",
  },
  user2: {
    image: "Images/imran.jpg",
    name: "Imran Khan",
    title: "PRIME MINISTER",
    description:
      "Imran Khan, Prime Minister, embodies hope, leadership, and change. His vision inspires, his actions resonate. A beacon of progress, shaping a brighter future for Pakistan.",
  },
  user3: {
    image: "Images/n12.jpg",
    name: "Anila",
    title: "APP DEVELOPER",
    description:
      "Anila, the app developer, merges innovation with skill, crafting digital marvels. Her passion drives transformative experiences, shaping the future of technology.",
  },
  user4: {
    image: "Images/n22.jpg",
    name: "Najib",
    title: "FLUTTER DEVELOPER",
    description:
      "Najib, a Flutter developer, orchestrates digital symphonies with precision and finesse. His code dances, creating fluid and immersive experiences. A maestro of innovation, shaping the mobile landscape with mastery.",
  },
  user5: {
    image: "Images/n13.jpg",
    name: "Ahmad",
    title: "KID PLAYER",
    description:
      "Ahmad, the kid player, wields talent beyond his years. With boundless energy and enthusiasm, he conquers the field, igniting passion and inspiring dreams in all who watch.",
  },
};

var counter = 0;
btnMove.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (item.innerHTML.indexOf("right") != -1) {
      if (counter <= 3) {
        counter++;
        updateDom(counter);
      } else {
        counter = 0;
        updateDom(counter);
      }
    } else if (item.innerHTML.indexOf("left") != -1) {
      if (counter > 0) {
        counter--;
        updateDom(counter);
      } else {
        counter += 4;
        updateDom(counter);
      }
    }
  });
});

function updateDom(index) {
  var obj = Object.keys(allUsers);
  image.src = allUsers[obj[index]].image;
  nam.innerHTML = allUsers[obj[index]].name;
  title.innerHTML = allUsers[obj[index]].title;
  description.innerHTML = allUsers[obj[index]].description;
}

var count = 0;
randomMove.addEventListener("click", () => {
  var index = checkRandom(count);
  console.log(index);
  count = index;
  updateDom(index);
});

function checkRandom(excludeNum) {
  var rand;
  console.log(rand == undefined);
  while (rand == undefined || rand === excludeNum) {
    rand = Math.round(Math.random() * 4);
  }
  return rand;
}
