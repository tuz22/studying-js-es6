/* Template literals */

/* backquote 문자열 */
var 변수 = `apple`;

/* backquote 문자열의 장점 */
// 1. 엔터키 가능
// 2. 중간에 변수 넣기 쉬움

var 문자 = '이 ' + 변수 + '는 맛있어.';
var 문자 = `이 ${변수}는 맛있어.`;

var 템플릿 = `<div>${변수}</div>`;

function 함수(){
  return 10
}
// 함수()
함수`이 ${변수}는 맛있어.` // 10 // tagged literal


/* tagged literals */
// `문자`를 해체분석 가능

function 해체분석기(문자들, 변수들){
  console.log(문자들);
  console.log(변수들);
}
해체분석기`이 ${변수}는 맛있어.`

function 해체분석기(문자들, 변수들, 변수들2){
  console.log(문자들);
  console.log(변수들);
  console.log(변수들2);
}
해체분석기`이 ${변수}는 맛있어.${변수}`

// 해체분석기 파라미터 1 : 문자들을 Array로 변경
// 해체분석기 파라미터 2 : ${변수}를 뜻함
// 해체분석기 파라미터 3 : 두번째 ${변수}를 뜻함

/* tagged literals 예시 */
// 글자 순서 변경
function 해체분석기(문자들, 변수들){
  console.log(문자들[1] + 문자들[0]);
  console.log(문자들[1] + 변수들 + 문자들[0]);
}
해체분석기`이 ${변수}는 맛있어.`