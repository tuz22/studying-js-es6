/* 2D 게임을 만들기 위해선 */
// 1. 화면에 네모, 원을 그릴 수 있어야함
// 2. 프레임마다 코드 실행이 가능해야함(= 애니메이션을 위해)
// 3. collision check를 할 수 있어야함

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dinoImg = new Image();
dinoImg.src = 'dinosaur.png';

/* 공룡 캐릭터 */
var dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(dinoImg, this.x, this.y);
  }
}

// 선인장 이미지
var cactusImg = new Image();
cactusImg.src = 'cactus.png';

/* 장애물 - 선인장 */
class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this. height = 50;
  }
  draw(){
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(cactusImg, this.x, this.y)
  }
}

var timer = 0;
var cactusBox = []; // 장애물 보관함
var jumpTimer = 0;
var animation;

// 프레임마다 실행할 것
function move(){
  animation = requestAnimationFrame(move);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 200 === 0) { // 120프레임마다
    var cactus = new Cactus(); // 장애물 생성해서
    cactusBox.push(cactus); // array에 넣음
  }

  cactusBox.forEach((item, i, o) => {
    // x좌표가 0 미만일 때 제거
    if (item.x < 0){
      o.splice(i, 1);
    }
    item.x--;
    item.draw(); // array에 있는 것들 모두 draw()
    collisionCheck(dino, item);
  })

  // 점프
  if (jumping == true){
    dino.y -= 2;
    jumpTimer++;
  }
  if (jumpTimer > 50){
    jumping = false;
    jumpTimer = 0;
  }
  if (jumping == false) {
    if (dino.y < 200)
    dino.y++;
  }

  dino.draw()
}
move();

var jumping = false;

document.addEventListener('keydown', function(e){
  if (e.code === 'Space'){
    jumping = true;
  }
})

/* 충돌 확인 */
function collisionCheck(dino, cactus){
  // cactus의 x좌표 - dino의 x좌표
  var xPosition = cactus.x - (dino.x + dino.width); // dino는 x좌표 + dino너비(;사각형 밑변)
  var yPosition = cactus.y - (dino.y + dino.height);

  if (xPosition < 0 && yPosition < 0){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation); // requestAnimationFrame(move);이걸 animation에 담았음
  }
}