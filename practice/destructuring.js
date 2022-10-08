/* destructuring */

var arr = [2, 3, 4];

// 변수를 담을 때 이런식으로 하는데
var a = arr[0];
var b = arr[1]; // 불편함 -> 개선한게 destructuring

// 위치를 맞춰 변수를 선언하면 변수가 생김
var [a, b, c] = [2, 3, 4];

/* array destructuring 할 때 빼먹는건 */
// = 등호로 기본값 지정 가능
var [a, b, c = 10 ] = [2, 3]
var [a, b, c = 10 ] = []; // 변수선언만하면 undefined

/* obj데이터를 꺼내 변수에 담으려면? */
var obj = { name : 'Kim', age : 30 };
var name = obj.name;
var age = obj.age;

// 변수명을 key명과 똑같이 사용해야함
var {name, age = 31 } = { name : 'Kim', age : 30 };

// 변수명도 변경하고 싶을 때
var { name : 이름, age = 31 } = { name : 'Kim' };
console.log(이름) // "Kim"

// 기본값 지정 할 때
var { name : 이름 = 'Park' } = { };

// 변수들을 object에 집어넣고 싶을 때
var name = 'Kim';
var age = 30;

var obj = { name : name, age : age };
console.log(obj) // {name: 'Kim', age: 30}

// var obj = { name : name, age : age }; <- 이거 축소판
var obj = { name, age };

// destructuring 함수 파라미터에 사용
var obj = { name : name, age : age };

function 함수([name, age]){
  console.log(name); // 1
  console.log(age); // 2
}
함수([1,2]);

