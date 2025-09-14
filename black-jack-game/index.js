

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

let age = 12

if (age < 21) {
    console.log("You can not enter the club!");
} else {
    console.log("Welcome!");
}
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"


// Check if the person is elegible for a birthday card from the King! (100)

let ageL = 100
if (ageL < 100) {
    console.log("Not elegible");
} else if (ageL === 100) {
    console.log("Here is your birthday card from the King!");
} else {
    console.log("Not elegible, you have already gotten one");
}
// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"



let firstCard = 10
let secondCard = 11
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

// Create a function called startGame() that calls renderGame()
function startGame() {
    renderGame()
}

function renderGame() {

    // Render the sum on the page using this format -> "Sum: 14"
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: " + cards[0] + "  " + cards[1]
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂";
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳";
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭";
        isAlive = false
    }

    messageEl.textContent = message
}

// Create a new function called newCard() that logs out "Drawing a new card from the deck!" when called
// Inside the function, create a card variable, and hard code its value to a number (2-11)
// Add the new card to the sum variable
// Call startGame()
function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 8
    sum += card
    cards.push(card)
    renderGame()
}