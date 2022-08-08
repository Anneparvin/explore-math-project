// module 22
// .....................[22.1]......
// concat
const newFriendAge = [12,13,14,15];
const friend = [65,89,65,45];
const allFriendAge = newFriendAge.concat(friend);
console.log(allFriendAge)

// is the line array/typeOf?
const country = "Bangladesh";
const age = 52;
const isIndependent = true;
const student = {id:121,class:11,name:"agun"};
// const friends = [65,89,65,45];
function add(num1 , num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// console.log(Array.isArray (friends));
console.log(typeof add);

// ..........[22.2.].....

// .......slice
// const friends = [12,45,32,22,44,62,29,69,87];
// const partial = friends.slice(2, 5);
// console.log(partial);
// yahoo baba slice youtube.......
// const friends = [12,45,32,22,44,62,29,69,87];
// const partial = friends.slice(-2);
// console.log(partial);



// .................splice
// const friends = [12,45,32,22,44,62,29,69,87];
// const partial = friends.splice(2, 5, 87, 89);
// console.log(partial);
//yahoo baba splice youtube.......
const friends = [12,45,32,22,44,62,29,69,87];
const partial = friends.splice(-2,1);
 console.log(partial);
