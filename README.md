hi yes that's me

So, we have to create a rock, paper, scissors game (by the name of Roshambo) for the Odin Project. This shouldn't be too difficult but the main point of this project is to learn pseudocoding.


getHumanInput
getComputerInput

if(humanInput < ComputerInput){
    Computer++;
} else if(humanInput > ComputerInput){
    Human++;
}else{
    output "it's a draw lmfao"
}

we have to find a random number to multiply to since 100 doesn't divide equally in 3's. Don't want one option getting a better probably than another, even if it's miniscule. Refer to MDN's "What went wrong?" for how to use the Math.Random in JavaScript.