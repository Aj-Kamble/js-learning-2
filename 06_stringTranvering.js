
var word=  "JavaScript";
for(let index = 0; index < word.length; index++){
    var char = word.charAt(index);
    console.log(char);
}

console.log(`WAP to count character a in given Word JavaScrip`);
var word ="JavaScrip Learning in Progress";
var count= 0;
for(let i = 0; i<word.length; i++){
    var char = word.charAt(i);
    if(char == 'a'){
    count++;
       
    }
}
console.log(`No of char "a"  in given word is ${word}`,count);
