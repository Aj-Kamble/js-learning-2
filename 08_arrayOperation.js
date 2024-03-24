var arrayNumber = [2,4,1,7,9,8];
console.log(`Original array is: ${arrayNumber}`);
console.log(`Original Array Length is ${arrayNumber.length}`);

console.log(`-----------------------------------------------------------------------`);
console.log("\n");


console.log(`Removing last elements in given array`);
console.log(`======= pop() =========`);
let removeLastElem = arrayNumber.pop();
console.log(`removed  Elements is a: `,removeLastElem);
console.log(`After removing last Elements Array is: `+arrayNumber);

console.log(`-----------------------------------------------------------------------`);
console.log("\n");

console.log(`add  elements in last index given array`);
console.log(`======= push() =========`);
let addElement = arrayNumber.push(100);
console.log(`After adding Elements in Array is: `+arrayNumber);


console.log(`-----------------------------------------------------------------------`);
console.log("\n");


console.log(`======= Add an Element in the 0th index ========`);
var arrayNumber = [2,4,1,7,9,8];
console.log(arrayNumber);
arrayNumber.unshift(44);
console.log(arrayNumber);


console.log(`-----------------------------------------------------------------------`);
console.log("\n");


console.log(`======= remove or delete an Element in the 0th index ========`);
var arrayNumber = [2,4,1,7,9,8];
console.log(arrayNumber);
arrayNumber.shift();
console.log(arrayNumber); 


console.log(`-----------------------------------------------------------------------`);
console.log("\n");


console.log(`======= Slice() ========`);
var arrayNumber = [2,4,1,7,9,8,11,22];
console.log(arrayNumber);
const subArray= arrayNumber.slice(2,6);
console.log(subArray);


console.log(`-----------------------------------------------------------------------`);
console.log("\n");


console.log(`========================= splice() ==========================`);
console.log(`====== Remove or delete elements form Middle`);
var arrayNumber = [2,4,1,7,9,8,11,22];
console.log(`Original Arrays: `, arrayNumber);
const deleteElements = arrayNumber.splice(2,3);
console.log(`Deleted Elements`,deleteElements);
console.log(`After Deleting Arrays:`,arrayNumber);


console.log(`-----------------------------------------------------------------------`);
console.log("\n");


console.log(`===================== splice() ===================`);
console.log(`====== Insert or add elements form Middle with existing element replace`);
var arrayNumber = [2,4,1,7,9,8,11,22];
console.log(`Original Arrays: `, arrayNumber);
const addElements = arrayNumber.splice(3, 1, 100);
console.log(`replaced array : `+ addElements, `with "100"`);
console.log(`After adding Arrays`,arrayNumber);


console.log(`-----------------------------------------------------------------------`);
console.log("\n");


console.log(`===================== splice() ===================`);
console.log(`====== Insert or add elements form Middle without  existing element replace`);
var arrayNumber = [2,4,1,7,9,8,11,22];
console.log(`Original Arrays: `, arrayNumber);
const addingElmts = arrayNumber.splice(5,0,500);
console.log(`adding elements without replacing existing elements`, addingElmts);
console.log(`after adding elements: `,arrayNumber);