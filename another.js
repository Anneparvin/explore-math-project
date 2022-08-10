// / find the second largest element of an array
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
// return secondLargest;
}
let array = [45,41,56,76,89];
// let result = secondLargestElement(array); 
// console.log(result[0],result[1]);
// console.log(secondLargestElement(array));

// module 22.5

// write a number,string,boolean variable
// var arr= [1,2,3];
// var arr= ["abul","babul","cabul"];
// var arr= [a>b];

// write let & constant ,change the variable

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
// const ans = divisibleBy3();
// console.log(ans);

// concatination
var a = 32;
var b = 55;
var c = a + b ;

// console.log( c);

// problem solving

// 1...................number
// convert feet to inch 
function feetToInche(feet) {
    let inch = feet* 12;
    return inch;
}
// var result = feetToInche(6);
// console.log(result);

//2.... centimeter to meter
function centimeterToMeter(centimeter) {
let meter = centimeter * 0.01;
return meter;
}
// var result = centimeterToMeter(5);
// console.log(result);

// 3).............count paper
// book1.........>100
// book2.........>200
// book3..........>300
// paperRequirements
function paperRequirements(copyBook1, copyBook2, copyBook3) {
    const book1 = 100;
    const book2 = 200;
    const book3 = 300;
    const totalPages = book1 + book2 + book3;
    return totalPages;
} 
const publish = paperRequirements(2,3,5);
console.log(publish);
// 4.['sajid','mamun','kamal','jubair bin rashd','chinku']
// bestFriend

function bestFriend(largeName){
let bestFriend = largeName[0];
for(let i=0; i< largeName.length; i++){
    let name = largeName[i];
    if(name.length > bestFriend.length){
        bestFriend = name;
    } 
}
return bestFriend;
}
const myFriend = ['sajid','mamun','kamal','jubair bin rashd','chinku'];
// const result = bestFriend(myFriend);
// console.log(result);


// 5......[45,65,32,-65,-86,-73,90]
// onlypositive
function onlypositive(numbers){
let positiveValue = numbers[0];
for (let i=0; i<=numbers.length; i++) {
    let element = numbers[i];
    if(element >= 0){
        positiveValue.push(element);
}
else{
    break;
}
}
return positiveValue;
}
// const arrNumbers = [45,65,32,-65,-86,-73,90];
// const positive = onlypositive(arrNumbers);
// console.log(positive);


// write a function that will take an array and calculate the sum of odd numbers greater than 10 and less than 50.
function findOddNumbers(arrNumbers){
    let sum = 0;
    for(let i = 0; i < arrNumbers.length; i++){
       if (arrNumbers[i] % 2 !== 0 && arrNumbers[i] > 10 && arrNumbers[i] < 50){
            let number = arrNumbers[i];
             sum = sum + number;
        }
    }
    return sum;
}
const arrNumbers = [5,6,7,8,9,10,11,12,13,14];
const oddsum = findOddNumbers(arrNumbers);
console.log(oddsum);

// daily routin ...... 
// 1..module unlock
// 2..watching videos & practice.
// 3..full module practice.
// 4..take notes.
// 5...dont understand concept go to support session .
var dailyRoutin = ['1..module unlock','2..watching videos & practice','3..full module practice','4..take notes','5...dont understand concept <<go to support session'];


for (var i = 0; i < dailyRoutin.length; i++) {
    var dailyWork = dailyRoutin[i];
    console.log(dailyWork);
    if (dailyWork ===" 5...dont understand concept go to support session"){
        console.log("<<go to support session");
    }

}
111111111111
// reverse way of daily dailyRoutin
var dailyRoutin = ['1..module unlock','2..watching videos & practice','3..full module practice','4..take notes','5...dont understand concept <<go to support session'];

for (var i= dailyRoutin.length -1; i >= 0; i--) {
var dailyWork = dailyRoutin[i];
console.log(dailyWork);
if (dailyWork === "5...dont understand concept"){
    console.log(" <<go to support session");
}
}

