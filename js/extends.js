/* extends */

class 할아버지 {
  constructor(name){
    this.성 = 'Kim';
    this.이름 = name;
  }
}
var 할아버지1 = new 할아버지('뫄뫄');

// class 아버지 extends 할아버지 {
//   constructor(){
//     this.나이 = 50;
//   }
// }
// var 아버지1 = new 아버지();

// extends.js:13 Uncaught ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor at new 아버지
// -> extends해서 만든 class는 this 그냥은 못씀 -> super 사용

/* super() */
class 아버지 extends 할아버지 {
  constructor(name){
    // this.성 = 'Kim';
    // this.이름 = name;
    // ==
    super(name); // super(): 물려받는 class의 constructor
    
    this.나이 = 50;
  }
}
var 아버지1 = new 아버지('솨솨'); // 아버지 {성: 'Kim', 이름: '솨솨', 나이: 50}

/* super()의 또 다른 용도 */
class 할아버지 {
  constructor(name){
    this.성 = 'Kim';
    this.이름 = name;
  }
  sayHi(){
    console.log('안녕');
  }
}

class 아버지 extends 할아버지 {
  constructor(name){
    super(name);
    this.나이 = 50;
  }
}
var 아버지1 = new 아버지('솨솨');
console.log(아버지1.sayHi()) // 안녕
// -> 할아버지를 상속해서 아버지를 생성했기 때문에 할아버지 class의 (prototype)sayHi()를 사용가능

// 문제. 출력되는 것은?
class 할아버지 {
  constructor(name){
    this.성 = 'Kim';
    this.이름 = name;
  }
  sayHi(){
    console.log('안녕 솨솨 할아버지입니다.');
  }
}

class 아버지 extends 할아버지 {
  constructor(name){
    super(name);
    this.나이 = 50;
  }
  sayHi(){
    console.log('안녕 솨솨입니다.');
  }
}
var 아버지1 = new 아버지('솨솨');
console.log(아버지1.sayHi()) // 안녕 솨솨입니다.
// -> 더 가까이 있는 프로토타입을 출력

/* super 사용위치 따른 의미 */
class 아버지 extends 할아버지 {
  constructor(name){
    super(name); // 부모 class의 constructor를 의미
    this.나이 = 50;
  }
  sayHi(){
    console.log('안녕 솨솨입니다.');
    super.sayHi(); // console.log('안녕 솨솨 할아버지입니다.');
    // -> 부모 class의 prototype을 의미 (__proto__와 유사)
  }
}
var 아버지1 = new 아버지('솨솨');
console.log(아버지1.sayHi())