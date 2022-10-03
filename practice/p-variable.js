// 콘솔창 출력 결과는?
// 1
함수();
function 함수() {
  console.log(안녕); // Uncaught ReferenceError: Cannot access '안녕' before initialization at 함수
  // let, const는 Hoisting시 undefined 자동으로 할당 x
  let 안녕 = 'Hello!';
}

// 2
// function 함수(){} : 전부 Hoisting
// var 함수 = function(){} : 'var 함수'만 Hoisting
함수(); // TypeError: 함수 is not a function
var 함수 = function() {
  console.log(안녕); 
  var 안녕 = 'Hello!';
} 

// 3
let a = 1;
var 함수 = function() {
  a = 2;
}
console.log(a); // 1 -> 함수(); x 함수 실행을 안시킴

// 4
let a = 1;
var b = 2;
window.a = 3;
window.b = 4;

console.log(a + b); // a = 1 b = 4
// window.a(전역변수)보다 let a가 더 가까워서 let a 사용
// b는 재할당

// 1초마다 i++ 출력하기 (아래 코드를 고쳐서)
for (var i = 1; i < 6; i++) { 
  setTimeout(function() {
    console.log(i);
  }, i*1000 ); 
}

setTimeout(function() {
  for (var i = 1; i < 6; i++) { 
    console.log(i);
  }
}, i*1000 );

// 버튼 클릭시 모달창 띄우기 (아래 코드를 고쳐서)
var 버튼들 = document.querySelectorAll('button');
var 모달창들 = document.querySelectorAll('div');

for (var i = 0; i < 3; i++){

  버튼들[i].addEventListener('click', function(){
    모달창들[i].style.display = 'block';
  });

}

for (var i = 0; i < 3; i++){

  버튼들[i].addEventListener('click', function(){
    모달창들[i].style.display = 'block';
  });

}
