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


console.log(getComputerChoise());