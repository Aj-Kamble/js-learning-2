// Find the total number of vowels in given String

const word = "I am Vary good IT Developer";
const vowels = "aeiou";
let count = 0;

for (let index = 0; index < word.length; index++) {
    let char = word.charAt(index);
    let lowerCase = char.toLowerCase();
        if(vowels.includes(lowerCase)){
            count++;
        }
    }
console.log(`Total No Of vowels is in "${word}"  is: ${count}`);

console.log(`=========================================================`);

//WAP to find out sum of cube of 1 to 5 numbers

console.log(`sum of cube of 1 to 5 numbers`);
let sum = 0;
for (let index = 1; index <= 5; index++) {
     sum = sum + index * index * index;
}
console.log(`Sum of given cube is: ${sum}`);

console.log(`=========================================================`);

// WAP to find odd and even position in given string

function oddPositionedChar(sentence){
    console.log(`odd position of given string is "Hard work always pay back" chars is:`);
    for (let index = 0; index < sentence.length; index++) {
        const element = sentence[index];
        if(index % 2 != 0 && element != " "){
            
            console.log(`${element}`);
        }
        
        
    }

}

oddPositionedChar("Hard work always pay back");



console.log(`=========================================================`);

// WAP to find odd and even position in given string

function oddPositionedChar(sentence){
    console.log(`odd position of given string is "soon I will be UI IT Champ" chars is:`);
    for (let index = 0; index < sentence.length; index++) {
        const element = sentence[index];
        if(index % 2 != 0 && element != " "){
            
            console.log(`${element}`);
        }
        
        
    }

}

oddPositionedChar("soon I will be UI IT Champ");