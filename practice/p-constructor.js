// 1. 아래와 같은 상품 오브젝트를 뽑아낼 constructor 제작
// var product1 = { name : 'shirts', price : 50000 };
// var product2 = { name : 'pants', price : 60000 };

// 2. 상품마다 부가세()라는 내부함수를 실행하면 콘솔창에 상품가격 * 10%만큼의 부가세금액이 출력되도록하기

function Product(name, price){
  this.name = name;
  this.price = price;
  this.부가세 = function(){
    console.log('부가세금액: ' + price * 0.1);
  };
};
var product1 = new Product('shirts', 50000);
var product2 = new Product('pants', 60000);

console.log(product1);
console.log(product2);
console.log(product1.부가세());


