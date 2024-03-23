// WA Function Expression with one argument for values "JavaScript", "I am Hero"

// Inside the FE check wether given word is even or odd length

var evenOdd = function (word){
    var result = word.length;
    var finalResult = result%2 == 0 ? "Even" : "Odd";
    console.log(`Given Word is: ${word} and its length is: ${result} and this length is a: ${finalResult}`);
}
evenOdd("JavaScript");
evenOdd("I am Hero");


console.log("===============================================");
// FE to check whether number is multiple of 3 or not
var multiple = function(num){
    var result = num%3==0 ? "Yes" : "No";
    console.log(`Given number ${num} is multiple of 3 ==> ${result}`);
}
multiple(9);
multiple(11);