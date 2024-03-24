console.log(`====== Even index elements =======`);
const arraysNumber = [2,4,1,7,9,8];
console.log(arraysNumber);

for (let index = 0; index < arraysNumber.length; index++) {
    if (index % 2 == 0) {
        const element = arraysNumber[index];
        console.log(element);
    }   
}

console.log(`-------------------------------------------------------------------`);
console.log("\n");

console.log(`====== odd index elements =======`);
const arrayNumber = [2,4,1,7,9,8];
console.log(arrayNumber);
for (let index = 0; index < arrayNumber.length; index++) {
    if (index % 2 == 1) {
        const element = arrayNumber[index];
        console.log(element);
    }
}

console.log(`-------------------------------------------------------------------`);
console.log("\n");

console.log(`====== Sum of Given Array =======`);
const sumOfArrayNumber = [2,4,1,7,9,8];
console.log(sumOfArrayNumber);
let sum = 0;
for (let index = 0; index < sumOfArrayNumber.length; index++) {
        const element = sumOfArrayNumber[index];
        sum = sum + element;
}
console.log(`Sum of Given Array is: `, sum);