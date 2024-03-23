/* 
Assignment 02: Only use if else statement and commit the code, File→06_grade.js

Design a grade system with function name as gradeCalculation with argument marks and no return value

a. If marks is greater than equal to 90 then log the message→ Fantastic marks: ${marks), Your grade is A+

b. If marks is greater than equal to 75 and less than 90 then log the msg → Excellent marks ${marks), your grade is A

C. If marks is greater than equal to 50 and less than 75 then log the msg → Good marks ${marks), your grade is B

d. If marks is greater than equal to 35 and less than 50 then log the msg Marks is ${marks), your grade is C, Need improvement

e. If marks is 0 or less than 0 or greater than 100 or not in valid number format ex. "Seventy" then log the msg→ Please provide the valid marks

f. Invoke function for values as shown →
 gradeCalculation (98),
  gradeCalculation(80), 
  gradeCalculation(90),
   gradeCalculation (0),
    gradeCalculation (150),
     gradeCalculation(-7),
gradeCalculation(35),
 gradeCalculation(29),
  gradeCalculation (64),
   gradeCalculation(49),
gradeCalculation("91"),
 gradeCalculation("Eighty"), 
 gradeCalculation (undefined), 
 gradeCalculation(null)14

*/

function gradeCalculation(marks) {
    if (marks == null || marks <= 0 || isNaN(+marks) || marks>100) {
        console.log(` invalid inputs: ${marks} `);
    }else{
        if (marks >= 95) {
            console.log(`Fantastic Marks: ${marks} your grade is A+`);
        } else {
            if (marks >= 75 || marks < 90 ) {
                console.log(`Excellent Marks: ${marks} your grade is A`);
            }else{
                if(marks >= 50 || marks <75){
                    console.log(`Good Marks: ${marks} your grade is B`);
                }else{
                    if (marks >=35 || marks < 50) {
                        console.log(`${marks} your grade is c , Need Improvement`);
                    }
                }
            }
        }
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eight");
gradeCalculation(undefined);
gradeCalculation(null);

