function bestFriend(largeName){
    let bestFriend = largeName[0];
    for(let i=0; i< largeName.length; i++){
        let name = largeName[i];
        if(name.length > bestFriend.length){
            bestFriend = name;
        } 
    }
    // return bestFriend;
    }
    const myFriend = ['sajid','mamun','kamal','jubair bin rashd','chinku'];
    const result = bestFriend(myFriend);
    // console.log(result);


// prb===2
function onlypositive(numbers){
    let positiveValue = numbers[0];
    for (let i=0; i<=numbers.length; i++) {
        let element = numbers[i];
        if(element >= 0){
            // positiveValue.push(element)
    }
    else{
        break;
    }
    }
    // return positiveValue;
    }
    const arrNumbers = [45,65,32,-65,-86,-73,90];
    const positive = onlypositive(arrNumbers);
    // console.log(positive);
  
    // prb=3
    const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id:121,class:11,name:"agun"};
// const friends = [65,89,65,45];
function add(num1 , num2){
    return num1 + num2;
}
// console.log(typeof country);
// console.log(typeof country);
// console.log(typeof country);
// console.log(typeof country);
// console.log(typeof country);
// console.log(typeof country);

// prb==3
const friends = [12,45,32,22,44,62,29,69,87];
const arrFriends = friends.slice(4,2);
console.log(arrFriends);

// concatination
var a = 32;
var b = 55;
var c = a + b ;

console.log( c);