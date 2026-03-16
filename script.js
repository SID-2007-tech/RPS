let humanScore = 0;
let computerScore = 0;
let round = 0;
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const roundWinnerDisplay = document.querySelector("#roundWinnerDisplay");
const gameStatusDisplay = document.querySelector("#gameStatusDisplay");
const resetBtn = document.querySelector("#reset")

rockBtn.addEventListener("click",()=>playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click",()=>playRound("paper",getComputerChoice()));
scissorsBtn.addEventListener("click",()=>playRound("scissors",getComputerChoice()));
resetBtn.addEventListener("click",resetGame)

function getComputerChoice() {
  console.log("getComputerChoice function invoked")
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
  round++;
  console.log("playRound function invoked with humanChoice = ",humanChoice," and computerChoice = ", computerChoice);
  console.log("round = ",round);
  humanChoice = humanChoice.toUpperCase();
  computerChoice = computerChoice.toUpperCase();
  let roundResult = "";
  let winner = "";
  if (humanChoice == "ROCK" && computerChoice == "SCISSORS"){
    humanScore++;
    winner="human";
    return ("You won! " + humanChoice + " beats " + computerChoice);
  }
  else if (computerChoice == "ROCK" && humanChoice == "SCISSORS"){
    computerScore++;
    winner="computer";
    
  }
  else if (humanChoice == "ROCK" && computerChoice == "PAPER"){
    humanScore++;
    winner="human";
    
  }
  else if (computerChoice == "ROCK" && humanChoice == "PAPER"){
    computerScore++;
    winner="computer";
    
  }
  else if (humanChoice == "SCISSORS" && computerChoice == "PAPER"){
    humanScore++;
    winner="human";
  }
  else if (computerChoice == "SCISSORS" && humanChoice == "PAPER"){
    computerScore++;
    winner="computer";
  }
  else if(computerChoice==humanChoice){
    roundResult= "This round is a draw!";
  }
  if(winner=="computer"){
    roundResult = "You lose! " + computerChoice + " beats " + humanChoice;
  }
  else if(winner=="human"){
    roundResult = "You lose! " + computerChoice + " beats " + humanChoice;
  }
  
  displayWinner(winner,roundResult, humanScore, computerScore);
  

 
}
function displayWinner(winner,roundResult, humanScore, computerScore){
  console.log("displayWinner funciton invoked");
  if(round==5){
    rockBtn.disabled = true;
    scissorsBtn.disabled = true;
    paperBtn.disabled=true;
    if(humanScore>computerScore){
      gameStatusDisplay.textContent = "Game Winner = Human" ;
    }
    else if(humanScore<computerScore){
      gameStatusDisplay.textContent = "Game Winner = Computer" ;
      
    }
    else gameStatusDisplay.textContent ="This game is a draw";
    
    return;
    
  }
  roundResult = "Human: " + humanScore + " Computer: " + computerScore;
  gameStatusDisplay.textContent = roundResult;
    
}
function resetGame(){
  console.log("resetGame function invoked");
  humanScore = 0;
  computerScore = 0;
  round = 0;
  rockBtn.disabled = false;
    scissorsBtn.disabled = false;
    paperBtn.disabled=false;
  gameStatusDisplay.textContent = "";
  roundWinnerDisplay.textContent = "";
  return;
}


function playGame(){
    
}
