const fruits_seasonal = ["Banana", "Orange", "Apple",  "Mango", "water melon"];
console.log(`All Fruits in Arrays:` ,fruits_seasonal);
console.log(`-----------------------------------------------------------------------------------------------`);

console.log(`=========== First and Last Elements in Array ================`);
const firstElements = fruits_seasonal[0];
const lastElements = fruits_seasonal[fruits_seasonal.length - 1];
    console.log(`First Elements in array is :`, firstElements);
    console.log("Last Elements in array is: ", lastElements);
    console.log(`---------------------------------------------------------------------------------------------`);

console.log(`=========== Add the Element 'Papaya' before 'Banana' ================`);
console.log(`before adding papaya before banana :`, fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(`after adding papaya before banana : `, fruits_seasonal);
console.log(`------------------------------------------------------------------------------------------------`);

console.log(`=========== Remove 'Mango' from Array ================`)
console.log(`Before removing Mongo from Array:`, fruits_seasonal);
fruits_seasonal.splice(4,1,);
console.log(`after removing Mongo from Array:`,fruits_seasonal);
console.log(`--------------------------------------------------------------------------------------------------`);

console.log(`=========== inserting or add 'PineApple at the last Position ================`)
console.log(`Before adding "PineApple" in Array:`, fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(`after adding "PineApple" in Array:`, fruits_seasonal);
console.log(`----------------------------------------------------------------------------------------------------`);

console.log(`=========== inserting or add  'Dragon' fruit before 'water melon ================`)
console.log(`Before adding or Insertion 'Dragon' in Array:`,fruits_seasonal);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(`after adding or Insertion 'Dragon' in Array:`,fruits_seasonal);
console.log(`--------------------------------------- ---------------------------------------------------------------`);

console.log(`=========== Replace 'Orange' with 'kiwi ================`)
console.log(`Before Replace 'Orange' with 'kiwi  : `, fruits_seasonal)
fruits_seasonal.splice(2,1,"Kiwi")
console.log(`after Replace 'Orange' with 'kiwi  : `, fruits_seasonal)
console.log(`------------------------------------------------------------------------------------------------`);

console.log(`=========== Elements Starting from index 1 to 4 ================`)
console.log(fruits_seasonal.slice(1,4));
console.log(`-----------------------------------------------------------------------------------------------`);

console.log(`=========== Last 3 Elements in Array ================`)
console.log(fruits_seasonal);
console.log((fruits_seasonal.slice(fruits_seasonal.length-3)));