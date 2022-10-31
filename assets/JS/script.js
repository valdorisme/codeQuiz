var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");
var rightAnswer = document.querySelector(".right");
var wrongAnswer = document.querySelector(".wrong");

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var quizContent = [
    {
    question: "What does the abbreviation 'qd' stand for?",
    options: {
        a: "Every other day",
        b: "Everyday"
    }
    answer: "b"
    }
    {
    question: "What does the abbreviation 'tid' stand for?"
    options: {
        a: "Three times per day",
        b: "Four times per day",
    }
    answer: "a"
    }

    {
    question: "What does the abbreviation 'ac' stand for?",
    options: {
        a: "Before meals",
        b: "After meals",
    }
    answer: "a"
    }
    {
    question: "What does the abbreviation 'qod' stand for?",
    options: {
        a: "Everyday",
        b: "Every other day",
    }
    answer: "b"
    }
    {
    question: "What does the abbreviation 'MSO4' stand for?",
    options: {
        a: "Magnesium Sulfate",
        b: "Morphine Sulfate",
    }
    answer: "b"   
    }
]

function init() {
    getWins();
    getLosses();
}

function startGame() {
    isWin = false;
    timerCount = 10;
    startButton.disabled =true;
    startTimer()
}

function winGame() {
    rightAnswer.textContent = "CONGRATULATIONS, OH ANCIENT ONE!";
    winCounter++;
    startButton.disabled = false;
    setWins()
}

function loseGame() {
    wrongAnswer.textContent = "BETTER LUCK NEXT TIME, NEWBIE.";
    loseCounter++;
    startButton.disabled = false;
    setLosses()
}

function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
            
        }
        if (timerCount === 0) {
            clearInterval(timer);
            loseGame();
        }
    }, 1000)
}

function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

// function getWins() {
//     var storedWins = localStorage.getItem("winCount");
    
//     if (storedWins === null) {
//         winCounter = 0;
//     } else {
//         winCounter = storedWins;
//     }

//     win.textContent = winCounter
// }

function getLosses() {
    var storedLosses = localStorage.getItem("loseCount");
    
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

startButton.addEventListener("click", startGame);

init();

//Button added to restart the game.
var resetButton = document.querySelector(".reset-button");

function resetGame() {
    winCounter = 0;
    loseCounter = 0;

    setWins()
    setLosses()
}

resetButton.addEventListener("click", resetGame);