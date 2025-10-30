// console.log("Hello, World!");
// console.log("I like TV");

// const { use } = require("react");

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

// let age = 20;
// let hasLicense = true;

// if (age >= 18) {
//     console.log("You can drive.");
//     if (hasLicense) {
//         console.log("You have a license.");
//     } else {
//         console.log("You do not have a license.");
//     }
// } else {
//     console.log("You cannot drive.");
// }

// let age = -1;

// if (age < 0) {
//     console.log("Invalid age.");
// } else if (age == 0) {
//     console.log("You are too young.");
// } else if (age < 18) {
//     console.log("You are a minor.");
// } else if (age < 100) {
//     console.log("You are too old.");
// } else {
//     console.log("You are an adult.");
// }

// const ageInput = document.getElementById("ageInput"); // age input field
// const submitBtn = document.getElementById("submitBtn");
// const result = document.getElementById("result");

// submitBtn.onclick = function() {
//     let age = Number(ageInput.value);
//     if (age < 0) {
//         result.textContent = "Invalid age.";
//     } else if (age == 0) {
//         result.textContent = "You are too young.";
//     } else if (age < 18) {
//         result.textContent = "You are a minor.";
//     } else if (age >= 100) {
//         result.textContent = "You are too old.";
//     } else {
//         result.textContent = "You are an adult.";
//     }
// }

//  checkbox example

// const checkbox = document.getElementById("Checkbox");
// const visaBtn = document.getElementById("visaBtn");
// const mastercardBtn = document.getElementById("mastercardBtn");
// const paypalBtn = document.getElementById("paypalBtn");
// const result = document.getElementById("result");
// const payment = document.getElementById("payment");
// const submit = document.getElementById("submitBtn");

// submit.onclick = function() {
//     if (checkbox.checked) {
//         result.textContent = "You are subscribed.";
//     } else {
//         result.textContent = "You are not subscribed.";
//     }

//     if (visaBtn.checked) {
//         payment.textContent = "You have selected Visa.";
//     } else if (mastercardBtn.checked) {
//         payment.textContent = "You have selected MasterCard.";
//     } else if (paypalBtn.checked) {
//         payment.textContent = "You have selected PayPal.";
//     } else {
//         payment.textContent = "No payment method selected.";
//     }
// }

// // ternary operator
// condition ? codeifTrue : codeifFalse;

// let age = 20;
// let message = age >= 18 ? "You are an adult." : "You are a minor.";
// console.log(message);

// let time = 14;
// let greeting = time < 12 ? "Good morning!" : time < 18 ? "Good afternoon!" : "Good evening!";
// console.log(greeting);

// let isStudent = true;
// let message = isStudent ? "You are a student." : "You are not a student.";
// console.log(message);

// let purchaseAmount = 120;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your discount is $${purchaseAmount - purchaseAmount * (discount / 100)}.`);

// // Switch statement

// let day = 3;

// switch (day) {
//     case 1:
//         console.log("It is Monday");
//         break;
//     case 2:
//         console.log("It is Tuesday");
//         break;
//     case 3:
//         console.log("It is Wednesday");
//         break;
//     case 4:
//         console.log("It is Thursday");
//         break;
//     case 5:
//         console.log("It is Friday");
//         break;
//     case 6:
//         console.log("It is Saturday");
//         break;
//     case 7:
//         console.log("It is Sunday");
//         break;
//     default:
//         console.log(`${day} - is not a day`);
// }

// let testScore = 20;
// let letterGrade;

// switch (true) {
//     case (testScore === 100):
//         letterGrade = "A+";
//         break;
//     case (testScore >= 90):
//         letterGrade = "A";
//         break;
//     case (testScore >= 80):
//         letterGrade = "B";
//         break;  
//     case (testScore >= 70):
//         letterGrade = "C";
//         break;
//     case (testScore >= 60):
//         letterGrade = "D";
//         break;
//     case (testScore < 60):
//         letterGrade = "F";
//         break;
//     default:
//         letterGrade = "Invalid score";  
// }
// console.log(`Your letter grade is ${letterGrade}.`);

// String methods and properties

// // let userName = "MixaMega";

// console.log(userName.charAt(0));   // first character of the string
// console.log(userName.lastIndexOf("a"));   // last index of "a" (7)
// console.log(userName.length);   // length of the string (8)
// console.log(userName.toUpperCase());   // convert string to uppercase (MIXAMEGA)
// console.log(userName.toLowerCase());   // convert string to lowercase (mixamega)
// console.log(userName.includes("world"));   // check if string includes "world" (false)
// console.log(userName.replace("Mega", " The Great"));   // replace "Mega" with "The Great" (Mixa The Great)
// console.log(userName.slice(0, 4));   // get substring from index 0 to 4 (Mixa)
// console.log(userName.split("e"));   // split string at each "e" (["MixaM", "ga"])
// console.log(userName.trim());   // remove whitespace from both ends of the string (MixaMega)
// console.log(userName.repeat(2));   // repeat the string twice (MixaMegaMixaMega)
// console.log(userName.concat(" "));   // concatenate a space to the string (MixaMega )
// console.log(userName.charCodeAt(0));   // get the Unicode of the character at index 0 (77)
// console.log(userName.codePointAt(1));   // get the Unicode of the character at index 1 (105)
// console.log(userName.padStart(10, 'X'));   // create string from Unicode values (XXMixaMega)
// console.log(userName.startsWith("Mixa"));   // check if string starts with "Mixa" (true)

// let phoneNumber = "123-456-7890";
// console.log(phoneNumber.replaceAll("-", "") );  // remove all dashes from the phone number

// string slicking

// let firstName = fullName.slice(0, 4);
// let lastName = fullName.slice(4, 9);

// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// let firstName = fullName.slice(0, fullName.indexOf(' '));
// let lastName = fullName.slice(fullName.indexOf(' ') + 1);

// console.log(firstName);
// console.log(lastName);

// const email = "MishaBul@gmail.com";

// let Name = email.slice(0, email.indexOf('@'));
// let Adress = email.slice(email.indexOf('@') + 1);

// console.log(Adress);
// console.log(Name);

// // NO Method chaining

// let username = window.prompt('Enter your username:');

// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
// let Charts = username.slice(1);
// Charts = Charts.toLowerCase()
// username = letter + Charts

// console.log(username);

// // Method chaining

// let username = window.prompt('Enter your username:');
// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

// console.log(username);

// Logical operators 
// || OR
// && AND
// ! NOT

// const temp = 20;

// if(temp > 0 && temp <= 30){
//     console.log("The weather is good");
// }
// else{
//     console.log("The weather is bad");
// }

// // const isSunny = false;

// if(!isSunny){
//     console.log('It is cloudy');
// }
// else{
//     console.log('It is sunny');
// }

// = assigment opertator
// ==
// ===
// !=
// !==

// const PI = 3.14;

// if(PI == '3.14'){
//     console.log("That is PI");
// }
// else{
//     console.log("That is not PI");
// }
