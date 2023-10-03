let randomNum = Math.round(Math.random())   

let choice = window.prompt('Enter Heads or Tails').toLowerCase()

if (randomNum === 0) { // 0 represents head
  if (choice === "heads") {
    alert('The flip was heads and you chose heads...you win!')
  } else {
    alert('The flip was heads but you chose tails...you lose!')
  }
} else { // 1 represents tail
  if (choice === "heads") {
    alert('The flip was tails but you chose heads...you lose!')
  } else {
    alert('The flip was tails and you chose tails...you win!')
  }
}

