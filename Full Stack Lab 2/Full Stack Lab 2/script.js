/* =========================================
   1. JAVASCRIPT STATEMENT
========================================= */

// JavaScript statement

let message =
    "Student Academic Management System is working correctly";

document.getElementById("syntaxOutput").textContent =
    message;


/* =========================================
   2. VARIABLES
========================================= */

var studentName = "Muhammad Haseeb";

let semester = 3;

const university = "Air University";


document.getElementById("variableOutput").innerHTML =

    "<strong>Student Name:</strong> " +
    studentName +

    "<br><strong>Semester:</strong> " +
    semester +

    "<br><strong>University:</strong> " +
    university;


/* =========================================
   3. HOISTING
========================================= */

console.log(hoistedVariable);

var hoistedVariable = "var is hoisted";


/*
   let is also hoisted internally,
   but it cannot be accessed before
   its declaration.

   The following code would produce
   a ReferenceError:

   console.log(letVariable);
   let letVariable = 10;
*/


document.getElementById("hoistingOutput").innerHTML =

    "Using var: <strong>" +
    hoistedVariable +
    "</strong>" +

    "<br><br>" +

    "The var declaration is hoisted, " +
    "so accessing it before assignment gives undefined." +

    "<br><br>" +

    "let and const cannot be accessed before " +
    "their declaration because of the Temporal Dead Zone.";


/* =========================================
   4. STUDENT OBJECT
========================================= */

let student = {

    name: "Muhammad Haseeb",

    registrationNumber: "BSCS-2024-101",

    program: "BS Computer Science",

    semester: 3,

    cgpa: 3.65,

    attendance: 92,

    assignmentMarks: 18,

    midtermMarks: 24,

    finalExamMarks: 45
};


document.getElementById("objectOutput").innerHTML =

    "<strong>Name:</strong> " +
    student.name +

    "<br><strong>Registration No:</strong> " +
    student.registrationNumber +

    "<br><strong>Program:</strong> " +
    student.program +

    "<br><strong>Semester:</strong> " +
    student.semester +

    "<br><strong>CGPA:</strong> " +
    student.cgpa +

    "<br><strong>Attendance:</strong> " +
    student.attendance + "%";


/* =========================================
   5. ACADEMIC CALCULATION
========================================= */

let assignmentMaximum = 20;

let midtermMaximum = 30;

let finalExamMaximum = 50;


let maximumMarks =
    assignmentMaximum +
    midtermMaximum +
    finalExamMaximum;


let totalMarks =
    student.assignmentMarks +
    student.midtermMarks +
    student.finalExamMarks;


let percentage =
    (totalMarks / maximumMarks) * 100;


let remainingMarks =
    maximumMarks - totalMarks;


let marksRemainder =
    totalMarks % 10;


/* =========================================
   6. GRADE CALCULATION
========================================= */

let grade;

if (percentage >= 80) {

    grade = "A";

}
else if (percentage >= 70) {

    grade = "B";

}
else if (percentage >= 60) {

    grade = "C";

}
else if (percentage >= 50) {

    grade = "D";

}
else {

    grade = "F";

}


/* =========================================
   7. PASS / FAIL
========================================= */

let passStatus;

if (percentage >= 50) {

    passStatus = "Passed";

}
else {

    passStatus = "Failed";

}


/* =========================================
   8. SCHOLARSHIP ELIGIBILITY
========================================= */

let scholarshipEligible =

    student.cgpa >= 3.0 &&
    student.attendance >= 80 &&
    percentage >= 70;


let eligibilityMessage;

if (scholarshipEligible) {

    eligibilityMessage = "Eligible";

}
else {

    eligibilityMessage = "Not Eligible";

}


/* =========================================
   9. SCHOLARSHIP CATEGORY
========================================= */

let scholarshipStatus;

if (

    student.cgpa >= 3.7 &&
    student.attendance >= 90 &&
    percentage >= 85

) {

    scholarshipStatus = "Gold Scholarship";

}
else if (

    student.cgpa >= 3.3 &&
    student.attendance >= 85 &&
    percentage >= 75

) {

    scholarshipStatus = "Silver Scholarship";

}
else {

    scholarshipStatus = "Not Eligible";

}


/* =========================================
   10. ACADEMIC WARNING SYSTEM
========================================= */

let academicStatus;

if (

    percentage < 50 ||
    student.cgpa < 2.0 ||
    student.attendance < 60

) {

    academicStatus = "Critical";

}
else if (

    percentage < 60 ||
    student.cgpa < 2.5 ||
    student.attendance < 75

) {

    academicStatus = "Academic Warning";

}
else {

    academicStatus = "Good Standing";

}


/* =========================================
   11. OPERATORS
========================================= */

// Arithmetic operators

let addition =
    student.assignmentMarks +
    student.midtermMarks;


let subtraction =
    maximumMarks -
    totalMarks;


let multiplication =
    student.assignmentMarks * 2;


let division =
    totalMarks / maximumMarks;


let remainder =
    totalMarks % 10;


// Comparison operators

let greaterThanThreeCgpa =
    student.cgpa > 3.0;


let highPercentage =
    percentage >= 80;


let lowAttendance =
    student.attendance < 75;


let attendanceWithinLimit =
    student.attendance <= 100;


let passingPercentage =
    percentage >= 50;


let gradeA =
    grade === "A";


let notFailed =
    grade !== "F";


// Logical operators

let logicalAnd =

    student.cgpa >= 3.0 &&
    student.attendance >= 80;


let logicalOr =

    student.attendance < 75 ||
    percentage < 50;


let logicalNot =
    !scholarshipEligible;


/* =========================================
   12. DISPLAY OPERATOR RESULTS
========================================= */

document.getElementById("operatorOutput").innerHTML =

    "<strong>Arithmetic Operators</strong>" +

    "<br>Assignment + Midterm = " +
    addition +

    "<br>Maximum Marks - Total Marks = " +
    subtraction +

    "<br>Assignment × 2 = " +
    multiplication +

    "<br>Total Marks / Maximum Marks = " +
    division.toFixed(2) +

    "<br>Total Marks % 10 = " +
    remainder +

    "<br><br>" +

    "<strong>Comparison Operators</strong>" +

    "<br>CGPA > 3.0 = " +
    greaterThanThreeCgpa +

    "<br>Percentage >= 80 = " +
    highPercentage +

    "<br>Attendance < 75 = " +
    lowAttendance +

    "<br>Attendance <= 100 = " +
    attendanceWithinLimit +

    "<br>Percentage >= 50 = " +
    passingPercentage +

    "<br>Grade === A = " +
    gradeA +

    "<br>Grade !== F = " +
    notFailed +

    "<br><br>" +

    "<strong>Logical Operators</strong>" +

    "<br>CGPA >= 3.0 && Attendance >= 80 = " +
    logicalAnd +

    "<br>Attendance < 75 || Percentage < 50 = " +
    logicalOr +

    "<br>!Scholarship Eligible = " +
    logicalNot;


/* =========================================
   13. FINAL ACADEMIC REPORT
========================================= */

document.getElementById("resultOutput").innerHTML =

    "<h3>STUDENT ACADEMIC REPORT</h3>" +

    "<hr>" +

    "<strong>Student Information</strong>" +

    "<br>Student Name: " +
    student.name +

    "<br>Registration No: " +
    student.registrationNumber +

    "<br>Program: " +
    student.program +

    "<br>Semester: " +
    student.semester +

    "<br><br>" +

    "<strong>Academic Information</strong>" +

    "<br>CGPA: " +
    student.cgpa +

    "<br>Attendance: " +
    student.attendance + "%" +

    "<br><br>" +

    "<strong>Academic Marks</strong>" +

    "<br>Assignment Marks: " +
    student.assignmentMarks +
    " / " +
    assignmentMaximum +

    "<br>Midterm Marks: " +
    student.midtermMarks +
    " / " +
    midtermMaximum +

    "<br>Final Exam Marks: " +
    student.finalExamMarks +
    " / " +
    finalExamMaximum +

    "<br><br>" +

    "<strong>Academic Result</strong>" +

    "<br>Total Marks: " +
    totalMarks +
    " / " +
    maximumMarks +

    "<br>Percentage: " +
    percentage.toFixed(2) + "%" +

    "<br>Grade: " +
    grade +

    "<br>Pass/Fail: " +
    passStatus +

    "<br>Scholarship Eligibility: " +
    eligibilityMessage +

    "<br>Scholarship Status: " +
    scholarshipStatus +

    "<br>Academic Status: " +
    academicStatus;


/* =========================================
   14. CONSOLE OUTPUT
========================================= */

console.log("Student Name:", student.name);

console.log("Total Marks:", totalMarks);

console.log("Percentage:", percentage);

console.log("Grade:", grade);

console.log("Pass/Fail:", passStatus);

console.log("Scholarship:", scholarshipStatus);

console.log("Academic Status:", academicStatus);


/* =========================================
   15. SCHOLARSHIP CHECK USING !
========================================= */

if (!scholarshipEligible) {

    console.log(
        "Student does not meet all basic scholarship requirements."
    );

}
else {

    console.log(
        "Student meets the basic scholarship requirements."
    );
}