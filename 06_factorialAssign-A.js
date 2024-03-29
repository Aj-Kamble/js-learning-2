
function findFactorial(fact){
    if( fact === 1 ){
       return 1;
    }else if(fact === 0 ||fact === null || fact === undefined){
        return "invalid input";
    }else{
        return  fact * findFactorial(fact - 1);
    }
}
const result = findFactorial(5);
const result1 = findFactorial(3);
const result2 = findFactorial(null);
const result3 = findFactorial(8);
const result4 = findFactorial(undefined);
const result5 = findFactorial(9);
const result6 = findFactorial(0);
console.log(`Factorial of  5 is ${result}`);
console.log(`Factorial of  3 is ${result1}`);
console.log(`Factorial of  null is ${result2}`);
console.log(`Factorial of  8 is ${result3}`);
console.log(`Factorial of  undefined is ${result4}`);
console.log(`Factorial of  9 is ${result5}`);
console.log(`Factorial of  0 is ${result6}`);