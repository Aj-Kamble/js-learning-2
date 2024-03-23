console.log("<=============================== Step - 01 =============================>");
function squareOfWordLength(word){
  var lengthOfWord = word.length;
  console.log(`"${word}" length of given word :${lengthOfWord}`);
  
  var square = lengthOfWord ** 2;
  return square ;

}
var result1 = squareOfWordLength("JavaScript");
console.log(`"JavaScript ==>" Square of a Word is: ${result1}`);

console.log(`--------------------------------------------------------`);
var result2 = squareOfWordLength("Google Chrome");
console.log(`"Google Chrome ==>" Square of a Word is: ${result2}`);

console.log(`--------------------------------------------------------`);
var result3 = squareOfWordLength("Developer Smart");
console.log(`"Developer Smart ==>"Length and Square of a Word is: ${result3}`);

console.log("\n");
console.log("<=============================== Step - 02 =============================>");
function angularDeveloper() {
    var str = "I am Angular Developer";
    console.log(`Given String :${str}`);
    var length = str.length;
    console.log(`Length of the Given String: ${length}`);
    console.log(`-------------------------------------------------------------------------`);
    var wordLength = str.split(" ");
    var result = wordLength.length;
    console.log(`Number of word in a Given String is: ${result}`);
    console.log(`-------------------------------------------------------------------------`);
    console.log(`Result of divided by Given String Length and its Word Length: ${length / result}`);
    console.log(`Result of Multiply by Given String Length and its Word Length: ${length * result}`);
    
}
angularDeveloper();