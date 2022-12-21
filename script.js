let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector(".sum-el") to samo co na gorze
let cardsEl = document.getElementById("cards-el")
let player = {
  name: "Per",
  chips: 145
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


function startGame() {
  clear()
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards.push(firstCard, secondCard)
  sum = firstCard + secondCard
  renderGame()
}

function getRandomCard() {
  let randomCard = Math.floor( Math.random() * 13 ) + 1
  if (randomCard === 1) {
    return 11
  } else if (randomCard > 10) {
    return 10
  } else {
    return randomCard
  }
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
     cardsEl.textContent += cards[i] + " "
  }
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You're out of the game!"
    isAlive = false
  }
  messageEl.textContent = message;
}

function newCard() {
  console.log("Drawing a new card from the deck")
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}

function clear() {
  cards = []
  sum = 0
}
