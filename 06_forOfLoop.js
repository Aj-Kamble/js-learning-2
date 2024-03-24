
console.log(`================= addition of array ================`);
const array = [2, 4, 1, 7, 9, 8]
let sum = 1;
for (const element of array) {
    sum = sum + element;
}
console.log(`sun of arrays: `, sum);

console.log(`--------------------------------------------`);
console.log("\n");

console.log(`================= Multiplication of array ================`);
const arrays = [2, 4, 1, 7, 9, 8]
let Multiplication = 1;
for (const element of arrays) {
    Multiplication = Multiplication + element;
}
console.log(`Multiplication of arrays: `, Multiplication);



console.log(`========================================`);
var friendList = ["Jenny", "Bill", "Andy", "Elon"];
for (const element of friendList) {
    console.log(element);
}

console.log(`================ Join() ========================`);
console.log(friendList);
const elements = friendList.join(",");
console.log(elements);
console.log(friendList.join("="));