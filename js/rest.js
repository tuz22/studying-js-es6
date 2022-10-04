/* rest parameter */
// arguments의 단점: 자료를 쪼개서 쓰기 힘듦
// -> 이걸 개선한 것

function 함수(a, b, c){
  for (var i = 0; i < arguments.length; i++){
    console.log(arguments[i]);
  }
}
함수(2, 3, 4);

// ... : 1. spread operator 2. rest parameter
function 함수2(...파라미터들){ // 여기오는 모든 파라미터들을 array로 감싸겠다는 뜻
  console.log(파라미터들); // (7) [1, 2, 3, 4, 5, 6, 7]
}
함수2(1, 2, 3, 4, 5, 6, 7);

/* arguments, rest parameter 차이점 */
// argumetns: 모든 파라미터를 []에 담음
// rest parameter: ...뒤에 오는 모든 파라미터를 []에 담음
function 함수3(a, b, ...파라미터들){
  console.log(파라미터들) // (6) [3, 4, 5, 6, 7, 8]
  console.log(파라미터들[3]) // 6
}
함수3(1, 2, 3, 4, 5, 6, 7, 8);

/* 예시 */
function 함수4(...rest){
  for (var i = 0; i < rest.length; i++){
    console.log(rest[i]);
  }
}
함수4(1, 2, 3, 5, 67, 156, 35316);

/* 주의점 */
// 가장 뒤에 써야함 (맨 마지막 파라미터)
// 두번 이상 못씀 (한번만!)