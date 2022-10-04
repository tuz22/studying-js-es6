// 출력 결과는?

// 1.
var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c); // (5) ['김', '밥', 1, 2, 3]

// 2.
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  // console.log( [...a]);
  console.log( [[...a], ...[...b]][1] ); // 13
}
c(a,b);

// 3.
function 함수(a = 5, b = a * 2 ){
  console.log(a + b); // 9
  return 10 // 10
}
함수(3);

// 4.
function 함수(a = 5, b = a * 2 ){
  console.log(a + b); // 15
}
함수(undefined, undefined);