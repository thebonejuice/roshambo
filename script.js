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

    humanChoice = humanChoice.toLowerCase();

    return humanChoice;
}

function playRound(){
    let humanSelection = "";
    let computerSelection = "";
    let winCondition = 0;
    var validRoundWinner = false;

    while(!validRoundWinner){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        console.log("Player threw out " + humanSelection);
        console.log("Computer responds with " + computerSelection);

        if((humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "rock")){
            console.log("The computer wins this round!");
            score = 1;
            validRoundWinner = true;
        } else if((humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper") || (humanSelection === "rock" && computerSelection === "scissors")){
            console.log("The human wins this round!");
            score = 2;
            validRoundWinner = true;
        } else {
            console.log("It appears it was a draw. One more time!")
        }
    }
    return winCondition;
}

/**function playGame(){
    for(let i = 0; i < 5; i++){
        console.log("Round " + i)
        playRound();
    }
}



playGame();**/

playRound();