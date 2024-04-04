const choices = ["Rock", "Paper", "Scissor"];
function getComputerChoice(options){ 
    randomChoice = Math.floor(Math.random() * choices.length)
    return options[randomChoice]
}

const computerChoice = getComputerChoice(choices);
console.log(computerChoice);
