

let arrayElements = [2,4,1,7,9,8];
console.log(arrayElements);

console.log(`======== Total Elements or Length ===========`);
console.log(`${arrayElements.length}`);

console.log(`Accessing specific array elements`);
let element0 = arrayElements[0];
console.log(`0th Element is ${element0}`);
console.log(`3rd index element in the Array is: ${arrayElements[3]}`)

console.log(`======== Access last index number in arrays ========`);
console.log(arrayElements[5]);

console.log(`Accessing last elements from array using length property`);
const len= arrayElements.length;
console.log(`${arrayElements[len-1]}`);



console.log(`======== includes()  =======`);
console.log(`${arrayElements.includes(7)}`);
console.log(`${arrayElements.includes(100)}`);

console.log(`======== Update Array  =======`);
arrayElements[2] = 200;
console.log(arrayElements);




console.log(`======== indexOf()  =======`);
console.log(arrayElements.indexOf(7));
console.log(arrayElements.indexOf(100));

console.log(`======== Traversing an Array  =======`);
const arrayNums = [2,4,1,7,9,8];
for (let index = 0; index < arrayNums.length; index++) {
    const element = arrayNums[index];
    console.log(element);
    
}

console.log(`======== Traversing an Array in reverse Order =======`);
for (let index = arrayNums.length-1; index >=0; index--) {
    let element = arrayNums[index];
    console.log(element);
    
}