// 3
// constructor(오브젝트 생성기계) 안에서 사용하면, 새로 생성되는 오브젝트를 뜻함
// * 오브젝트: ex) var 과일, let fruits, const apple ...

var 뫄뫄 = {}

function 기계() { // <- constructor
  // 새로 생성된 오브젝트(이름)에 '이름'이란 키 값에는 'apple'이란 value값을 할당
  this.이름 = 'apple' // 여기서 this는? 기계()로부터 새로 생성되는 오브젝트 == instance(인스턴스)
}

var 오브젝트 = new 기계(); // 기계()로부터 생성되는 오브젝트도 이름 - apple이 되는 것

// 4
// 이벤트리스너

// 이벤트리스너 안에서 e.currentTarget == this
// * e.currentTarget : 지금 이벤트가 동작하는 곳

// 문제 1
document.getElementById('버튼').addEventListener('click', function(e){
  var array = [1, 2, 3];
  array.forEach(function(a){
    console.log(this) // 1. window
  });
})

// 문제 2
var 오브젝트 = {
  이름들 : ['apple', 'cherry', 'banana'],
  함수 : function(){
    console.log(this) // 3. 이 함수를 소유한 오브젝트 {이름들: Array(3), 함수: f}
    오브젝트.이름.forEach(function(){})
    console.log(this) // 1. window
  }
}
오브젝트.함수();

// 문제 3 arrow function으로 바꾸면
// * arrow function: 내부의 this 값을 변화시키지 않음(외부 this 값 그대로 재사용 가능)
// arrow function 이전에는 bind(this), call() 등 사용했었음
var 오브젝트 = {
  이름들 : ['apple', 'cherry', 'banana'],
  함수 : function(){
    console.log(this) // {이름들: Array(3), 함수: f}
    오브젝트.이름.forEach(() => {})
    console.log(this) // 위의 this와 같음. {이름들: Array(3), 함수: f}
  }
}
오브젝트.함수();




