let humanScore = 0;
let computerScore = 0;


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
            return "Player Wins"; 
        }

        else {
            computerScore++;
            return "Computer Wins"; 
        }
    }

    else if(compChoise === "paper") {

        if(humChoise === "scissor") {
            humanScore++;
            return "Player Wins"; 
        }
        else {
            return "Computer Wins";
            computerScore++;
            
        }
    }
    else if(compChoise === "scissor") {
        if(humChoise === "rock") {
            humanScore++;
             return "Player Wins"; 
        }  
        else {
            computerScore++;
            return "Computer Wins";  
        }  

    }
}

const ch1 = getComputerChoise();
const ch2 = getHumanChoise();
console.log(ch1);
console.log(ch2);

console.log(playRound(ch1, ch2));

