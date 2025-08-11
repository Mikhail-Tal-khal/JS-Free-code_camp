let firstName = "Khaled";
let lastName = "Hossam";
let fullName = firstName + " " + lastName;

console.log(fullName);

// This code concatenates firstName and lastName with a space in between and logs the full name to the console.
// The output will be: Khaled Hossam

let name = "Khaled Hossam";
let greeting = "Hi there"

function greet() {
    console.log(greeting + ", " + name + "!");
}
greet();

// This code defines a function greet that logs a greeting message to the console.
// The output will be: Hi there, Khaled Hossam!


let myPoints = 3;

function add3Points() {
    myPoints += 3;

}
function remove1Point() {
    myPoints -= 1;
}

add3Points();
add3Points();
add3Points();
remove1Point();
remove1Point();
console.log(myPoints);

// This code defines two functions to modify the myPoints variable.
// add3Points adds 3 points, and remove1Point removes 1 point.
// After calling these functions, myPoints will be 6.