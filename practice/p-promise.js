// 1. <img> 이미지 로딩 성공시 특정 코드를 실행
var img = document.querySelector('#test');
var imgload = new Promise(function(성공, 실패){
  img.addEventListener('load',function(){
    성공();
  });
  img.addEventListener('error',function(){
    실패();
  });
});

imgload.then(function(){
  console.log('성공')
}).catch(function(){
  console.log('실패')
});

// 2. GET 요청을 해서 성공하면 Promise의 then 함수를 이용해서 Ajax로 받아온 인삿말을 콘솔창에 출력
// $.ajax({
//   type: "GET",
//   url: "https://codingapple1.github.io/hello.txt",
// }).done(function(result){
//   console.log(result);
// });
// ==
// $.get('https://codingapple1.github.io/hello.txt').done(function(result){
//   console.log(result)
// });
var Hello = new Promise(function(success, fail){
  $.ajax({
    type: "GET",
    url: "https://codingapple1.github.io/hello.txt",
  }).done(function(result){
    success(result);
  });
});

Hello.then(function(result){
  console.log(result);

});

// 3. Promise chaining
// 2번에서 만든 코드 업데이트

var Hello = new Promise(function(success, fail){
  $.ajax({
    type: "GET",
    url: "https://codingapple1.github.io/hello.txt",
  }).done(function(result){
    success(result);
  });
});

Hello.then(function(result){
  console.log(result);

  var Hello2 = new Promise(function(success, fail){
    $.ajax({
      type: "GET",
      url: "https://codingapple1.github.io/hello2.txt",
    }).done(function(result){
      success(result);
    });
  });
  return Hello2;
  
}).then(function(result){
  console.log(result);
});
