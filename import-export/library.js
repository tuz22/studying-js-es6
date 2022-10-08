/* import, export */
// 자바스크립트 코드가 길어지면 다른 파일로 쪼개는게 좋은 관습!
// import/export를 사용하면 내가 원하는 변수, 함수, class만 다른 파일로 보낼 수 있음
// ! import 해온 변수나 함수는 사용은 가능하지만 수정은 x

// var a = 10;
// export default a; // 1. export default 내보낼거
// ! 2. export default를 사용하면 import할 때 이름 변경해도 상관 없음 ex) import aaa from '/library.js';

// 3. 여러개를 내보내려면?: export {내보낼것들}
// var a = 10;
// var b = 20;
// export {a, b};

// 5. 하나만 내보내려면?: export default 내보낼것
// var a = 10;
// var b = 20;
// var c = 30;
// export {a, b};  // 6. import 하려면?
// export default c;

// 7.export default c와 export {a,b} 동시에 사용하려면?
var a = 10;
var b = 20;
var c = 30;
export {a, b};
export default c;

// *옛날 문법 - import 대신 사용하던 것
// var 임포트해온것들 = require('./library.js');
// import/export 문법은 ES6이라 호환성이 안좋음(IE에서 사용불가) - 모듈식으로 개발하려면 src로 첨부하는게 제일 호환성이 좋음