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
return secondLargest;
}
let array = [45,41,56,76,89];
let result = secondLargestElement(array); 
console.log(result[0],result[1]);
console.log(secondLargestElement(array));
