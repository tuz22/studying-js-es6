/* prototype */ 
// = 유전자...
// -상속을 구현할 수 있음

// 상속(inheritance)
// : constructor(ex. 기계)가 가진 속성들(ex. name, age)을 물려받아서 오브젝트를 하나 뽑아주는 것
// - 부모: 상속해주는 것
// - 자식: 상속받는 오브젝트들

// 부모
function 기계(이름){
  this.name = 이름;
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요 ' + this.name + ' 입니다');
  }
} // 기계(constructor)를 만들면 prototype이란 공간이 자동 생성

// prototype에 값을 추가하면 모든 자식들이 물려받기 가능
기계.prototype.gender = '남'; // '기계.prototype'이란 오브젝트에 키 값 ' genger = '남'; 추가

// 자식
var 학생1 = new 기계('Kim');
var 학생2 = new 기계('Park');

/* prototype 동작원리 */

학생1.gender; // '남'
// 1. 학생1이 직접 gender를 가지고 있는가
// 2. 그럼 학생1의 부모 유전자(기계.prototype)가 gender를 가지고 있는가
// 3. 그럼 실행!

/* prototype 동작원리: 부제 - 내장함수가 동작하는 방법 */
// 내장함수: ex) toString(), sort(), map() ...

학생1.toString();
// 1. 학생1이 직접 toString()을 가지고 있는가
// 2. 그럼 학생1의 부모 유전자가 가지고 있는가
// 3. 그럼 부모의 부모 유전자가 가지고 있는가
// 4. 그럼 부모의 부모의 부모 유전자가... 

var array = [1, 2, 3];
// ==
var array = new Array(1, 2, 3); // 실제 array가 만들어지는 방식 = array 만드는 기계로부터 하나 뽑음
array.sort(); // -> 사용가능한 이유: Array.prototype에 있어서.

// object도 마찬가지!

/* prototype 특징 */
// 1. 함수에만 생성됨
// 2. 내 부모 유전자(부모의 prototype)를 검사할 때: __proto__
// 3. __proto__를 이용해서 부모 강제 등록하기

var 부모 = { name : 'Kim' };
var 자식 = {};
자식.__proto__ = 부모;
console.log(자식.name);
// 4. 콘솔창에서 알려주는 prototype chain