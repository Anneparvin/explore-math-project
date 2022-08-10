// print all even numbers from 1-20;
function printEven(){
    for (var i = 0; i <= 20; i++) {
        if(i % 2 == 0) {
            console.log(i);
        }
}
}
printEven();

// print all odd numbers from 1-20;
function printOdd(){
    for (var i = 0; i <= 20; i++) {
        if(i % 2 != 0) {
        return(i);
        }
}
}
printOdd();

// check if a number is prime
// 1 n 11
// 2->n-1
function isPrime(number){
    for (var i = 0; i < number; i++) {
        if(number % i == 0) {
            return false;
        }
}
return true;
}
function primeRange (arr){
    let primeArray = [];
    for (var i = 0; i < arr.length; i++) {
        const prime= isPrime(arr[i]);
        primeArray.push(prime);
}
return primeArray
}
console.log(isPrime(9));

// count numbers divisible by 3 from 1-20
function divisibleBy3(){
    let count = 0;
    for (let i = 1; i <= 20; i++) {
if( i % 3 === 0 ){
    count = count + 1;
    count++;
    count += 1;
}
}
return count;
}
const ans = divisibleBy3();
console.log(ans);

// else if for grade system math
// setInterval
let mark = 15;
if (mark > 30){
    console.log ("mark is greater than 30");  
}
else if(mark > 20){
    console.log ("mark is greater than 20");  
}
else if(mark > 10){
    console.log ("mark is greater than 10");  
}
else{
    console.log ("mark is equal");  
}

// nesting
// wrong solution
let a =3,b= 2, c= 4;
if(a>b && a>c){
    if(a>c){
console.log ("a is greater than c");
}
else if (c>b){
    console.log ("c is greater than b");  
}
else{
    console.log ("b is largest");
}
}
console.log ("finished");


// loop array
const arr = [1,2,3,6,6,3];
for (let i=0; i<arr.length; i++) {
    console.log ("arr[i]");
}

// calculate the average of all the numbers
// (1+2+3+4+5)/5
// 3+6+9
function average(n) {
    let count = 0 ,sum = 0;
    for (let i=1; i<=n; i++) {
        if( i % 3 === 0 ){
         count = count + 1;
         sum = sum + i;   
        }
}
const avg = sum / count;
return avg;
}
// const result = average(10);
console.log(result);

// mular Dam
// for first 2 kg ...30 tk per kg
// for more than 2 kg ...25 tk per kg
// write a function to calculate total price based on given quantity.+handle errors
// if (quantity<=2){
//     return quantity*30;
// }
// else{
//     return quantity*25;
// }

// calculate electrictricity bill
// for first 100 unit ...5 tk per unit
// for more than 100 unit ...6 tk per every unit more than 100
// for more than 200 unit ...7 tk per every unit more than 200
// 250 units ...
// 100*5 = 500
// (200-100)*6
// (250-200)*7
function electrictricityBill(unit){
    let bill;
    if (unit <= 100){
        bill = unit*5;
}
else if (unit <= 200){
    const first100 = 100*5;
    const remaining = unit -100;
    const remainingCost = remaining*6;
    bill = first100 + remainingCost;
}
else if (unit> 200){
    const first100 = 100*5;
    const second100 =100*6; 
    const remaining = unit -200;
    const remainingBill = remaining * 7;
    bill = first100 + second100 + remainingBill;
}
return bill;
}
// const totalBill = electrictricityBill(250);
// console.log(totalBill);

// find if anybody got A+ of your friends
// arr = [78,82,69];
function checkGPA(arr){
for (let i = 0; i < arr.length; i++){
    console.log( "friend" + i +"th mark:"+ arr[i]);
    if (arr[i] >= 80){
        return true;
    }
}
return false;
}
console.log("checkGPA:"  [78,82,69]);

// find the largest element of an array

function largestElement(array){
    let largest = array[0];
    for (const element of array){
        if (element>largest){
            largest = element;
        }
    }
    return largest;
}
// let array = [3,5,7,1,9];
console.log(largestElement(array));

// find the second largest element of an array
function secondLargestElement(array){
    let largest= array[0];
    let secondLargest = array[0];
    for (let i=0; i<array.length; i++) {
    let element = array[i];
    if(element>largest){
        secondLargest=largest;
        largest = element;
    }
    else if(largest>secondLargest){
        secondLargest=element;
    }
}
return secondLargest;
}
let array = [45,41,56,76,89];
let result = secondLargestElement(array); 
// console.log(result(0),result(1));
// console.log(secondLargestElement(array));

// remove duplicate from array
function removeDuplicate(arr){
    let unique=[];

    for (let i=0; i<arr.length; i++) {
        if ((unique.includes(arr[i]))== false ){
        unique.push(arr[i]);
        }
    }
    return unique;
}
console.log(RemoveDuplicate[1,3,4,2,5,6,5,6]);

