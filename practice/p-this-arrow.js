// 1
// 간단한 메소드
// 사람.sayHi라는 함수를 추가하기. 이 코드를 실행 시 '안녕 나는 (name)' 출력하기
var 사람 = {
  name: '김뫄뫄',
  sayHi: function(){
    console.log('안녕 나는 ' + this.name);
  }
}
사람.sayHi();

// 2
// 오브젝트 내의 데이터 전부 더해주는 메소드
var 자료 = { 
  data : [1,2,3,4,5] 
}

자료.전부더하기 = function(){
  var 합 = 0;
  this.data.forEach(function(a){
    합 = 합 + a;
  });
  console.log(합);
}

자료.전부더하기();

// 3
// setTimeout을 이용해서 1초 후에 this.innerHTML을 콘솔창에 출력
// document.getElementById('btn').addEventListener('click', function(){
//   var 버튼 = this;
//   setTimeout(function(){ console.log(버튼.innerHTML) }, 1000); 
// });
document.getElementById('btn').addEventListener('click', function(){
  setTimeout(() => { console.log(this.innerHTML) }, 1000); 
});
