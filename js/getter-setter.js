/* getter, setter */

/* age라는 자료를 꺼내고 싶으면? */
// - 자료를 꺼내는 함수를 만들어서 꺼냄

var 사람 = {
  name : 'Park',
  age : 30,
  nextAge(){
    return this.age + 1
  }
}
사람.age; // *자료 그냥 바로 꺼내는 방법
사람.nextAge();

/* 함수를 만들어서 object데이터를 다루는 이유 */
// 1. object 자료가 복잡할 때 편함
// 2. object 자료를 수정할 때 편함
// 3. 데이터 수정 전 미리 검사 가능 = 데이터 무결성

var 사람 = {
  name : 'Park',
  age : 30,
  nextAge(){
    return this.age + 1
  },
  setAge(나이){
    this.age = 나이;
    // this.age = parseInt(나이); // 문자값을 넣어도 숫자로 변경시켜줌
  }
}
// 사람.age = 20; 이렇게 말고
사람.setAge(20); // 이렇게 데이터 수정 함수를 제작

/* 사람.setAge() 여기서 소괄호가 보기싫다면? */

var 사람 = {
  set setAge(나이){ // 앞에 set 키워드 붙여주기
    this.age = 나이;
  }
}
사람.setAge = 20;

/* get, set 키워드 */
// get함수들(getter): 데이터를 꺼내쓰는 함수에 사용 - return 필요
// set함수들(setter): 데이터 변경하는 함수에 사용 - 파라미터가 1개 필요

/* class에서 사용하는 get/set */
class 사람 {
  constructor(){
    this.name = 'Park';
    this.age = 20;
  }
  get nextAge(){
    return this.age + 1
  }
  set setAge(){
    this.age = 나이;
  }
}
var 사람1 = new 사람();
