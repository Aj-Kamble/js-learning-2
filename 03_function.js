//Function With no Parameter or no return Type

function show(){
  console.log("Insite Show Function.");
}
show();


//Function With  Parameter or no return Type
function add (n1, n2, n3){
console.log("Arguments", n1, n2, n3);
var result = n1+n2+n3;
console.log("Addition Of three number: " + result);
}
add(3,6,7);
add(23.44, 60, 46737);
add(2, 4);
add(2,56, 8, 90);
add("hi", "good", "bye");


//Function With  Parameter or  return Type
function subtract (num1 , num2){
 console.log("==========Subtraction=============");
 console.log("Arguments: " , num1, num2);
 var result = num1 - num2;
 return result;
}

var total = subtract(6, 4);
console.log("Subtraction:", total);

var total = subtract(10, 5);
console.log("Subtraction:", total);


