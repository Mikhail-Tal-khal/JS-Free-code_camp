
// let count = 0;
// console.log(count);

// 1. Create two variables, myAge and humanDogRatio
let myAge = 23;
let humanDogRatio = 3;
// 2. Multiply the two together and store the result in myDogAge 
let myDogAge = humanDogRatio * myAge;
// 3. Log myDogAge to the console
console.log(myDogAge);

// Setting up the the race 🏎 🏎 🏎

function startRace() {
    for (let i = 1; i < 6; i++) {
        console.log(i);
    }
}
startRace();

// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾
console.log("finish!");
// Get ready for a new race 🏎 🏎 🏎
startRace();


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked

// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() { 
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
}


let username = "per"

// Create a variable, message, that stores the string: "You have tree new notifications"

let message = "You have tree new notifications"
let messageToUser = message + ", " + username + "!"

console.log(messageToUser);


// Create two variables, name and greeting. The name variable should store your name,
let name = "Khaled";
// and the greeting should store e.g. "Hi, my name is "
let greeting = "Hi, my name is ";

// Create a third variable, myGreeting, that contatenates the two strings
let myGreeting = greeting + name + "!";
console.log(myGreeting);

