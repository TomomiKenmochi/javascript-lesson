//Q1
let nickname = 'ともみ';
let age =33;
let greet = '私のニックネームは' + nickname + 'です。年齢は' + age + 'です。';
console.log(greet)

//Q2
let languages = ['JavaScript' , 'PHP' , 'Ruby' , 'Python' , 'Go']
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
console.log(templateText);

//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1])

//Q5
let ageList = [playerList[0].age, playerList[1].age, playerList[2].age];
let sum = 0;
for(let i = 0; i < ageList.length; i++){
  sum += ageList[i];
}
let ageAvg = sum / ageList.length;
console.log(ageAvg);

//Q6
function sayHello(){
return 'Hello';
}
console.log(sayHello());

//Q7
let sayWorld = function(){
  return 'World';
};
console.log(sayWorld());

user.sayHello = function(){
 console.log('Hello!');
}
//console.log(user);
user.sayHello();

//Q8
let calc = {};
calc.add = function(x,y){
 return x + y;
}
calc.subtract =function(x,y){
 return x - y;
}
calc.multiply =function(x,y){
 return x * y;
}
calc.divide =function(x,y){
 return x / y;
}
console.log(calc.add(5,2));
console.log(calc.subtract(10,2));
console.log(calc.multiply(7,7));
console.log(calc.divide(10,2));

//Q9
function remainder(x,y){
return + x + 'を' + y + 'で割った余りは' + x % y + 'です。';
}
console.log(remainder(5,3));

//Q10
function foo() {
  let x = 1;
}
//console.log(x);
//変数Xのスコープは変数foo内になっており
//関数内でしか参照できないローカル変数なので
//関数外では参照できない
//よって引数Xには何も入っていないという事になり
//文字列でもなんでもないのでエラーになる

//応用Q1
let randam = Math.floor(Math.random()*10);
console.log(randam);

//応用Q2 - 1
setTimeout(function(){
console.log('Hello World!');
},3000
);

//応用Q2 - 2
function printName(firstName, formatter) {
  console.log(formatter(firstName));
}
const addIntro = (name) => '私の名前は' + name + 'です。';
printName('名前', addIntro);

//応用Q3
let num =5;
if(num > 0){
  console.log('num is grarter than 0');
}else if(num < 0){
  console.log('num is less than 0');
}else if(num === 0){
  console.log('num is 0');
}

//応用Q4
let numbers =[];
for (let i = 0; i < 100; i++){
  numbers.push(i);
};
console.log(numbers, numbers.length);

//応用Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for(let i =0; i< mixed.length; i++){
  if(typeof mixed[i] !== 'number'){
    console.log('not number');
  }else if(mixed[i] % 2 === 0){
    console.log('even');
  }else{
    console.log('odd');
  }}