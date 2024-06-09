const Game_canvas = document.getElementById("myGame");
const slide = Game_canvas.getContext("2d");
var btn_start = document.querySelector("#btnn");
const WIDTH = 650,
  HEIGHT = 600;
Game_canvas.width = WIDTH;
Game_canvas.height = HEIGHT;

Game_canvas.style.border = "3px solid blue";
var target_width = 120,
  target_height = 20;
const ballRadius = 17;
var leftArrow = false,
  rightArrow = false;
var isStop = true;

var target = {
  x: Game_canvas.width / 2 - target_width / 2,
  y: Game_canvas.height - target_height,
  width: target_width,
  height: target_height,
  dx: 5,
};

var ball = {
  x: Game_canvas.width / 2,
  y: target.y - ballRadius,
  radius: ballRadius,
  speed: 6,
  dx: 3,
  dy: -3,
};

var brick = {
  row: 4,
  column: 5,
  width: 90,
  height: 25,
  offsetLeft: 30,
  offsetTop: 20,
  marginTop: 40,
};

var bricks = [];
function IntializeBricks() {
  for (var r = 0; r < brick.row; r++) {
    bricks[r] = [];
    for (var c = 0; c < brick.column; c++) {
      bricks[r][c] = {
        x: c * (brick.offsetLeft + brick.width) + brick.offsetLeft,
        y: r * (brick.offsetTop + brick.height) + brick.offsetTop,
        isShow: true,
      };
    }
  }
}
IntializeBricks();

function GameCompleteCheck() {
  var isGameWin = true;
  for (var r = 0; r < brick.column; r++) {
    for (var c = 0; c < brick.row; c++) {
      isGameWin = isGameWin && !bricks[r][c].isShow;
    }
  }
  if (isGameWin) {
    restart();
    isStop = false;
    alert("Congratulation You Win the Game");
  }
}

function DisplayBricks() {
  bricks.forEach((element) => {
    for (var i = 0; i < element.length; i++) {
      if (element[i].isShow) {
        slide.fillStyle = "blue";
        slide.fillRect(element[i].x, element[i].y, brick.width, brick.height);
      }
    }
  });
}

function BallBrickCollision() {
  bricks.forEach((element) => {
    for (var i = 0; i < element.length; i++) {
      if (element[i].isShow) {
        if (
          ball.x + ball.radius > element[i].x &&
          ball.x - ball.radius < element[i].x + brick.width &&
          ball.y + ball.radius > element[i].y &&
          ball.y - ball.radius < element[i].y + brick.height
        ) {
          ball.dy = -ball.dy;
          element[i].isShow = false;
        }
      }
    }
  });
}

function DrawTarget() {
  slide.fillStyle = "blue";
  slide.fillRect(target.x, target.y, target.width, target.height);
}

function DrawBall() {
  slide.beginPath();
  (slide.fillStyle = "blue"),
    slide.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  slide.fill();
  slide.closePath();
}

document.addEventListener("keydown", (action) => {
  if (action.keyCode == 37) {
    leftArrow = true;
  } else if (action.keyCode == 39) {
    rightArrow = true;
  }
});

document.addEventListener("keyup", (action) => {
  if (action.keyCode == 37) {
    leftArrow = false;
  } else if (action.keyCode == 39) {
    rightArrow = false;
  }
});

function moveTarget() {
  if (rightArrow && target.x + target.width < Game_canvas.width) {
    target.x += target.dx;
  } else if (leftArrow && target.x > 0) {
    target.x -= target.dx;
  }
}

function moveBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function BallWallCollision() {
  if (ball.x + ball.radius > Game_canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx;
  }
  if (ball.y - ball.radius < 0) {
    ball.dy = -ball.dy;
  }
  if (ball.y + ball.radius > Game_canvas.height) {
    isStop = false;
    alert("Game Over");
    restart();
  }
}

function BallTargetCollision() {
  if (
    ball.x < target.x + target.width &&
    ball.x > target.x &&
    target.y < target.y + target.height &&
    ball.y > target.y
  ) {
    var collidePoint = ball.x - (target.x + target.width / 2);
    collidePoint = collidePoint / (target.width / 2);
    var angle = (collidePoint * Math.PI) / 3;

    ball.dx = ball.speed * Math.sin(angle);
    ball.dy = -ball.speed * Math.cos(angle);
  }
}

function draw() {
  DrawTarget();
  DrawBall();
  DisplayBricks();
}

function update() {
  moveTarget();
  moveBall();
  BallWallCollision();
  BallTargetCollision();
  BallBrickCollision();
  GameCompleteCheck();
}

draw();

function startGame() {
  function loop() {
    slide.clearRect(0, 0, Game_canvas.width, Game_canvas.height);
    draw();
    update();
    if (isStop) {
      requestAnimationFrame(loop);
    }
  }
  loop();
}

function start() {
  btn_start.remove();
  startGame();
}

function restart() {
  // window.location.reload();
  document.location.reload();
}
