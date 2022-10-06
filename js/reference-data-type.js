/* Reference data type */
// 1. Primitive data type
// - 변수에 값이 그대로 저장됨
// - 문자, 숫자
// ex) var 문자 = "가나다라";

// 2. Reference data type
// - 변수에 reference가 저장됨
// - Array, Object는 변수에 값이 저장 x

// * reference: 화살표 같은거
// ex) var 어레이 = [1, 2, 3];
//    어레이 <---1,2,3은 여기에 있다-- [1, 2, 3]

// var name1 = 'apple';
// var name2 = name1;
// name1 = 'banana';

// console.log(name1); // banana
// console.log(name2); // apple
// name1 != name2

var name1 = { name : 'apple'};
var name2 = name1;
name1.name = 'banana'; // name1에 { name : 'banana'}가 저장x
// { name : 'banana'}가 여기 있다~ 하는 화살표(reference)가 저장

console.log(name1); // {name: 'banana'}
console.log(name2); // {name: 'banana'}
// name1 == name2

// 새로운 중괄호를 할당할 때마다 새로운 화살표
var name1 = { name : 'apple'};
var name2 = { name : 'cherry'};
name1.name = 'banana';

/* reference data type 예시 */
// 1
var name1 = { name : 'apple'};
var name2 = { name : 'apple'};

name1 == name2 // false -> 화살표를 비교하는 거라서

// 2
var name1 = { name : 'apple'};

function change(obj){
  obj.name = 'banana';
}
change(name1); // { name : 'banana'};

function change(obj){
  obj = { name: 'banana' };
}
change(name1);// { name : 'apple'}; // 오브젝트 재할당 실패!
// 이유
// change(obj) <- (obj)는 (obj)란 변수를 (obj=)이런식으로 등호를 할당해서 새로 만들겠다~
// 파라미터 obj(=(obj))는 var obj랑 같음. 변수생성, 할당
// 파라미터 변수 = {} 해봤자 다른 변수(ex var name1)은 변화 x
// => change(name1) == change(var obj = name1)

