let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#play");
const userPoint = document.querySelector("#userScore");
const compPoint = document.querySelector("#compScore");

const showWinner = (win, userChoise, compChoise) => {
    if (win === true) {
        message.innerText = `You Win! Your ${userChoise} beats ${compChoise}`;
        message.style.backgroundColor = "green";
        userScore++;
        userPoint.innerText = userScore;
    }else{
        message.innerText = `You Loose! ${compChoise} beats your ${userChoise}`;
        message.style.backgroundColor = "red";
        compScore++;
        compPoint.innerText = compScore;
    }
}

const randomChoise = ()=>{
    let option = ["rock","paper","scissor"];
    let idx = Math.floor(Math.random()*3);
    return option[idx];
}

const playGame = (userChoise)=>{
    console.log("User Choise: ",userChoise);
    let compChoise = randomChoise();
    console.log("Computer Choise: ",compChoise);

    if (userChoise === compChoise){
        message.innerText = "Game Draw"
        message.style.backgroundColor = "black";
    }else{
        let win = true;
        if (userChoise === "rock") {
            win = compChoise === "paper" ? false : true;
        }else if (userChoise === "paper") {
            win = compChoise === "rock" ? true : false;
        }else{
            win = compChoise === "paper" ? true : false;
        }
        showWinner(win, userChoise, compChoise);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoise = choice.getAttribute("id");
        playGame(userChoise);
    })
});