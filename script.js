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
