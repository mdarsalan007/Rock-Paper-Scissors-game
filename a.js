let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg  =document.querySelector("#msg");

let userScorepara = document.querySelector("#user-score");
let compScorepara = document.querySelector("#comp-score");



const drawgame = ()=>{
    msg.innerText = "Game was Draw! Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userChoice,userWin,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};
const compGen = ()=>{
    const choiceOps = ["rock", "paper", "scissors"];
    const randInd = Math.floor(Math.random()*3);
    return choiceOps[randInd];
}

const playgame = (userChoice)=>{
    
    const compChoice = compGen();
    if(userChoice === compChoice){
        drawgame();
    }
    else{
        let userWin = true;
    if(userChoice === "rock" ){
        userWin = compChoice === "paper" ?false:true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ?false:true;
    }
    else{
        userWin = compChoice === "rock" ?false:true;
        }
       showWinner(userChoice,userWin,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);

    });
});

