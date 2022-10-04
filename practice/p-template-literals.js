// 1. 바지와 양말의 수 교체
var pants = 20;
var socks = 100;
`바지${pants} 양말${socks}`;

function 해체분석기(문자들, 변수들1, 변수들2){
  console.log(문자들[1] + 변수들1 + 문자들[0] + 변수들2);
}
해체분석기`바지${pants} 양말${socks}`

// 2. 바지가 0개일 때 '바지 안팔아요'
function 해체분석기(문자들, 변수들1, 변수들2){
  if (변수들1 == 0){
    console.log(`바지 안팔아요`);
  }
}
해체분석기`바지${pants} 양말${socks}`