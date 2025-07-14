let userScore = 0;
let compScore = 0;

const userPara =document.querySelector("#user-score");
const compPara =document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg")

const genChoice = ()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = ()=>{
    msg.innerText = "Game Draw! Play Again" ;
    msg.style.backgroundColor = "#79B4A9";
}

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userPara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#1AA85B";
    }
    else{
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You Lose! Your ${userChoice} beats by ${compChoice}` ;
        msg.style.backgroundColor = "#FF7E6B";
    }
}

const playGame =(userChoice)=>{
    const compChoice = genChoice();

    if(userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock"){
            //S,P
            userWin = compChoice === "paper"? false:true;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false:true;
        }
        else{
            userWin = compChoice === "rock"? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
         
    })
})
// for buttons
// Add event listener for key presses
document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase(); // Normalize to lowercase
    let userChoice = "";

    if (key === "r") {
        userChoice = "rock";
    } else if (key === "p") {
        userChoice = "paper";
    } else if (key === "s") {
        userChoice = "scissors";
    }

    if (userChoice) {
        playGame(userChoice);
    }
});