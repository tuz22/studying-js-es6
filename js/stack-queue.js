/* Stack, Queue를 이용한 웹브라우저 동작원리 */

/* 웹 브라우저란? */
// 서버에서 받아온 HTML, CSS, JS를 실행시켜주는 프로그램

// Stack : 내가 짠 코드를 실행 해주는 곳. (특징: 하나밖에 없음)
// -> 그래서 자바스크립트는 보통 single threaded

/* 실행까지 오래 걸리는 코드들은 Stack -> 대기실(*편의상 표기)에 보내둠 */
// ex) Ajax 요청 코드, 이벤트리스너, setTimeout 등

/* 대기 끝난 코드들 Stack으로 이동할 때 Queue에 줄 세움 -> (Stack이 비어있을 때) Stack으로 순차적으로 보냄*/
// ex) 대기 끝난 코드1    대기 끝난 코드2    대기 끝난 코드3

/* 자바스크립트는 원래 동기적 처리 - 한번에 한줄씩 순서대로(Stack이 하나니까) */
/* 비동기적 처리도 가능 - Ajax 요청 코드, 이벤트리스너, setTimeout 사용하면 가능 */

// Stack 오래 걸리는 연산코드가 있으면 그만큼 Queue에서 대기중인 코드들이 실행이 안될 수 있음
/* -> 오래 걸리는 연산코드를 꼭 사용해야한다면? */
// 1. setTimeout() 사용
// 0초마다 (오래 걸리는 코드) 반복 해두면, 그 사이사이에 사용자의 이벤트리스너 코드를 실행가능하게 됨
// * setTimeout 타이머가 0일때 실제로는 4ms로 동작함

// 2. Web worker 사용
// 다른 자바스크립트 파일에 오래 걸리는 연산 코드를 넣어두고 완료 되면 그 값을 가져오기
// Worker 클래스를 사용하면 됨

/* 

(main.js 파일)
var myWorker = new Worker('worker.js');
w.onmessage = function(e){
  console.log(e.data) // 1
};

(worker.js 파일)
var i = 0;
postMessage(i + 1); // postMessage()란 함수를 실행하면 다른 파일로 완료된 결과값을 전달 가능

 */