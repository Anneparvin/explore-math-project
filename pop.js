// 5......[45,65,32,-65,-86,-73,90]
// onlypositive
function onlypositive(numbers){
    let positiveValue = [];
    for (let i=0; i< numbers.length; i++) {
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
    const arrNumbers = [45,65,32,-65,-86,-73,90];
    const positive = onlypositive(arrNumbers);
    console.log(positive);

// find second largest number
function findSecondLargest(arr){
    let largest = 0;
    let secondLargest = 0;
    for(i of arr){
        if(i > largest){
            largest = i;
        }
    }
    for (j of arr){
        if(j > secondLargest && j< largest) {
            secondLargest = j;
        }
    }
  return secondLargest;  
}
const arr = [1,2,3,4,5,6,7];
let publish = findSecondLargest(arr); 
console.log("the second largest is: " , publish);




