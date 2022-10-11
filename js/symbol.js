/* Symbol */

var 심볼 = Symbol('설명');

/* 심볼의 용도 */
// Object 자료형의 비밀 key값
// = 반복문에서 출력 안됨(enumberable x 라서)
// 원래 Object의 key값은 문자만 가능했는데 ES6부터는 심볼도 가능
var weight = Symbol('내 몸무게');
var height = Symbol('내 키');

var person = { name : 'Kim' };
// person.weight = 100;
// person[weight] = 200;

console.log(person); // {name: 'Kim', weight: 100, Symbol(내 몸무게): 200}

for (var key in person){
  console.log(person[key]); // Kim; 100;
}

/* 심볼을 Object 자료형에 직접 넣기도 가능 */
var person = { name : 'Kim', [height] : 160 };

/* import 해온 파일 / 라이브러리 사용할 때 거기 있던 object에 자료를 추가하고싶을 때 사용 */
// 반복문에 안뜨기 때문에 기존 코드를 해칠 염려가 없음

/* 심볼의 특징 */
// 1. 설명이 같다고 같은 Symbol이 아님

var a = Symbol('설명1');
var b = Symbol('설명1');
console.log(a === b); // false

// 2. 심볼을 여러개 만들기 싫을 때 : 심볼을 전역으로 만들기
// 전역 심볼
var a = Symbol.for('설명2');
var b = Symbol.for('설명2');
console.log(a === b); // true

// 3. 기본 내장 Symbol들
// *Symbol.iterator : for of를 쓸 수 있게 도와주는 Symbol
var 어레이 = [2, 3, 4];
어레이[Symbol.iterator];
console.log(어레이[Symbol.iterator]);

