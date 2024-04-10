const choices = ["rock", "paper", "scissor"];
function getComputerChoice(options){ 
    randomChoice = Math.floor(Math.random() * choices.length)
    return options[randomChoice]
}

const computerChoice = getComputerChoice(choices);

playerChoice = prompt("Rock, Paper or Scissor: ").toLowerCase();
do{
    if(choices.includes(playerChoice)){
        console.log(playerChoice);
        break;
    }
    else{
        playerChoice = prompt("Please enter a valid Choice!! Rock, Paper or Scissor").toLowerCase();
    }
}while(true)

function roundPlay(computerChoice, playerChoice) {
  if(computerChoice === playerChoice){
    return "It's a draw!!"
  }else if(
    (computerChoice === "rock" && playerChoice === "scissor") || 
    (computerChoice === "scissor" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
    ){
    return "Computer wins!!"
  }else{
    return "You win !!"
  } 
}

function playGame(){
    
}