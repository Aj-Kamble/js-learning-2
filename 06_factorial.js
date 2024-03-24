
//using If "Recursive method"
function findFactorial(num){
    if(num === 0 || num ===1){
        return 1;
    }else{
        return num*findFactorial(num-1);
    }
}
var result = findFactorial(5);
console.log(result);


//Using For Loop
function factFind(number) {
    let fact = 1;
    for(let i = number; i>=1; i--){
        fact = fact * i;
    }
    console.log(`Factorial of ${number} is: ${fact}`);
}

factFind(5);

