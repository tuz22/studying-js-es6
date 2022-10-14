/* 2D 게임을 만들기 위해선 */
// 1. 화면에 네모, 원을 그릴 수 있어야함
// 2. 프레임마다 코드 실행이 가능해야함(= 애니메이션을 위해)
// 3. collision check를 할 수 있어야함

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

/* 공룡 캐릭터 */
var dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw(){
    ctx.fillStyle = 'green';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

dino.draw();

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
  }
}
var cactus = new Cactus();
cactus.draw();

var timer = 0;
var cactusBox = []; // 장애물 보관함

// 프레임마다 실행할 것
function move(){
  requestAnimationFrame(move);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (timer % 120 === 0) { // 120프레임마다
    var cactus = new Cactus(); // 장애물 생성해서
    cactusBox.push(cactus); // array에 넣음
  }

  cactusBox.forEach((item) => {
    item.x--;
    item.draw(); // array에 있는 것들 모두 draw()
  })
  dino.draw()
}
move();