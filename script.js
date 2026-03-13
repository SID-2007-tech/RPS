function getComputerChoice() {
  let x = Math.random() * 3;
  if (x >= 2) {
    return "rock";
  } 
  else if (x >= 1) {
    return "paper";
  } 
  else {
    return "scissor";
  }
}

function getHumanChoice(){
    let msg = "Please choose one of the following\n1. rock\n2. paper\n3. scissor";
    let humanChoice = prompt(msg);
    return humanChoice;
}
console.log(getHumanChoice());