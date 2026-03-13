let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let x = Math.random() * 3;
  if (x >= 2) {
    return "rock";
  } else if (x >= 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let msg =
    "Please choose one of the following\n1. rock\n2. paper\n3. scissors";
  let humanChoice = prompt(msg);
  return humanChoice;
}
function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();
  if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
    humanScore++;
    return ("You won! " + humanChoice + " beats " + computerChoice);
  }
  if (computerChoice == "ROCK" && humanChoice == "SCISSORS"){
    computerScore++;
    return("You lose! " + computerChoice + " beats " + humanChoice);
  }
  if (humanChoice == "ROCK" && computerChoice == "PAPER"){
    humanScore++;
    return("You won! " + humanChoice + " beats " + computerChoice);
  }
  if (computerChoice == "ROCK" && humanChoice == "PAPER"){
    computerScore++;
    return("You lose! " + computerChoice + " beats " + humanChoice);
  }
  if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
    humanScore++;
    return("You won! " + humanChoice + " beats " + computerChoice);
  }
  if (computerChoice == "SCISSORS" && humanChoice == "PAPER"){
    computerScore++;
    return("You lose! " + computerChoice + " beats " + humanChoice);
  }
 
}

