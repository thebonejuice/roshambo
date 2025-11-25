let computerScore = 0;
let humanScore = 0;

const currentRound = document.createElement("h2");
const currentScore = document.querySelector("h2");
const winner = document.createElement("h1");
const buttonHolder = document.querySelector("div");
document.body.appendChild(winner);

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
    return new Promise(resolve => {

        buttonHolder.innerHTML = '';

        const rockBtn = document.createElement("button");
        const paperBtn = document.createElement("button");
        const scissorsBtn = document.createElement("button");

        rockBtn.textContent = "Rock!";
        paperBtn.textContent = "Paper!";
        scissorsBtn.textContent = "Scissors!";

        buttonHolder.appendChild(rockBtn);
        buttonHolder.appendChild(paperBtn);
        buttonHolder.appendChild(scissorsBtn);

        rockBtn.addEventListener("click", (event) => {
            buttonHolder.innerHTML = '';
            resolve("rock");
        });

        paperBtn.addEventListener("click", (event) => {
            buttonHolder.innerHTML = '';
            resolve("paper");
        });

        scissorsBtn.addEventListener("click", (event) => {
            buttonHolder.innerHTML = '';
            resolve("scissors");
        });
    });
}
// functioning code up here I think. below is what need to be worked on

async function playGame(){
    let winCondition = 0;

    for(let i = 1; i < 6; i++){
        currentRound.textContent = "Round " + i;
        winCondition = await playRound();

        if(winCondition === 1){
            computerScore++;
        }else{
            humanScore++;
        }

        if (currentScore) {
            currentScore.textContent = "Player - " + humanScore + " VS Computer - " + computerScore;
        }

        if(computerScore === 3){
            if (winner) {
                winner.textContent = "The computer wins this matchup. Skill issue lol.";
                buttonHolder.innerHTML = '';
                break;
            }
            break;
        }else if(humanScore === 3){
            if (winner) {
                winner.textContent = "You won! Lucky you! You should go gambling!";
                buttonHolder.innerHTML = '';
                break;
            }
        }
    }
}

async function playRound(){
    let humanSelection = "";
    let computerSelection = "";
    let winCondition = -1;
    var validRoundWinner = false;

    const playerAction = document.createElement("h3");
    const computerAction = document.createElement("h3");
    const roundDeclaration = document.createElement("h3");

    const body = document.querySelector("body");
    body.appendChild(playerAction);
    body.appendChild(computerAction);
    body.appendChild(roundDeclaration);


    while(!validRoundWinner){
        humanSelection = await getHumanChoice();
        computerSelection = getComputerChoice();

        playerAction.textContent = "Player tries " + humanSelection;
        computerAction.textContent = "Computer responds with " + computerSelection;

        if((humanSelection === "rock" && computerSelection === "paper") || (humanSelection === "paper" && computerSelection === "scissors") || (humanSelection === "scissors" && computerSelection === "rock")){
            roundDeclaration.textContent = "The computer wins this round!";
            winCondition = 1;
            validRoundWinner = true;
        } else if((humanSelection === "paper" && computerSelection === "rock") || (humanSelection === "scissors" && computerSelection === "paper") || (humanSelection === "rock" && computerSelection === "scissors")){
            roundDeclaration.textContent = "The player wins this round!";
            winCondition = 0;
            validRoundWinner = true;
        } else {
            roundDeclaration.textContent = "It appears it was a draw. One more time!";
        }
    }
    return winCondition;
}

playGame();