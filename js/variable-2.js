/* 변수의 Hoisting 현상 */

// var 색깔 = 'red'; 이걸 자바스크립트가 해석하는 방법
// var 색깔;
// 색깔 = 'red';
// -> 변수의 선언을 변수 범위 맨위로 끌고오는 현상: Hoisting

// ex
console.log(색깔); // undefined
var 색깔 = 'red';
console.log(색깔); // red
// 'ReferenceError: 색깔 is not defined' 가 아니라 undefined이 뜬 건 선언이 되었다는 말

/* 변수 동시에 여러개 만들기 */
var 이름, 색깔, 가격;
var 이름 = 'apple', 색깔 = 'red', 가격 = 1000;

/* 전역변수 */
// 모든 곳에서 쓸 수 있는 변수
var 이름 = 'cherry'; // 전역변수
function 함수(){
  console.log(이름);
  var 색깔 = 'green'; // 지역변수
}
함수();

// window로 전역변수 만들기
window.이름 = 'banana';

// 문제
if (true){
  let a = 1;
  var b = 2;
  if (true){
    let b = 3;
  }
  console.log(b); // b는?
}