/* 변수 */
// - 자료를 임시 저장하는 공간

/* 변수의 특징 */
// - 선언, 할당, 범위

//       재선언   재할당   범위
// var     o       o      function
// let     x       o      {}
// const   x       x      {}

/* 변수의 재선언, 재할당 */
let 이름 = 'apple';
// let 이름 = 'cherry'; -> 재선언(x)
이름 = 'cherry'; // -> 재할당(o)

const 색깔 = 'red';
// const 색깔 = 'green'; // Uncaught SyntaxError: Identifier '색깔' has already been declared
// 색깔 = 'green'; // Uncaught TypeError: Assignment to constant variable.

/* const로 오브젝트를 만들었을 때 */
const 과일 = { 이름 : 'apple' }
과일.이름 = 'cherry'; // 오브젝트 내부 값을 변경하는 건 자유! 에러안남

/* 수정 불가능한 오브젝트를 만들 때 */
const 과일 = { 이름 : 'apple' }
Object.freeze(과일); // freeze: 해당 오브젝트를 수정 불가능하게 해줌

/* 변수 범위 */
// var의 범위 - function
function 함수(){
  var 이름 = 'apple';
  이름; // 있음
}
이름; // 없음 -> Uncaught ReferenceError: 이름 is not defined

// let, const의 범위 - {}
if (true){
  let 이름 = 'apple';
}
