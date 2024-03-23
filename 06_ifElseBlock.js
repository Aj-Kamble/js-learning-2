

var person = "Raman";
var age = 19;

if(age >= 18){
    console.log(`${person} your  eligible for vote because your age is: ${age}`);
}else{
    console.log(`${person} your not eligible for vote becoase your age under ${age}`);
}

console.log(`==============================================================================`);

function vote(person, age){
    if(age >= 18){
        console.log(`${person} your  eligible for vote because your age is: ${age}`);
    }else{
        console.log(`${person} your not eligible for vote becoase your age under ${age}`);
    }
    
}

vote("jenny", 22);
vote("Bill", 14);
vote("Elon", 18);