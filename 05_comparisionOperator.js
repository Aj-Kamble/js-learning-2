console.log("============== Comparison == and === Operator =========================");
var n1 = 10;
var n2 = "10";

console.log(typeof n1);   // number
console.log(typeof n2);     // string

console.log(`Double Equal == operator :${n1 == n2}`); //true
// by using ==  we have compare two values without considering its datatype it check only value

console.log(`Strict Equal === Operator :${n1 === n2}`);  //False
// by  using  === we have to compare two value with its value and also its dataType 


console.log("========== Not Equal != , < , <= Operator =========================");
var n3 = 20;
var n4 = 30;
console.log(`Not Equal is: ${n3 != n4}`);

console.log("========== < , <= Operator =========================");
var value1 = 20;
var value2 = 20;
console.log(`less than :${value1 < value2}`); // false
console.log(`less than equal :${value1 <= value2}`)


console.log("================== >, >= Operator =====================");

console.log(`Greater than > operator ${50>55}`);   // true

console.log(`Greater than > operator ${56>55}`);   // true

console.log(`Greater than > operator ${56>56}`);  //false

console.log(`Greater than equal >= operator ${56>=56}`);  // true

