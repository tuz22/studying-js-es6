/* constructor */
// == 생성자; object 생성기게
// 사용 이유?
// object를 복사하고 싶어서
// 비슷한 object를 쉽게 여러개 만들기 위해서

// 하드코딩
var 학생1 = { name : 'Kim', age : '15' };

// constructor 사용
function 기계(){ // constructor 함수는 함수명 첫글자 대문자로
  this.name = 'Kim'; // this는 '새로 생성되는 object' == instance
  this.age = 15;
}

var 학생1 = new 기계(); // object가 하나 새로 생김

// /* object에 함수도 가능 */
// 하드코딩
var 학생1 = { 
  name : 'Kim', 
  age : 15 
  sayHi : function(){
      console.log('안녕하세요' + this.name + ' 입니다');
  }
};
학생1.sayHi();

// constructor 사용
function 기계(이름){
  this.name = 이름;
  this.age = 15;
  this.sayHi = function(){
    console.log('안녕하세요 ' + this.name + ' 입니다');
  }
}
var 학생1 = new 기계('Kim'); // 안녕하세요 Kim 입니다
var 학생2 = new 기계('Park'); // 안녕하세요 Park 입니다

학생1.sayHi();
학생2.sayHi();