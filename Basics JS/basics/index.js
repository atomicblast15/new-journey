console.log("I love Pizza");
console.log("It's really good!");

// window.alert("I REALLY LOVE PIZZA");

// comment
/*
 - multiline comment  - same as css 
*/

// variables
let age;
age = 26; //numbers
let firstName = "Michael"; //string
let student = true; //boolean

// console.log(age);
// console.log(firstName);
// console.log(student);
console.log(age, firstName, student);
console.log("hello ", firstName);
console.log("You are ", age, " years old");
console.log("Enrolled", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are  " + age + "years old";
document.getElementById("p3").innerHTML = "Enrolled " + student;
console.log("end");
