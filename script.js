    function playGame(hC){
        function getComputerChoice(){
            return Math.floor(Math.random()*3);
        }
        function playRound(hC, cC){
        
            if(cC==1){
                if(hC=="rock"){
                    displayResults("It's a Draw");
                }
                else if(hC=="paper"){
                    humanScore++;
                    displayResults("You Win! Paper beats Rock.");
                    
                }
                else{
                    computerScore++;
                    displayResults("You Lose! Rock beats Scissors");
                    
                }
            }
            else if(cC==2){
                if(hC=="rock"){
                    computerScore++;
                    displayResults("You Lose! Paper beats Rock.");
                    
                }
                else if(hC=="paper"){
                    displayResults("It's a Draw");
        
                }
                else{
                    humanScore++;
                    displayResults("You Win! Scissors beats Paper");
                    
                }
        
            }
            else{
                if(hC=="rock"){
                    humanScore++;
                    displayResults("You Win! Rock beats Scissors");
                   
                }
                else if(hC=="paper"){
                    computerScore++;
                    displayResults("You Lose! Scissors beat Paper");
                    
                }
                else{
                    displayResults("It's a Draw");
                }
            }
        }
        const humanSelection = hC;
        const computerSelection = getComputerChoice();
    
        playRound(humanSelection, computerSelection);

    }
    function displayResults(result){
        const content=document.getElementById("results");
        if(humanScore>=5){
            content.textContent=result+" You win the game the final score is: "+humanScore+"-"+computerScore;
            humanScore=0;
            computerScore=0;
        }
        else if(computerScore>=5){
            content.textContent=result+" You Lose the game the final score is: "+humanScore+"-"+computerScore;
            humanScore=0;
            computerScore=0;
        }
        else{
            content.textContent=result+" \nHuman Score: "+humanScore+"\nComputer Score: "+computerScore;
        }

    }
    let humanScore=0;
    let computerScore=0;