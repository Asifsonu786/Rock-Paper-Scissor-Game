let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");


//Game winner
const gameWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText = ` you win!,your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    } else {
       compScore++;
        compScorePara.innerText=compScore;
        msg.innerText =`you lost!, ${compChoice} beats  your ${userChoice}`;
         msg.style.backgroundColor="red";
    }
}
//Game draw Fun
const gameDraw = () => {
    console.log("game was draw,Play again");
     msg.innerText ="Game was draw,Play again";
      msg.style.backgroundColor="#90e0ef";
}

//Computer choice
const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissor"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    const compChoice = genCompChoice();
    console.log("computer Choice =", compChoice);
    if (userChoice === compChoice) {
        gameDraw();
    } else {
        let userWin = true;
        if (userChoice === "Rock") {
            //paper,scissor
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            //rock,scissor
            userWin = compChoice === "Rock" ? true : false;
        } else {
            //rock,paper
            userWin = compChoice === "Paper" ? true : false;
        }
        gameWinner(userWin,userChoice,compChoice);
    }
};

//User choice
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});
