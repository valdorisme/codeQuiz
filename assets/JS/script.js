const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('quiz-box')
const questionEl = document.getElementById('question')
const choicesButtonEl = document.getElementById('choices')

const wrongAnswer = document.getElementById('wrong-answer')
const rightAnswer = document.getElementById('right-answer')
const resultsPage = document.getElementById('result-box')

// const shuffledQuestions, currentQuestion

var win = document.getElementById('excited');
var lose = document.getElementById('sad');
var timerElement = document.querySelector(".timer-sec");

// var lastQuestionIndex = quizContent.length-1;
// var runningQuestionIndex = 0;

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

// Questions and answers for quiz
var quizContent = [
    {
        question: "What does the abbreviation 'qd' stand for?",
        choices: [
            {text: "Every other day", correct: false},
            {text: "Everyday", correct: true},
        ],
    },
    {
        question: "What does the abbreviation 'tid' stand for?",
        choices: [
            {text: "Three times per day", correct: true},
            {text: "Four times per day", correct: false}, 
        ],
    },

    {
        question: "What does the abbreviation 'ac' stand for?",
        choices: [
            {text: "Before meals", correct: true},
            {text: "After meals", correct: false}, 
        ],
    },
    {
        question: "What does the abbreviation 'qod' stand for?",
        choices: [
            {text: "Everyday", correct: false},
            {text: "Every other day", correct: true}
        ],
    },
    {
        question: "What does the abbreviation 'MSO4' stand for?",
        choices: [
            {text: "Magnesium Sulfate", correct: false},
            {text: "Morphine Sulfate", correct: true}
        ],
    }
]


// Adding functionality to start and next buttons
startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})

function startGame() {
    console.log('begin')
    startButton.style.display = "none"
    shuffledQuestions = quizContent.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerEl.classList.remove('hide')
    isWin = false
    timerCount = 10
    startTimer()
    nextQuestion()
}

// startGame()

// Game timer, countdown from 10 seconds
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
    }, 1000);
}


function selectAnswer(event) {
    const selectedButton = event.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(choicesButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestion +1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function nextQuestion() {
    isWin = false
    timerCount = 10
    startTimer()
    resetState()
    showQuestion(shuffledQuestions[currentQuestion])
}


// Function created to display quiz questions and answers
function showQuestion(quizContent) {
    questionEl.innerText = quizContent.question
    quizContent.choices.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(choices.correct) {
            button.dataset.correct = choices.correct
        }
        button.addEventListener("click", selectAnswer)
        choicesButtonEl.appendChild(button)

        // console.log(quizContent.question)
    })
}

function resetState() {
    clearStatusClass(document.body)
    isWin = false
    timerCount = 10
    startTimer()
    nextButton.classList.add('hide')
    while (choicesButtonEl.firstChild) {
        choicesButtonEl.removeChild
        (choicesButtonEl.firstChild)
    }
}


// Setting images to be displayed depending on whether question was answered correctly or incorrectly
function setStatusClass(correct) {
    clearStatusClass()
    if(correct) {
        win.classList.remove('hide')
    } else {
        lose.classList.remove('hide')
    }
}

function clearStatusClass() {
    win.classList.add('hide')
    lose.classList.add('hide')
    
}

// Function created if user loses game
function loseGame() {
    wrongAnswer.textContent = "BETTER LUCK NEXT TIME, NEWBIE.";
    loseCounter++;
    startButton.disabled = false;
    // resultsPage.classList.remove('hide')
    setLosses()
}

function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}


// Function created if user wins game
function winGame() {
    rightAnswer.textContent = "CONGRATULATIONS, OH ANCIENT ONE!";
    winCounter++;
    startButton.disabled = false;
    setWins()
}


function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}



// Functions created to save scores
function getWins() {
    var storedWins = localStorage.getItem("winCount");
    
    if (storedWins === null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }

    win.textContent = winCounter
}

function getLosses() {
    var storedLosses = localStorage.getItem("loseCount");
    
    if (storedLosses === null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}










// function init() {
//     getWins();
//     getLosses();
// }






