/* for in */

/* 반복문의 용도 */
// 1. 코드 단순 반복
// 2. 자료형에 담긴 자료들을 하나씩 꺼낼 때

/* for in 반복문 예시 */
var 오브젝트 = { name : 'apple', price : 1000 };
for (var key in 오브젝트) { // * key는 변수명 
  console.log(오브젝트[key]); // apple; 1000;
}

/* for in 반복문 특징 */
// 1. enumerable한 것만 출력 *enumerable = 열거 가능한

// object 자료형을 만들 때 { name : 'apple' } 이걸 저장하면 apple과 속성들 3개가 저장됨
var 오브젝트 = { name : 'apple', price : 1000 };
console.log( Object.getOwnPropertyDescriptor(오브젝트, 'name') ); // {value: 'apple', writable: true, enumerable: true, configurable: true}
// -> 같이 저장되는 속성들이 많아서 Object 자료형이 좀 무거움
// enumerable: true인 자료들만 for in 반복문으로 출력 가능(강제로 false로 만들면 출력 불가)

// 2. 부모의 prototype에 저장된 것도 출력
// class 부모 {

// }
// 부모.prototype.name = 'Park';

// var 오브젝트 = new 부모();

// for (var key in 오브젝트) {
//   console.log(오브젝트[key]); // Park
// }
// Park이란 자료는 부모가 가진 것인데도 출력됨
// 이게 싫으면 if문 추가해야함

class 부모 {

}
부모.prototype.name = 'Park';

var 오브젝트 = new 부모();

for (var key in 오브젝트) {
  if(오브젝트.hasOwnProperty(key)) {
    console.log(오브젝트[key]);
  }
}
// 오브젝트.hasOwnProperty(): 오브젝트가 이 key값을 가지고 있는지 물어봄. 있으면 true, 없으면 false

/* for of 반복문 */
var 어레이 = [2, 3, 4, 5];
for (var 자료 of 어레이) {
  console.log(자료); // 2; 3; 4; 5;
}
// array 자료형 뿐만 아니라 arguments, NodeList, Map, Set 자료형도 적용가능한 반복문
// = 정확히는 iterable 자료형에 적용가능
// * iterable 자료형 = [Symbol.iterator]()메소드를 가지고있는자료형들

console.log(어레이[Symbol.iterator]()); // Array Iterator

/* NodeList */
// = document.getElementsByClassName()이나 document.querySelectorAll()이런 셀렉터로 찾은 요소들이 [] 안에 담겨 오는게 NodeList란 자료형(array 아님!)
// NodeList에 있는 HTML 요소들을 하나씩 꺼낼 때 for of 반복문을 자주 사용

// 문제 1. for of 반복문으로 구구단 출력
let 데이터 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
for (var i of 데이터) {
  console.log(`${i}단`)
  for (var k of 데이터) {
    console.log(`${i} x ${k} = ${i*k}`);
  }
}

// 문제 2. key값의 끝자리에 숫자가 있으면 삭제하기
var products = [
  {
    name1 : 'chair',
    price1 : 7000,
  },
  {
    name2 : 'sofa',
    price : 5000,
  },
  {
    name1 : 'desk',
    price3 : 9000,
  },
];
// isNaN() : 매개변수가 숫자가 아니면 true, 숫자면 false
// parseInt(String) : 문자열을 숫자로 변환
// slice(start[, end]) : 배열에서 추출할 시작점 인덱스, 종료점 인덱스(종료점 이전 인덱스까지 출력됨)
let newValue;
let newKey;
for (var item of products){
  for (var key in item){

    // console.log(item);
    // console.log(key);
    // console.log(key.slice(-1));
    if (isNaN( parseInt(key.slice(-1)) ) == false) {
      newValue = item[key];
      newKey = key.slice(0, -1); // key에 붙은 숫자를 제거한 새 key
      item[newKey] = newValue; // 새 key에 값 할당
      delete item[key]; // 숫자가 붙은 key 삭제
    }
  }
}
console.log(products);