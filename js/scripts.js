
const button = document.querySelector("button")
const body = document.querySelector("body")



const colors = ["pink", "red", "green", "yellow"]
//                0       1       2         3
// colors [2]

body.style.backgroundColor = "green"

button.addEventListener("click", changeBackground)

function changeBackground() {
    const colorIndex = Math.floor(Math.random() * colors.length)
    body.style.backgroundColor = colors[colorIndex]
  }