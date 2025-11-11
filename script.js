function getComputerChoice(){
    let computerNumberChoice = Math.floor(Math.random() * 3);
    let computerChoice = "";

    if(computerNumberChoice === 2){
        computerChoice = "scissors";
    } else if(computerNumberChoice === 1){
        computerChoice = "rock";
    } else {
        computerChoice = "paper";
    }

    return computerChoice;
}

function getHumanChoice(){
    var validAnswer = false;
    let humanChoice = "";

    while(!validAnswer){
        humanChoice = prompt("Rock, paper, or scissors?");

        if(humanChoice === null){
            console.log("Give an answer.");
        }else if(humanChoice === ""){
            console.log("Did you wanna type something or?");
        } else if(humanChoice.toLowerCase() === "rock" || humanChoice.toLowerCase() === "paper" || humanChoice.toLowerCase() === "scissors"){
            validAnswer = true;
        } else {
            console.log("Quit fatfingering the keyboard and type.");
        }
    }
    console.log(humanChoice);
    return humanChoice;
}

function playRound(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
}



playGame();