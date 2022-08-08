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

//  remove duplicate items from array
const arr = ["abul","babul","cabul","babul","abul"];
const newUniqueArr = [new Set(arr)];
console.log(newUniqueArr);

// show output 1-50;
// 1.. if the number is divisible by 3 than instead of the number,show "foo"
// 2..if the number is divisible by 5 than instead of the number,show "bar"
// 3.. if the number is divisible by 3,5 and than instead of the number, show "foobar" 
for (let i = 1; i<= 50; i++) {
    if(i%3 === 0 && i%5 === 0){
console.log("foobar");
    }
    else if(i%3 === 0){
        console.log("foo");
            }
           else if(i%5 === 0){
                console.log("bar");
                    }
                    else{
                        console.log(i);
                    }
}
// *********
// fixed = per item wood 
// 1..chair...> 3cft
// 2..table...> 10cft
// 3..bed...> 50cft
// vary: quantity
///******* */
function woodCalculatore(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    
    const chairWood = chairQuantity*perChairWood;
    const tableWood = tableQuantity*perTableWood;
    const bedWood = bedQuantity*perBedWood;
    
    const totalWood =chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculatore(1,1,1);
console.log("TotalWood requare: ", totalWood);
 

    // phone set problm solving(cheapestPhone)
const phones = [
    {name:"samsung", camera:12, storage:32gb, price:36000, color:"silver"},
    {name:"oppo", camera:12, storage:32gb, price:56000, color:"black"},
    {name:"walton", camera:60, storage:32gb, price:43000, color:"white"},
    {name:"huawai", camera:12, storage:32gb, price:76000, color:"hui"},
]
function cheapestPhone(phones){
    let cheapest = Phone[0];
    for (let i = 1; i < phones.length; i++) {
    const phone = phones[i];
    if (phone.price<cheapest.price) {
     cheapest = phone;   
}
    }
    return cheapest;
            }
  const mySelection  = cheapestPhone(phones);
  console.log(mySelection);