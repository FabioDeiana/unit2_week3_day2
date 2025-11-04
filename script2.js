const counterDisplay = document.getElementById("counter")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn")

let counter = 0
let intervalId = null
let isRunning = false

function updateDisplay() {
  counterDisplay.textContent = counter
}

function saveCounter() {
  sessionStorage.setItem("counter", counter)
  sessionStorage.setItem("isRunning", isRunning)
}

function loadCounter() {
  const savedCounter = sessionStorage.getItem("counter")
  const savedIsRunning = sessionStorage.getItem("isRunning")

  if (savedCounter) {
    counter = parseInt(savedCounter)
    updateDisplay()
  }

  if (savedIsRunning === "true") {
    startCounter()
  }
}

function startCounter() {
  if (!isRunning) {
    isRunning = true
    intervalId = setInterval(function () {
      counter++
      updateDisplay()
      saveCounter()
    }, 1000)
    saveCounter()
  }
}

function pauseCounter() {
  if (isRunning) {
    isRunning = false
    clearInterval(intervalId)
    saveCounter()
  }
}

function resetCounter() {
  pauseCounter()
  counter = 0
  updateDisplay()
  sessionStorage.removeItem("counter")
  sessionStorage.removeItem("isRunning")
}

startBtn.addEventListener("click", startCounter)
pauseBtn.addEventListener("click", pauseCounter)
resetBtn.addEventListener("click", resetCounter)

loadCounter()
