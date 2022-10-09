/* Synchronous, Asynchronous*/

// 동기식처리
console.log(1);
console.log(2);
console.log(3);

// 비동기식처리
console.log(1); // 1.
setTimeout(() => { console.log(2) }, 1000); // 3.
console.log(3); // 2.

// 파이썬에서 비동기식처리
// print(1) // 1.
// time.sleep(1) // 2. 1초 쉬고
// print(2) // 3. 출력

/* 오래걸리거나 실행까지 오래걸리는 함수들 -> Web API(란 공간으)로 보냄 -> 해결되길 기다렸다가 돌려보냄 */
setTimeout(() => { console.log(2) }, 1000);
element.addEventListener('click', function(){})
$.ajax()

/* 자바스크립트를 순차적으로 실행: 콜백함수 사용 */
console.log(1);
setTimeout(() => { console.log(2) }, 1000);

/* 콜백함수를 이용한 함수 디자인 */
function 첫번째함수(빈칸){
  console.log(1);
  빈칸();
};

function 두번째함수(){
  console.log(2);
};
// 첫번째함수();
// 두번째함수(); // 이렇게 말고
첫번째함수(두번째함수); // 이렇게 쓰기
// ==
첫번째함수(function(){
  console.log(2);
});
// 이름짓기 가능
첫번째함수(function 두번째함수(){
  console.log(2);
});

/* 콜백함수의 문제점: 코드가 복잡해짐 */
첫번째함수(function(){
  두번째함수(function(){
    세번째함수(function(){

    });
  });
});

/* 콜백함수의 문제점 개선: Promise패턴 */
첫번째함수().then(function(){

}).then(function(){

});