/* class */
// 상속할 때...

// 옛날문법
// prototype
function 기계(){}

/* ES5 */
// Object.create()
// Object.create(프로토타입object);

var 부모 = { name : 'Kim', age : 50 };
var 자식 = Object.create(부모);

console.log(자식); // {}
console.log(자식.name); // Kim

// 자식의 키값 변경
자식.age = 20;

// 자식의 자식도 가능
var 손자 = Object.create(자식);


/* ES6 */
class 부모 {
  constructor(){
    this.name = 'Kim',
    // 함수 추가 방법 1: constructor에 추가(자식이 직접 함수를 가짐)
    this.sayHi = function(){ console.log('hello') }
  }
  // 함수 추가 방법 2: 부모.prototype에 추가(모든 자식들이 사용할 수 있는 내장함수를 가짐)
  sayHi(){
    console.log('hello');
  }
}
var 자식 = new 부모();

// 자식.__proto__ <- 이거랑 같은 것
Object.getPrototypeOf(자식) // {name: 'Kim'}


class 부모 {
  constructor(){
    this.name = 'Kim',
  }
  sayHi(){
    console.log('hello');
  }
  // 함수 여러개 추가 방법 1 - class 안에 
  sayHello(){
    console.log('hello');
  }
}

// 함수 여러개 추가 방법 2 - prototype으로
부모.prototype.sayHello = function(){}

var 자식 = new 부모();

/* 객체지향 문법을 쓰는 이유 */
// 1. object 여러개 만들어서 사용하려고
