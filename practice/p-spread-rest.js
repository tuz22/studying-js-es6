// 출력 결과는?

// 1.
var a = [1,2,3];
var b = '김밥';
var c = [...b, ...a];
console.log(c); // (5) ['김', '밥', 1, 2, 3]

// 2.
var a = [1,2,3];
var b = ['you', 'are'];
var c = function(a,b){
  console.log( [...a]); // [1, 2, 3]
  console.log([...b]); // ['you', 'are']
  console.log( [[...a], ...[...b]][1] ); // 13
  // == ( [[1, 2, 3], ...['you', 'are']][1] )
  // == ( [[1, 2, 3], 'you', 'are'][1] );
}
c(a,b);

// 3.
function 함수(a = 5, b = a * 2 ){
  console.log(a + b); // 9
  return 10 // 10
}
함수(3);

// 4.
function 함수(a = 5, b = a * 2 ){
  console.log(a + b); // 15
}
함수(undefined, undefined);

// 5. array를 만들어주는 함수 제작
function 어레이(...rest){
  return rest
}
var newArray = 어레이(1,2,3,4,5);
console.log(newArray);

// 6. Math.max()에 집어넣어서 최댓값을 구하기
var numbers = [2,3,4,5,6,1,3,2,5,5,4,6,7];
console.log(Math.max(...numbers));

// 7. 글자를 알파벳순으로 정렬해주는 함수
// = array가 아니라 문자열에도 적용할 수 있는 알파벳순 정렬함수
function 정렬(rest){
  console.log([...rest].sort()); // (4) ['a', 'b', 'e', 'r']
  console.log(...[...rest].sort()); // a b e r
}

정렬('bear');

// 8. 데이터마이닝 기능 만들기

// 글자세기('aacbbb') 라고 입력하면 콘솔창에
// { a : 2, b : 3, c : 1 }
// ▲ 이렇게 출력해주는 글자세기() 라는 함수 만들기

function 글자세기(글){
  var 결과 = {};

  // console.log([...글]); // (6) ['a', 'a', 'b', 'b', 'c', 'c']
  [...글].forEach(function(e) { // a; a; b; b; c; c;
    if( 결과[e] > 0 ) {
      결과[e]++;
    } else {
      결과[e] = 1;
    }
  });
  console.log(결과); // {a: 2, b: 2, c: 2}
}
글자세기('aabbcc');