const startButton = document.getElementById('start-button');
const questionEl = document.getElementById('quiz-box')

var win = document.querySelector(".excited");
var lose = document.querySelector(".sad");
var timerElement = document.querySelector(".timer-sec");

// var lastQuestionIndex = quizContent.length-1;
// var runningQuestionIndex = 0;

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var quizContent = [
    {
        question: "What does the abbreviation 'qd' stand for?",
        choices: {
            a: "Every other day",
            b: "Everyday",
        },
        answer: "b"
    },
    {
        question: "What does the abbreviation 'tid' stand for?",
        choices: {
            a: "Three times per day",
            b: "Four times per day",
        },
        answer: "a"
    },

    {
        question: "What does the abbreviation 'ac' stand for?",
        choices: {
            a: "Before meals",
            b: "After meals",
        },
        answer: "a"
    },
    {
        question: "What does the abbreviation 'qod' stand for?",
        choices: {
            a: "Everyday",
            b: "Every other day",
        },
        answer: "b"
    },
    {
        question: "What does the abbreviation 'MSO4' stand for?",
        choices: {
            a: "Magnesium Sulfate",
            b: "Morphine Sulfate",
        },
        answer: "b"   
    }
]

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('begin')
    startButton.style.display = "none"
    questionEl.classList.remove('hide')
}

// startGame()


function nextQuestion() {
    
4}


function selectAnswer() {

}















// function init() {
//     getWins();
//     getLosses();
// }


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

// function getLosses() {
//     var storedLosses = localStorage.getItem("loseCount");
    
//     if (storedLosses === null) {
//         loseCounter = 0;
//     } else {
//         loseCounter = storedLosses;
//     }
//     lose.textContent = loseCounter;
// }