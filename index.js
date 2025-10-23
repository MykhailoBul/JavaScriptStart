// console.log("Hello, World!");
// console.log("I like TV");

// window.alert('This is an aleert')   // shows an alert box
// window.alert('I like TV')

// //  Variables
// let fullName = "Michael";
// let age = 25;
// let isStudent = false;

// document.getElementById("p1").textContent = `Your name is ${fullName}`;
// document.getElementById("p2").textContent = age;    // Print age using template string
// document.getElementById("p3").textContent = isStudent;  // Print isStudent using template string

// console.log(fullName);
// console.log(`You are ${age} years old`);     // Print age using template string
// console.log(window)      // Print the window object
// console.log(typeof isStudent);   // Print the type of isStudent variable

// /*
//     This is a comment
// */

// //  Arithmetic operations
// let students = 30;

// students = students + 1;     // increment students by 1
// students = students - 1;     // decrement students by 1
// students = students * 2;     // double the number of students
// students = students / 2;     // halve the number of students
// students = students ** 2;    // raise students to the power of 2
// students = students % 2;     // get the remainder when students is divided by 2
// let extraStudents = students % 7;    // get the remainder when students is divided by 7

// students += 1;   // increment students by 1
// students -= 1;   // decrement students by 1
// students *= 2;   // double the number of students
// students /= 2;   // halve the number of students
// students **= 2;  // raise students to the power of 2
// students %= 2;   // get the remainder when students is divided by 2

// students++;   // increment students by 1
// students--;   // decrement students by 1

// let result = 3 + 4 * 2;   // result is 11 due to operator precedence
// console.log(result);     // Print the result

//   How to accept user input

// let username;
// username = window.prompt("What is your name?");   // prompt user for their name (input)
// console.log(username);     // Print the input name
// let username;
// document.getElementById("submitBtn").onclick = function() {     // when the button is clicked, do the following
//     username = document.getElementById("myText").value;        // get the value from the input field
//     document.getElementById("myH1").textContent = `Welcome, ${username}`;   // set the text of the h1 to "Welcome, [username]"
// };

//  Type conversion

// let age = window.prompt("How old are you?");   // prompt user for their age (input)
// age = Number(age);   // convert the input string to a number
// // age = parseInt(age);   // convert the input string to an integer
// // age = parseFloat(age);   // convert the input string to a floating point number
// // age = String(age);    // convert age to a string
// // age = Boolean(age);   // convert age to a boolean (0 is false, any other number is true)
// age += 1;
// console.log(age);   

// let x = "pizza";
// let y = "pizza";
// let z = 0;

// x = Number(x);   // convert x to a number (NaN)
// y = String(y);   // convert y to a string ("pizza")
// z = Boolean(z);  // convert z to a boolean (false)

// console.log(x, typeof x);   // Print x (NaN)
// console.log(y, typeof y);   // Print y (string)
// console.log(z, typeof z);   // Print z (boolean)

//  Constant variable
// const PI = 3.14;   // pi is a constant variable
// let radius;
// let circumference;

// document.getElementById("submitBtn").onclick = function(){
//     radius = document.getElementById("myText").value;   // get the radius from the input field
//     radius = Number(radius);   // convert the input string to a number
//     circumference = 2 * PI * radius;   // calculate the circumference
//     document.getElementById("H3").textContent = circumference + "cm";   // display the circumference
// };

//  Math object

// let x = 3.14;
// let y = -3;
// let z = 16;

// z = Math.sqrt(x);   // square root of z
// z = Math.floor(x);   // round down z
// z = Math.ceil(x);    // round up z
// z = Math.round(x);   // round z to the nearest integer
// z = Math.trunc(x);   // remove decimal part of z
// z = Math.pow(x, y);   // z to the power of 2
// z = Math.log(x);   // minimum value
// z = Math.sin(x);   // sine of z
// z = Math.cos(x);   // cosine of z
// z = Math.tan(x);   // tangent of z
// z = Math.abs(y);   // absolute value of y
// z = Math.sign(x);   // sign of z

// let max = Math.max(x, y, z);   // maximum value
// let min = Math.min(x, y, z);   // minimum value

// console.log(z);   // Print z

//  Generating random numbers
// const min = 50;   // minimum value
// const max = 100;  // maximum value

// let randomNumber = Math.random();   // generate a random number between 0 and 1
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;   // generate a random number between min and max (inclusive)

// console.log(randomNum);

//  Random number generator for dice roll
// const myBtn = document.getElementById("myBtn");
// const Label1 = document.getElementById("Label1");
// const Label2 = document.getElementById("Label2");
// const Label3 = document.getElementById("Label3");
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myBtn.onclick = function() {
//     randomNum1 = Math.floor(Math.random() * max) + min; 
//     randomNum2 = Math.floor(Math.random() * max) + min; 
//     randomNum3 = Math.floor(Math.random() * max) + min;   
//     Label1.textContent = randomNum1;   
//     Label2.textContent = randomNum2; 
//     Label3.textContent = randomNum3; 
// }

// If statement
    // let age = 18;

    // if (age >= 18) {
    //     console.log("You are an adult.");
    // } else {
    //     console.log("You are a minor.");
    // }

// let time = 10;
// if (time < 12) {
//     console.log("Good morning!");
// } else if (time < 18) {
//     console.log("Good afternoon!");
// } else {
//     console.log("Good evening!");
// }

// let isStudent = false;
// if (isStudent) {
//     console.log("You are a student.");
// } else {
//     console.log("You are not a student.");
// }
let age = 20;
let hasLicense = false;

if (age >= 18) {
    console.log("You can drive.");
    if (hasLicense) {
        console.log("You have a license.");
    } else {
        console.log("You do not have a license.");
    }
} else {
    console.log("You cannot drive.");
}