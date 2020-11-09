//var char = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9'];
var woorden = ['Tapijt','Pompoen','Geit','Rugzak','Kan','Ijzer','Bedankt','Zwart','Rouwen','Hamer','Aap','Ziek','Portefeuille','Ring','Schildpad','Kaart','Violet','Soldaat','Hoed','Yoghurt','Bel','Dolfijn','Dierlijk','Visser','Palmboom','Voetbal','Soldaat','Balpen','Stilte','Overhemd','Bak','Leisteen','Tapijt','Sokken','Hals','Kasteel','Kop','Papier','Haai','Perzik','Overhemd','Weg','Walvis','Driewieler','Schoen','Kop','Zwaard','Watermeloen','Moeder','Yoghurt','Plug','Broer','Tv','Mes','Slecht','Acht','Globe','Gitaar','Bal','Moeder','Puzzel','Varkensvlees','Kaas','Jurk','Pols','Fluitje','Timmerman','Fonteintje','Bus','Roze','Schilder','Pens','Fiets','Baby','Baard','Huis','Spelen','Rivier','Olijf','Rok','Appel','Trommel','Taart','Bal','Dak','Springen','Pyjama','Paard','Hoed','Schilderen'];


const questionP = document.querySelector("#question");
const answerInput = document.querySelector("#answer");
const checkBtn = document.querySelector("#check");
const resultP = document.querySelector("#result");
const scoreSpan = document.querySelector("#score");
const timerSpan = document.querySelector("#timer");
const totalscoreP = document.querySelector("#totalscore");

var score = 0;
var scoreWrong = 0;
var counter = 30;
var countdown = setInterval(countDownTime,1000);
var currentQuestion;
var currentAnswer;


function generateQuestion(){
    // currentQuestion = Math.random().toString(36).substring(2,9);

    currentQuestion = woorden[Math.floor(Math.random() * woorden.length)];

    currentAnswer = currentQuestion;

    return currentQuestion;

}

console.log(currentQuestion)

function displayQuestion(){
    questionP.innerText = currentQuestion;
}

function checkAnswer(){
    if(String(answerInput.value) === currentAnswer ){ 
    resultP.innerText = "Correct answer";
    addScore();
    displayScore();
    return true;
}

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
    totalscoreP.innerHTML = "Je score is: " + score + " Aantal fout: " + scoreWrong;
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

generateQuestion()
displayQuestion()
displayScore();
displayCountdown();