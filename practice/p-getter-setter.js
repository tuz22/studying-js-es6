// 1. 게임 기능을 가진 오브젝트를 뽑는 class 제작
// class 이름: Unit

// (1) 모든 Unit의 인스턴스는 공격력, 체력 속성이 있으며 기본 공격력은 5, 기본 체력은 100으로 설정
// (2) 모든 Unit의 인스턴스는 전투력을 측정해주는 battlePoint라는 getter가 있음
// console.log( 인스턴스.battlePoint ) 이렇게 사용하면 현재 공격력과 체력을 더한 값을 콘솔창에 출력
// (3) 모든 Unit의 인스턴스는 heal이라는 setter가 있습니다.
// 인스턴스.heal = 50 이렇게 사용하면 체력 속성이 50 증가
// *인스턴스: class로부터 새로 생성되는 오브젝트

class Unit{
  constructor(){
    this.damage = 5;
    this.hp = 100;
  }
  get battlePoint(){
    return this.damage + this.hp
  }
  set heal(numb){
    this.hp = this.hp + numb
  }
};
var 유닛1 = new Unit();

// 2. 홀짝
// (1) data 오브젝트안에 setter 역할 함수 제작
// setter 함수에 1,2,3,4 이렇게 아무 자연수나 파라미터로 입력하면 홀수는 odd, 짝수는 even 이라는 속성에 array 형태로 저장
// (2) data 오브젝트안에 getter 역할 함수 제작
// getter 함수를 사용하면 odd, even에 저장된 모든 데이터들이 숫자순으로 정렬되어 출력

/* 
var data = {
  odd : [],
  even : []
}
 */

// var data = {
//   odd : [],
//   even : [],
//   setNumb : function(...numbs) {
//     numbs.forEach(function(e) {
//       if (e % 2 == 1) {
//         this.odd.push(e); // 에러! -> forEach 안에서 this가 window로 나옴 => 화살표 함수로 변경
//       } else {
//         this.even.push(e);
//       }
//     });
//   }
// };
// data.setNumb(1, 2, 3);

// (1)
var data = {
  odd : [],
  even : [],
  setter함수 : function(...numbs) {
    numbs.forEach((e) => {
      if (e % 2 == 1) {
        this.odd.push(e);
        // console.log(this); // {odd: Array(1), even: Array(0), setNumb: ƒ}
      } else {
        this.even.push(e);
      }
    });
  }
};
data.setter함수(1, 2, 3);

// (2)
var data = {
  odd : [1, 3, 5],
  even : [2, 4],
  get getter함수(){
    return [...this.odd, ...this.even].sort()
  }
};
data.getter함수;
