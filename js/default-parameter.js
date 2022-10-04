/* default parameter */
// 함수를 만들 떄 파라미터 값을 안적었을 경우, 파라미터에 기본값(deafult값)을 줄 수 있음
function 더하기(a, b = 10){ // default값 : 10; b자리에 파라미터를 안넣었을 때 10으로 나옴
  console.log(a + b);
}
더하기(1);

function 더하기2(a, b = 3 * a){ // default값에 연산도 가능
  console.log(a + b);
}
더하기2(1);

function 임시함수(){
  return 10
}

function 더하기3(a, b = 임시함수()){ // default값에 함수도 가능
  console.log(a + b);
}
더하기3(1);

