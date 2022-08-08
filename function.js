// practic/* */e 1
var totalCash = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalPrice  = applePrice + orangePrice;
console.log(totalPrice);
var getBack = totalCash - totalPrice;
console.log(getBack);

// problem 2

var mathMarks = 20;
var biologyMarks = 30;
var chemistryMarks = 40;
var physicsMarks = 50;
var banglaMarks = 60;

 var totalMarks = (mathMarks + biologyMarks + physicsMarks + banglaMarks + chemistryMarks);
console.log (totalMarks);
var average = totalMarks / 5;
console.log (average);

// practice 3

var number = 119;

var remainder = 119 / 5;
console.log (remainder);
var remainder = 119 % 5;
console.log (remainder);

// practice 4

var totalScore = 30;

if(totalScore >=  80 ){
console.log('A grade');
}
else if(totalScore >= 60){
console.log('B grade');
}
else if(totalScore >= 50){
console.log('C grade');
}
else if(totalScore >= 40){
console.log('D grade');
}
else if (totalScore >= 30){
console.log('E grade');
}
else {
console.log('F grade');
}
// practice 6
 var fruits = ['apple' + 'banana' + 'orange' ]

 var bananaIndex = fruits.indexOf ('banana');
console.log(bananaIndex);
fruits[1]= 'mango';
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('watermelon');
console.log(fruits);

// prb = 1
var totalAmount = [80000, 60000, 40000, 20000];
console.log(totalAmount);

if (totalAmount> 80000) {
  console.log("i will buy mac laptop");
} else if (totalAmount > 60000 ) {
  console.log("i will buy gamingLaptop");
} else if (totalAmount > 40000 ) {
  console.log("i will buy lenovoYoga");
} else if (totalAmount > 20000 ) {
  console.log("i will buy usedLaptop");
} else {
  console.log("i will used mobile");
}
// prb 2
var num = 6;
if (num > 0){
console.log("positive");
}
else if (num < 0){
console.log("negative");
}
else {
console.log("zero");
}
// prob 3
var num = 5;

if (num % 2 == 0){
console.log("Even");
}
if (num % 2 != 0){
console.log("Odd");
}
// prb 4
var num = 5;
if (num > 0){
console.log("positive");
}
else if (num < 0){
console.log("negative");
}
else {
console.log("zero");
}
// prob-6
var moneyGiven = 1000;
var applePrice = 400;
var orangePrice = 300;

var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var getBack = moneyGiven - totalPrice;
console.log(getBack);
// prob 7
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

 var totalMarks = (mathMarks + biologyMarks   + physicsMarks + banglaMarks + chemistryMarks)
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDecimal = average.toFixed(2)
console.log(averageTwoDecimal);


// prob 9
var text = ('ajk amr mon bhalo nai');
console.log(text.repeat(' 39'));
// prob 10

var num = 6;
if (num % 2 == 0) {
console.log('even')
}
else
{
console.log('odd');
}


// prob 11
for ( var a = 1 ; a <= 10; a++){
  if( a == 3){
console.log("number:" + a);
  continue;
}
  console.log("number:"+ a);
}

//  prb-12
for ( var a = 1; a<= 10;a++){
  if (a == 3){
    console.log("number:" + a);
  break;
  }
  console.log("number:" + a);
}

// pro-12
for ( var a = 1; a<= 100; a++){
  if(a % 2 != 0){
    console.log( a);
  }
}

// prb-13

var a = 1;
while (a <= 10){
  console.log( a +"hello");
  a = a + 1;
}

// prb-13
var a = "komon acho bhondhu";
console.log( a.repeat(10));

//  p-1
 var text = "hello world";
 var repeated = text.repeat(39);
 console.log( repeated + '<br>');
// p-2
 for (var a =1;a <= 10;a++){
   console.log('hello world<br>');
  }
//  p-3
 for (var a = 1;a <= 10; a++){
   if(a == 3){
   console.log('number:' + a + '<br>');
   continue;
  }
   console.log('number:' + a + '<br>');
}

// repeat function
var a = 1;
while (a <= 10){

console.log("hello");
 a =a + 1;
}





