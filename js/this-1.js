// this

// 1
console.log(this) // window

function 함수(){
  console.log(this); // window
}
함수()

// 2
'use strict';
console.log(this) // window

function 함수(){
  console.log(this); // undefined
}
  함수()

// 3
// 함수나 변수를 전역공간{}에서 만들면 {window} 보관
// 오브젝트 내의 메소드에서 사용하면 그 메소드를 가지고 있는 오브젝트 == this
var 오브젝트 = {
  data : 'apple',
  함수 : function(){
    console.log(this)
  }
}
오브젝트.함수();

// 기존 문법: function() {}
// 신 문법: () = {}

// 상위 요소에 있는 this 값을 돌려받아서 사용
var 오브젝트 = {
  data : {
    함수 : () => {
      console.log(this)
    }
  }
}
오브젝트.data.함수();

// 위와 같음
var 오브젝트 = {
  data : {
    함수() {
      console.log(this)
    }
  }
}
오브젝트.data.함수();

// 함수나 변수를 전역공간{}에서 만들면 {window} 보관
function 함수(){
  console.log(this)
}
함수();
window.함수();
