    function playGame(){
        function getComputerChoice(){
            return Math.floor(Math.random()*3);
        }
        function getHumanChoice(question){
            let  choice = prompt(question+"Choose a weapon: Rock, Paper, or Scissors");
            choice=choice.toLowerCase();
            if(choice==="rock"||choice==="paper"||choice==="scissors"){
                return choice;
            }
            else{
                return getHumanChoice("Thats not a choice, ");
            }
        }
        function playRound(hC, cC){
        
            if(cC==1){
                if(hC=="rock"){
                    console.log("It's a Draw");
                }
                else if(hC=="paper"){
                    console.log("You Win! Paper beats Rock.");
                    humanScore++;
                }
                else{
                    console.log("You Lose! Rock beats Scissors");
                    computerScore++;
                }
            }
            else if(cC==2){
                if(hC=="rock"){
                    console.log("You Lose! Paper beats Rock.");
                    computerScore++;
                }
                else if(hC=="paper"){
                    console.log("It's a Draw");
        
                }
                else{
                    console.log("You Win! Scissors beats Paper");
                    humanScore++;
                }
        
            }
            else{
                if(hC=="rock"){
                    console.log("You Win! Rock beats Scissors");
                    humanScore++;
                }
                else if(hC=="paper"){
                    console.log("You Lose! Scissors beat Paper");
                    computerScore++;
                }
                else{
                    console.log("It's a Draw");
                }
            }
        }
        const humanSelection = getHumanChoice("");
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);

    }
    let humanScore=0;
    let computerScore=0;
    playGame();