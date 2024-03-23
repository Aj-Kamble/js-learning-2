//Find the greatest number amongst two number
console.log(`\t\t<==== Step 01 =====> `);
console.log(`----------------- Greater Number --------------------`);

function greaterNumber(num1, num2){
    var result = num1 >= num2 ? `"${num1}" is greater than ${num2}` : `"${num2}" is greater than ${num1}` ;
    console.log(result);
}
greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("\n");

console.log(`\t\t<==== Step 02 =====> `);
console.log(`----------------- Even and Odd Number --------------------`);

function isEvenOrOddNum(evenOdd){
    var result = evenOdd % 2 == 0 ?  `"Even":--->True` : `"Odd":--->false`;
    return result;
}
var num1 = isEvenOrOddNum(345);
console.log(`"345" is a :${num1}`);

var num2 = isEvenOrOddNum(23456);
console.log(`"246" is a :${num2}`);

var num3 = isEvenOrOddNum(3);
console.log(`"3" is a   :${num3}`);

var num4 = isEvenOrOddNum(4);
console.log(`"4" is a   :${num4}`);

console.log("\n");

console.log(`\t\t\t<==== Step 03 =====> `);
console.log(`----------- Find Given Word Length is Even or Odd Number ----------`);

function wordLength(words){
    var word = words.length;
    console.log(`Length Of Word is: ${word}`);
    var result = word % 2 == 0 ? "Even" : "Odd";
    return result;
}
var result1 = wordLength("JavaScript");
console.log(`Given Word Is "JavaScript" : and it is :${result1} number`);

var result2 = wordLength("Developer");
console.log(`Given Word Is "Developer" : and it is :${result2} number`);

var result3 = wordLength("Google");
console.log(`Given Word Is "Google" : and it is :${result3} number`);


