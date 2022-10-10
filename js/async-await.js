/* async, await */
// ES8 문법

/* async: Promise를 자동으로 만들어줌 */

// 1. 콜백함수
// function 더하기(){
//   1 + 1;
//   console.log('성공!');
// }
// 더하기();

// 2. Promise
// var 더하기 = new Promise(function(성공, 실패){
//   1 + 1;
//   성공();
// })

// 더하기.then(function(){
//   console.log('성공!'); 
// })

// 3. async
async function 더하기(){ // async를 function 앞에 붙이면 함수가 Promise 역할 가능(함수 실행 후에 Promise 오브젝트가 남음)
  1 + 1;
}

더하기().then(function(){
  console.log('성공!');
})

// 결과를 리턴하는 것도 가능
async function 더하기(){
  return 1 + 1;
}

더하기().then(function(결과){
  console.log(결과);
})

/* async 단점 */
// 성공만 가능
// 강제로 실패시 실행할 코드를 만들 수느 있음
async function 더하기(){
  return Promise.reject('실패!'); // Uncaught (in promise) 실패!
}

/* await*/
// = 프로미스 간단버전
// async function 안에서만 쓸 수 있는 특별한 키워드

/* 함수 안에서 Promise 디자인하기(쓰기) */
async function 더하기(){
  var 프로미스 = new Promise(function(성공, 실패){
    var 힘든연산 = 1 + 1;
    성공(100);
  });

  // 프로미스.then(function(){
  //   console.log('성공!');
  // })
  // ==
  var 결과 = await 프로미스; // 프로미스가 해결될때까지(성공이든 실패든 뭐든 판정이 날 때 까지) 기다림
  console.log(결과); // 100
}
더하기();

/* await은 프로미스 실패시 에러가 나고 멈춤  ex) Uncaught (in promise) 100*/
/* 에러 예방: try-catch문 */
// try { 이걸 실행해보고 } catch { 에러가 나면 이걸 실행}
async function 더하기(){
  var 프로미스 = new Promise(function(성공, 실패){
    var 힘든연산 = 1 + 1;
    성공(100);
    // 실패(100);
  });
  
  try {
    var 결과 = await 프로미스;
    console.log(결과);
  } catch {
    console.log('프로미스 연산 실패');
  }
}
더하기();

/* 문제. <button>을 누르면 성공 판정하는 Promise & 성공시 '성공!' 출력하기 */
var btn = document.querySelector('#btn');
async function clickBtn(){
  var btnPromise = new Promise(function(success, fail){
    
    btn.addEventListener('click', function(){
      success('성공!');
    })

  });

  var result = await btnPromise;
  console.log(result);
}
clickBtn();