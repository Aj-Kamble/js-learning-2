
var marriageCheck = function(age, candidateName){
 if(age>=21){
    console.log(`Eligible for marriade: ${age}  Name: ${candidateName}`);
 }
 console.log(`Marriage Eligibility check done`);
}
marriageCheck(22 , "bill")
marriageCheck(21, "stew");
marriageCheck(20, "Elon");






console.log(`=================================================`);










var marriageEligibility = function(age, candidateName, gender){
    if(age>=21 && gender == "Male"){
       console.log(`Eligible for marriade: ${age}  Name: ${candidateName}`);
    }
    console.log(`Marriage Eligibility check done`);
   }
   marriageEligibility(23 , "bill" , "Male");
   marriageEligibility(21, "Jenny" , "Female");
   marriageEligibility(20, "Elon", "Male");