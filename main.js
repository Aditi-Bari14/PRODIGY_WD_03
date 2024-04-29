const cells = document.querySelectorAll(".cell")
const message = document.getElementById("message")
const resetButton = document.getElementById("reset")
let currentPlayer = "X"
let gameBoard = ["", "", "", "", "", "", "", "", ""]
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (gameBoard[index] === "" && !message.textContent) {
      gameBoard[index] = currentPlayer
      cell.textContent = currentPlayer
      checkForWin()
      currentPlayer = currentPlayer === "X" ? "O" : "X"
    }
  })
})

resetButton.addEventListener("click", () => {
  gameBoard = ["", "", "", "", "", "", "", "", ""]
  cells.forEach((cell) => {
    cell.textContent = ""
  })
  message.textContent = ""
  currentPlayer = "X"
})

function checkForWin() {
  for (let combo of winningCombos) {
    const [a, b, c] = combo
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      message.textContent = 'Player ${gameBoard[a]} wins!'
      return
    }
  }
  if (!gameBoard.includes("")) {
    message.textContent = "It's a draw!"
  }
}