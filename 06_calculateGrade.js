//Grade Calculator

//Pass or fail ==> marks <= 34 Fail. else Pass.

//Marks greater than equal 35 and less than 55 ==> grade c
//Marks greater than equal 55 and less than 75 ==> grade B
//Marks greater than equal 75 and less than 100 ==>grade A



var marks = 220;
if (marks < 34) {
    console.log(`Failed: Mark = ${marks}`);
}else{
   
    if (marks >= 35 && marks < 55) {
        console.log( `congratulation. Passed, Mark = ${marks} Grade C`);
    }else {
        if(marks >= 55 && marks < 75){
            console.log(` congratulation. Passed, Mark = ${marks} Grade B`);
        } else {
            if (marks >= 75 && marks < 100) {
                console.log(`congratulation. Passed, Mark = ${marks} Grade A`);
            } else {
                console.log(`Invalid Marks Entered`);
            }
        }
    }
}