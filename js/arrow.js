var 함수 = function(){

}
함수();

// ==
var 함수 = () => {

}
함수();

// 함수를 만드는 이유
// 1. 코드들을 기능으로 묶고 싶을 때
// 2. 입출력 기계를 만들고 싶을 때

// arrow function 장점 ex) var 함수 = (a) => { return a + 5 }
// 입출력 기계를 만들 때 직관적임
// 파라미터가 1개일 때 소괄호 생략 가능 ex) var 함수 = a => { return a + 5 }
// 코드가 한줄이면 중괄호도 생략 가능 ex) var 함수 = a => a + 5

// arrow function 예시
// ex 1
[1, 2, 3, 4].forEach(function(a){
  console.log(a);
});
// ==
[1, 2, 3, 4].forEach( a => console.log(a) );

// arrow function 특징
// 바깥에 있던 this값을 내부에 그대로 사용
// ex 2
document.getElementById('btn').addEventListener('click', function(e){
  this; // e.currentTarget
});
document.getElementById('btn').addEventListener('click', (e) => {
  this; // window
});

// ex 3
var 오브젝트 = {
  함수 : () => {
    return this;
  }
}
오브젝트.함수();