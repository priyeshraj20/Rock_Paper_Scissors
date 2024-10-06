let humanScore = 0;
let computerScore = 0;
let n = 0;

//computer choice
function getComputerChoise() {
    const n = Math.floor(Math.random() * 3);
    if(n===0) {
        return "rock";
    }

    else if (n===1){
         return "paper";
    }

    else {
        return "scissor";
    }
}


//get human choises

function getHumanChoise() {
    const humanInput = window.prompt("Enter your choise ");
    const humanChoise = humanInput.toLowerCase();
    return humanChoise;
}

//Playing a round 

function playRound (compChoise, humChoise) {
    if(compChoise === humChoise) {
         return "Draw";
        
    }
    else if(compChoise === "rock") {

        if (humChoise === "paper"){
            humanScore++;
            return "Player wins the round"; 
        }

        else {
            computerScore++;
            return "Computer wins the round"; 
        }
    }

    else if(compChoise === "paper") {

        if(humChoise === "scissor") {
            humanScore++;
            return "Player wins the round"; 
        }
        else {
            return "Computer wins the round";
            computerScore++;
            
        }
    }
    else if(compChoise === "scissor") {
        if(humChoise === "rock") {
            humanScore++;
             return "Player wins the round"; 
        }  
        else {
            computerScore++;
            return "Computer wins the round";  
        }  

    }
}

//Play 5 rounds and add the scores

function playGame(roundNo) {
 const humanSelect = getHumanChoise();
 const compSelect = getComputerChoise();
 console.log("Round " + roundNo );
 console.log(playRound(humanSelect, compSelect));   
}

while (n < 5) {
playGame(n+1);
n++;
}

console.log("Scores");
console.log("........");
console.log("Player: " +humanScore);
console.log("Computer: " +computerScore);

if(humanScore > computerScore) {
    console.log("Player Wins the Game!!!")
}
else {
    console.log("Computer Wins the Game!!!")
}