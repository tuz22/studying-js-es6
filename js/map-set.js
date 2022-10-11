/* Map 자료형*/
// 자료 간의 연관성을 표현하기 위해 사용

/* Map에 자료 저장 */
var person = new Map();
person.set('name', 'Kim');
console.log(person); // Map(1) {'name' => 'Kim'}

// 자료 이름에 문자말고도 가능 (Obkect자료형은 문자만 가능)
// 숫자
var person2 = new Map();
person2.set(100, 'Kim');
console.log(person2); // Map(1) {100 => 'Kim'}

// 배열
var person3 = new Map();
person3.set([1, 2, 3], 'Kim');
console.log(person3); // Map(1) {Array(3) => 'Kim'}

/* Map에서 자료 꺼내는 법 */
person.get('name');
console.log(person.get('name')); // Kim

/* Map에서 자료 삭제 */
person.delete('name');

/* Map에서 자료 개수 세는 법 */
person.size;

/* 반복문으로 Map에서 자료 꺼내는 법 */
// var person4 = new Map();
// person4.set('name', 'Park');
// person4.set([2, 3], 'age');
// ==
var person4 = new Map([ /* Map 자료형에 직접 자료 넣는 법 */
  ['name', 'Park'],
  [[2, 3], 'age']
]);

for (var key of person4.keys()){
  console.log(key); // name; (2) [2, 3];
}

/* Hash Map, Hash Table */
// array는 원하는 자료를 뽑으려면 반복문을 돌려서 자료를 하나하나 다 봐야함 -> 느림
// Hash Table은 abc순 정렬이 가능 -> 정렬된 자료는 찾기가 빠름

/* Hash Table과 object 자료형이 비슷한데 Map 자료형을 사용하는 이유 */
// Hash Table을 만들기 위해서 바닐라 자바스크립트 object 자료형을 쓰면 되긴 하지만,
// 1. object 자료형은 hasOwnProperty, toString 이런 키들을 집어 넣을 수 있기 때문에 너무 유연함
// 2. key값에 들어갈 수 있는 형태가 문자형태뿐
// => 그래서 Map 자료형을 사용


/* Set 자료형 */
// 중복자료를 허용하지 않는 Array 자료형이라고 생각하면 됨

// var 출석부 = ['John', 'Tom', 'Andy'];
var 출석부2 = new Set(['John', 'Tom', 'Andy', 'Tom']);
console.log(출석부2); // Set(3) {'John', 'Tom', 'Andy'}
// -> 중복값인 'Tom'은 한번만 나옴

/* Set 자료형에 자료 추가 */
출석부2.add('Sally');

/* Set 자료형에 자료 제거 */
출석부2.delete('Sally');

/* Set 자료형에서 자료 유무 확인 */
출석부2.has('Sally');

/* Set 자료형에 든 자료 개수 확인 */
출석부2.size;

/* Set 자료형 <-> Array 자료형 */
var 출석부 = ['John', 'Tom', 'Andy'];
var 출석부3 = new Set(['John', 'Tom', 'Andy']); // Set(3) {'John', 'Tom', 'Andy'}
출석부 = [...출석부3];
console.log(출석부); // (3) ['John', 'Tom', 'Andy']




