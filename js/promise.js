/* promise */
// 디자인 패턴
// 콜백함수 만드는 것과 유사(콜백함수보다 약간 기능이 많음)
// Promise에 대한 오해: 비동기적 처리가 가능하게 변경해주지 않음!

// Promise = 성공/실패 판정 기계
var 프로미스 = new Promise(function(성공, 실패){
  성공(); // 성공 판정
  실패(); // 실패 판정
});

프로미스.then(function(){ // 프로미스가 성공일 경우 실행할 코드

}).then(function(){

});

// 실패할 경우에도 코드 실행 가능: catch
프로미스.catch(function(){ // 실패시 실행

});

// 성공이나 실패했을 때 실행
프로미스.finally(function(){

});

/* Promise 예시 */
var 프로미스 = new Promise(function(성공, 실패){
  var 연산 = 1 + 1;
  성공();
});

프로미스.then(function(){
  console.log('성공!')
}).catch(function(){
  console.log('실패!')
});

/* Promise의 3가지 상태 */
1. 성공하면 <resolved>
2. 판정 대기중이면 <pending>
3. 실패하면 <rejected>