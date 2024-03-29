// Remove Duplicate Elements from Array Using Set ()

l
let array = [2,4,1,7,9,8,7,4,1];
console.log(array);

const mySet = new Set();

for (const elements of array) {
    mySet.add(elements);
}
console.log(mySet);

let newArray = [];
for (const elements of mySet) {
    newArray.push(elements);
}
console.log(newArray);



console.log("\n");
// using spread Operator 

console.log("============  Shot Cut Way ===============");
let newElementsArray = [...new Set(array)];
console.log(newElementsArray);