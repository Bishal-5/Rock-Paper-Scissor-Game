//at first both score are zero
let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice"); //access choise class
const message = document.querySelector("#play"); //access play id
const userPoint = document.querySelector("#userScore"); //access username id
const compPoint = document.querySelector("#compScore"); //access compScore id

//Winner & Looser message to display
const showWinner = (userWin, userChoise, compChoise) => { //All parameter in this arrow function
    if (userWin === true) { //if user win
        message.innerText = `You Win! Your ${userChoise} beats ${compChoise}`; //message
        message.style.backgroundColor = "green"; //background color
        userScore++; //increase user's score
        userPoint.innerText = userScore; //display user's current score
    }else{ //if computer win
        message.innerText = `You Loose! ${compChoise} beats your ${userChoise}`; //message
        message.style.backgroundColor = "red"; //background color
        compScore++; //increase computer's score
        compPoint.innerText = compScore; //display computer's current score
    }
}

//Computer's random choise generate
const randomChoise = ()=>{ //create arrow function
    let option = ["rock","paper","scissor"]; //game option
    let idx = Math.floor(Math.random()*3); //random no. generator for indexing the game option
    return option[idx]; //pass the random no. in game option
}

//Winner-Looser Decision
const playGame = (userChoise)=>{ //userChoice as a parameter for playGame
    console.log("User Choise: ",userChoise); //print userChoise
    let compChoise = randomChoise(); //store computer's random choise value
    console.log("Computer Choise: ",compChoise); //print compChoise

    //comparison between userChoise & compChoise
    if (userChoise === compChoise){ //If userChoise & compChoise are same
        message.innerText = "Game Draw"; //change inner text to Game Draw 
        message.style.backgroundColor = "black"; //change background color
    }else{ //If userChoise & compChoise are different
        let userWin = true; //first assume userWin is true
        if (userChoise === "rock") { //user choose rock
            userWin = compChoise === "paper" ? false : true; //comp choose paper. Paper beats rock. Now, userWin is changes to false, otherwise it's true
        }else if (userChoise === "paper") { //user choose paper
            userWin = compChoise === "rock" ? true : false; //comp choose rock. Paper beats rock. Now, userWin is changes to true, otherwise it's false
        }else{ //otherwise
            userWin = compChoise === "paper" ? true : false;
        }
        showWinner(userWin, userChoise, compChoise); //pass the value of userWin, userChoise & compChoise to showWinner function
    }
}

//User's choise store
choices.forEach((choice) => { //arrow function
    choice.addEventListener("click",()=>{ //track event
        const userChoise = choice.getAttribute("id"); //get user's choise id
        playGame(userChoise); //pass the value of userChoice to playGame function
    })
});
