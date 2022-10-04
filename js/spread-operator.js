/* spread operator */
// == ...
// 모든 괄호를 제거
// ! 함수의 소괄호, 오브젝트의 중괄호, 어레이 대괄호 안에서만 사용

// 1. Array에 붙이면 대괄호를 제거
var array = ['hello', 'world'];
console.log(array);
console.log(...array); // = console.log('hello', 'world');

// 2. 문자에 붙이면 문자를 하나씩 떼줌
var 문자 = 'hello';
console.log(...문자); // = console.log('h', 'e', 'l', 'l', 'o');

/* spread operator 예시 */
// 1. Array 합치기
var a = [1, 2, 3];
var b = [4, 5];

var c = [...a, ...b] // [1, 2, 3, 4, 5]
console.log(c);

// 2. Array 복사 (*독립적으로 복사 == Deep copy)
var a = [1, 2, 3];
var b = a;

console.log(a);
console.log(b); // ! 이렇게 하면 a, b는 각각 [1, 2, 3]을 가진 게 아니라 값을 공유하는 것. -> a의 array를 수정하면 b도 똑같이 바뀌는 버그 발생
// 이유: '=' 등호를 사용하면 값을 복사한 게 아니라 [1, 2, 3] 값이 여기 있다~ 는 화살표를 복사한 것이기 때문

// 복사는 이런식으로.
var a = [1, 2, 3];
var b = [...a];

a[3] = 4;
console.log(a); // [1, 2, 3, 4]
console.log(b); // [1, 2, 3]
// spread를 이용해서 a값의 괄호를 제거한 뒤 다시 괄호 씌우기

// 3. object 합치기
var o1 = { a : 1, b : 2 };
var o2 = { ...o1, c : 3 };

console.log(o2); // {a: 1, b: 2, c: 3}

// 4. object 복사
var o1 = { a : 1, b : 2 };
var o2 = { a : 2, ...o1 }; // !값 중복(a: 1, a: 2)

console.log(o2); // {a: 1, b: 2}
// 값 중복시 가장 뒤에 있는 것을 적용

// 5. 함수 파라미터를 넣을 때
function 더하기(a, b, c){
  console.log(a + b + c);
}

var array2 = [10, 20, 30];

// 하드코딩
더하기(array2[0], array2[1], array2[2]);

// 예전 방식
더하기.apply(undefined, array2);

// spread operator 사용
더하기(...array2);


/* (참고) apply 함수 */
// person.인사()를 person2.인사에 적용시켜줌
var person = {
  인사 : function(){
    console.log('안녕')
  }
}
var person2 = {
  name : '김뫄뫄'
}
person.인사.apply(person2) // == person2.인사();

// apply / call 함수 차이점
person.인사.apply(person2, [1, 2])
person.인사.call(person2, 1, 2)
