
console.log("==============length =================");

var greets = "Good Morning";
var greetsChars = greets.length;
console.log("Total No of Greets Chars: " , greetsChars);

console.log("============== charAt() ================");
var  charAt0 = greets.charAt(0)
console.log("Characters of index 0 is: " , charAt0);

var  charAt9 = greets.charAt(9)
console.log("Characters of index 9 is: " , charAt9);


var sentence = "Zoom Video Communications, Inc. is a communications technology company headquartered in San Jose, California"
var totalLength = sentence.length;
var lastChars = sentence.charAt(totalLength-1);
console.log("Last Chars Is: " , lastChars);


console.log("============== indexOf() ==================");

var indexOfMethod = "Good Morning";
var indexOfM =  indexOfMethod.indexOf('M');
console.log("Index Of M is: " , indexOfM);


console.log("============ concat () ======================");
var firstName = "Ajay";
var lastName = "Kamble";
console.log("Use Of Concat: ", firstName.concat(lastName));

console.log("============ replace () ======================");

var greets = "Good Morning";
var replaceMethod = greets.replace("Morning" , "Afternoon");
console.log(`use case of replace method: ${replaceMethod}`);


console.log(`=================== toUpperCase () && toLowerCase==================`);
var greets = "Good Morning";
var greetsInUpperCase = greets.toUpperCase();
console.log(`${greets} is in Upper Case: ${greetsInUpperCase}`);

var greetsInLoweCase = greets.toLowerCase();
console.log(`${greets} is in Lower Case: ${greetsInLoweCase}`);


console.log(`=================== trim () ==================`);
var greets = "   Good Morning   ";
var lengthBeforeTrim = greets.length;
console.log(`${greets} it's length is: ${lengthBeforeTrim}`);

var greetAfterTrim = greets.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${greetAfterTrim} it's length is: ${lengthAfterTrim}`);


console.log(`Total Space removed is:: ${lengthBeforeTrim - lengthAfterTrim}`);


console.log(`==================== include() ====================`);
var fullName = "Ajay Kamble";
var includeMethod = fullName.includes("Ajay")
console.log(`Is String: ${fullName}  includes words or chars'Ajay': ${includeMethod}`);   // true

var includeMethod = fullName.includes("Mbl")
console.log(`Is String: ${fullName}  includes words or chars'Mbl': ${includeMethod}`);


console.log(`==================== Search () ====================`);
var greets = "Good Morning";
var result = greets.search("Morning");
console.log(`"Morning" is available at ${result}`);

var result = greets.search("r");
console.log(`"r" is available at ${result}`);



console.log(`==================== slice () ====================`);
var greets = "Good Morning"
var result = greets.slice(3, 8);
console.log(`use Case of Slice: ${result}`);


console.log(`==================== split () ====================`);
var greets = "Good Morning";
var resultValue = greets.split(" ");
console.log(resultValue);
console.log(`Total Words Are: ${resultValue}`);


//write  a function with name totalWord() with one argument
// 'I am Happy Buddy'
// 'I am leaning JavaScript'
// and its function returns the total number of words

function totalWord(sentence){
    var total_Words = sentence.split(" ");
    var word = total_Words.length
    return word;
}
var first_Sentence = totalWord("I am happy buddy");

console.log(`total words in first Sentence: ${first_Sentence}`);

var second_sentence = totalWord("I am learning JavaScript the language of internat");

console.log(`total words in Second Sentence: ${second_sentence}`);