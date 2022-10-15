/* optional chaining */
// ? / ?? 연산자
// 여러 문자, 숫자를 한 변수에 저장할 때

/* ? */
var user = {
  name : 'Kim',
  age : 20
};
console.log(user?.age) // ? 왼쪽이 비었으면 오른쪽을 출력안함
// optional chaining 연산자 ?. 왼쪽이 null, undefined이면 마침표 찍지 않고 undefined

/* 중첩된 object자료에서 자료뽑을 때 reference 에러없이 안전하게 뽑음 */
var user2 = {
  name : 'Park',
  // age : {value : 20}
};
console.log(user2.age?.value);

/* ! 중첩되지 않은 일반 object는 ?.없어도 알아서 값이 없으면 undefined해줌 */
var user3 = {
  name : 'Park'
};
console.log(user3.age);

/* undefined.value, null.value - 에러남 */
// 이럴 땐 ?. 사용하기
// ex
document.querySelector('#a')?.innerHTML

/* ?? */
// ??의 왼쪽이 undefined, null이면 오른쪽을 출력
console.log(undefined ?? '없으니까 출력');