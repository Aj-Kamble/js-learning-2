console.log("                        Assignment-1                 ")

console.log(" Task-1 =============== Two Function With no Args and no Return type ==================");

function displayMsg(){
    var msg = "Hi EveryOne";
    console.log("Display Some Msg: ", msg);
}
displayMsg();

function hobbies() {
    var cooking = "Non-Veg";
    var dancing = "Bollywood";
    console.log("My Hobbies are: " , "cooking: " , cooking , "Dancing: " , dancing);
}
hobbies();

console.log("-----------------------------------------------------------------------------------------");

console.log(" Task-2 ===============  Function With  Args and no Return type ==================");
function personalDetails( firstName, lastName, collageName ){
    console.log("First Name: " , firstName);
    console.log("Last Name: " , lastName);
    console.log("Collage Name: " , collageName)
}
personalDetails("Ajay", "Kamble", "VPKBIET BARAMATI");

console.log("----------------------------------------------------------------------------------------");

console.log(" Task-3 ===============  Swap Two Value by Using Function ==================");
function swapValue(valOne, valSecond){
console.log("<================= Before Swapping =================>");
console.log("value One: " , valOne);
console.log("value Second: " , valSecond);

var temp = valOne;
valOne = valSecond;
valSecond = temp;

console.log("<================= After Swapping ====================>");
console.log("value One: " , valOne);
console.log("value Second: " , valSecond);
}
swapValue("Virat", "Anuska");
swapValue(1000, 2000);



console.log("----------------------------------------------------------------------------------------");

console.log(" Task-4 ======================= 3 Function with Arguments ===========================");

function addThreeValues(val1, val2, val3) {
    var add = val1+val2+val3;
    console.log("Addition Of Three Values: " , add);
}
addThreeValues(10.23, 600, 40);
addThreeValues("Hello", " Good", " Morning");