//Reken game proiect serious game

//Define constants
const questionP = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const checkBtn = document.querySelector("#check");
const resultP = document.querySelector("#result");
const scoreSpan = document.querySelector("#score");
const timerSpan = document.querySelector("#timer");
const totalscoreP = document.querySelector("#totalscore");



//Define variables
var score = 0;
var scoreWrong = 0;
var counter = 30;
var countdown = setInterval(countDownTime,1000);
var currentQuestion;
var currentAnswer;
var operator;

//Define functions
function generateQuestion(){
    //Clear the input value
    clearAnswerInput();
    //Generate first number & second number between 0 to 100.
    const firstNum = Math.floor(Math.random() * 101);
    const secNum = Math.floor(Math.random() * 101);

    //Generate operator
    const rand = Math.floor(Math.random() * 4);
    if (rand === 0) operator = "+";
    else if (rand === 1) operator = "/";
    else if (rand === 2) operator = "-";
    else if (rand === 3) operator = "*";
    else return "Error";

    currentQuestion = firstNum + " " + operator + " " + secNum;

    currentAnswer = eval(currentQuestion);

    //Afronden naar boven of beneden
    if (operator = "/") currentAnswer = Math.round(eval(currentQuestion));

    return currentQuestion;
}

function displayQuestion(){
    questionP.innerText = currentQuestion + " = ?";
    
}

function checkAnswer(){
    if(Number(answerInput.value) === currentAnswer){ 
    resultP.innerText = "Correct answer";
    addScore();
    displayScore();
    return true;
}
//Als de som fout is naar de volgende opdracht maar geen plus score
    resultP.innerText = "Wrong answer";
    addWrongScore();
    return true;
}

function clearAnswerInput(){
    answerInput.value = null;
}

function addScore(){
    score++;
}

function addWrongScore(){
    scoreWrong++;
}

function displayScore(){
    scoreSpan.innerText = score;
}

function displayPopupScore(){
    totalscoreP.innerText = "Je score is: " + score + " Aantal fout: " + scoreWrong;
}

function displayCountdown(){
    timerSpan.innerText = counter;
}

function countDownTime(){
    if(counter == -1){
        clearTimeout(countdown);
        displayPopupScore();
        checkBtn.disabled = true;

    }else{
        timerSpan.innerText = counter;
        counter--;
    }

}

checkBtn.addEventListener("click", function(){
    if (checkAnswer()) generateQuestion();
    displayQuestion();
});

//Generate new question after debug
generateQuestion();
displayQuestion();
displayScore();
displayCountdown();
