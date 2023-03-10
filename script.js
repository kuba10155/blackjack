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
  chips: 150
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

let startBtn = document.getElementById("start-btn")
let cardBtn = document.getElementById("card-btn")
let stopBtn = document.getElementById("stop-btn")

startBtn.addEventListener("click", startGame)
cardBtn.addEventListener("click", newCard)

function startGame() {
  clear()
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards.push(firstCard, secondCard)
  sum = firstCard + secondCard
  playerEl.textContent = player.name + ": $" + player.chips
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
  startBtn.disabled = true
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
    player.chips += 50
    startBtn.disabled = false
  } else {
    message = "You're out of the game!"
    isAlive = false
    player.chips -= 10
    startBtn.disabled = false
  }
  messageEl.textContent = message;
}

function newCard() {
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
