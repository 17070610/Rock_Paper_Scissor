const choices = ["rock", "paper", "scissor"];
function getComputerChoice(options){ 
    randomChoice = Math.floor(Math.random() * choices.length)
    return options[randomChoice]
}

const computerChoice = getComputerChoice(choices);

playerChoice = prompt("Rock, Paper or Scissor: ").toLowerCase();
do{
    if(choices.includes(playerChoice)){
        break;
    }
    else{
        playerChoice = prompt("Please enter a valid Choice!! Rock, Paper or Scissor").toLowerCase();
    }
}while(true)

function playRound(computerChoice, playerChoice){

}