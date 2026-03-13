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
  else if (computerChoice == "ROCK" && humanChoice == "SCISSORS"){
    computerScore++;
    return("You lose! " + computerChoice + " beats " + humanChoice);
  }
  else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
    humanScore++;
    return("You won! " + humanChoice + " beats " + computerChoice);
  }
  else if (computerChoice == "ROCK" && humanChoice == "PAPER"){
    computerScore++;
    return("You lose! " + computerChoice + " beats " + humanChoice);
  }
  else if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
    humanScore++;
    return("You won! " + humanChoice + " beats " + computerChoice);
  }
  else if (computerChoice == "SCISSORS" && humanChoice == "PAPER"){
    computerScore++;
    return("You lose! " + computerChoice + " beats " + humanChoice);
  }
  else{
    return ("This round is a draw!");
  }
 
}
function playGame(){
    for(let i = 1;i<=5;i++){
        console.log("Round "+i);
        console.log(playRound(getHumanChoice(),getComputerChoice()));

    }
    if(humanScore>computerScore) console.log("You are the Winner!! Congratulations!");
    else if(humanScore==computerScore) console.log("The game is a draw");
    else console.log("You lost!! Better luck next time!!");
    
}
