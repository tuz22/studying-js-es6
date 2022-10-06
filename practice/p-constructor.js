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

// 2. 코드의 출력 결과는?
function Parent(){
  this.name = 'Kim';
}
var a = new Parent(); // a = { name : 'Kim' }

a.__proto__.name = 'Park'; // 부모 prototype에 { name : 'Park' } 추가
console.log(a.name) // 'Kim'

// 3. 이름이 출력되지 않는 이유는?
function Student(이름, 나이){
  this.name = 이름;
  this.age = 나이;
}

Student.prototype.sayHi = () => {
    console.log('안녕 나는 ' + this.name + '이야');
  }
var 학생1 = new Student('Kim', 20);

학생1.sayHi();
// -> arrow function을 사용해서 this값이 window가 되어서.
// *arrow function: this를 바깥에 있는 this를 그대로 사용하고 싶을 때 쓰는 함수

// 4. 모든 array에 적용할 수 있는 함수
// -> array 내에 있는 3이라는 값을 제거해주는 함수 만들기
// var arr = [1,2,3];
// arr.remove3();

// console.log(arr); //[1,2]
Array.prototype.remove3 = function(){
  for (var i = 0; i < this.length; i++){
    if (this[i] === 3) {
      this.splice(i, 1);
    }
  }
}
var arr = [1,2,3,4];
arr.remove3();

console.log(arr); //[1,2,4]s