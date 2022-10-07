// 1. 강아지 오브젝트를 뽑는 class 만들기

// var 강아지1 = { type : '말티즈', color : 'white' };
// var 강아지2 = { type : '진돗개', color : 'brown' }; 

class 강아지{
  constructor(품종, 색깔){
    this.type = 품종;
    this.color = 색깔;
  }
};
var 강아지1 = new 강아지('말티즈', 'white');
var 강아지2 = new 강아지('진돗개', 'brown');

// 2. 고양이 오브젝트 만들기(feat. class 강아지를 상속해보자)

// var 고양이1 = { type : '코숏', color : 'white', age : 5 };
// var 고양이2 = { type : '러시안블루', color : 'brown', age : 2 };

class 고양이 extends 강아지{
  constructor(품종, 색깔, 나이){
    super(품종, 색깔);
    this.age = 나이;
  }
};
var 고양이1 = new 고양이('코숏', 'white', 5);
var 고양이2 = new 고양이('러시안블루', 'brown', 2);

// 3. 고양이와 강아지 object들에 기능 추가 - .한살먹기() 함수 제작하기
// (1) 한살먹기 함수는 강아지 class로부터 생성된 오브젝트가 사용하면 콘솔창에 에러를 출력
// (2) 한살먹기 함수는 고양이 class로 부터 생성된 오브젝트가 사용하면 현재 가지고있는 age 속성에 1을 더해주는 기능을 실행

class 강아지{
  constructor(품종, 색깔){
    this.type = 품종;
    this.color = 색깔;
  }
  한살먹기(나이){
    if (this instanceof 고양이) // a instance of b: a가 b로부터 생성된 오브젝트인지 true/false로 판단
    this.age++
  }
};
고양이1.한살먹기(5);