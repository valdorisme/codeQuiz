const startButton = document.getElementById('instructions');
const nextButton = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('quiz-box')
const questionEl = document.getElementById('question')
const choicesButtonEl = document.getElementById('choices')
const oneAnswer = document.querySelector('.btn1');
const twoAnswer = document.querySelector('.btn2')

const wrongAnswer = document.getElementById('wrong-answer')
const rightAnswer = document.getElementById('right-answer')
const resultsPage = document.getElementById('result-box')

var win = document.getElementById('excited');
var lose = document.getElementById('sad');
var timerElement = document.querySelector(".timer-sec");

// var lastQuestionIndex = quizContent.length-1;
var runningQuestionIndex = 0;

var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount = 75;

// Questions and answers for quiz
var quizContent = [
    {
        question: "What JavaScript method is used to change HTML content?",
        choices: [
            "a. getElementById()",
            "b. target.element"
        ],
        answer: "a"
    },
    {
        question: "True or False. Unlike Java, JavaScript does not force the developer to declare a data type",
        choices: [
            "a. True",
            "b. False"
        ],
        answer: "a"
    },

    {
        question: "What HTML tag creates a button?",
        choices: [
            "a. <class>; class",
            "b. <button>; button"
        ],
        answer: "b"
    },
    {
        question: "A JavaScript function is defined with the _____ keyword, followed by a name, followed by parenthesis",
        choices: [
            "a. function",
            "b. var"
        ],
        answer: "a"
    },
    {
        question: "_____ is an object-oriented computer programming language commonly used to create interactive effects within web browsers",
        choices: [
            "a. JavaScript",
            "b. CSS"
        ],
        answer: "a"
    }
]


// Adding functionality to start and next buttons
startButton.addEventListener('click', startGame)

choicesButtonEl.addEventListener('click', () => {
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
    startTimer()
    nextQuestion()
}

// startGame()

// Game timer, countdown from 75 seconds to allow 15 seconds for each question
function startTimer () {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                // clearInterval(timer);
                winGame();
            }
            
        }
        if (timerCount === 0) {
            // timerElement.textContent = "Time's Up!";
            clearInterval(timer);
            loseGame();
        }
    }, 1000);
}


function selectAnswer(event) {
    const selectedButton = event.target
    const answer = selectedButton.dataset.answer
    setStatusClass(document.body, answer)
    Array.from(choicesButtonEl.children).forEach(button => {
        setStatusClass(button, button.dataset.answer)
    })
    if (shuffledQuestions.length > currentQuestion +1) {
        // nextButton.classList.remove('hide')
    } else {
        // startButton.innerText = "Restart"
        // startButton.classList.remove('hide')
        window.location.href="scorePage.html";
    }
}

function nextQuestion() {
    isWin = false
    resetState()
    showQuestion(shuffledQuestions[currentQuestion])
}


// Function created to display quiz questions and answers
function showQuestion(quizContent) {
    questionEl.innerText = quizContent.question
    quizContent.choices.forEach(choices => {
        const button = document.createElement('button')
        button.innerText = choices
        button.classList.add('btn')
        if(choices.answer) {
            button.dataset.answer = choices.answer
        }
        button.addEventListener("click", selectAnswer)
        choicesButtonEl.appendChild(button)

        // console.log(quizContent.question)
    })
}

function resetState() {
    clearStatusClass(document.body)
    isWin = false
    // nextButton.classList.add('hide')
    while (choicesButtonEl.firstChild) {
        choicesButtonEl.removeChild
        (choicesButtonEl.firstChild)
    }
}


// Setting images to be displayed depending on whether question was answered answerly or inanswerly
function setStatusClass() {
    clearStatusClass()
    if(choices === answer) {
        win.classList.remove('hide')
        winCounter = winCounter+1
    } else {
        timerCount = timerCount-10
        lose.classList.remove('hide')
        loseCounter = loseCounter +1
    }
}

function clearStatusClass() {
    win.classList.add('hide')
    lose.classList.add('hide')
    
}

// Function created if user loses game
function loseGame() {
    // wrongAnswer.textContent = "BETTER LUCK NEXT TIME, NEWBIE.";
    loseCounter++;
    // startButton.disabled = false;
    // resultsPage.classList.remove('hide')
    setLosses()
}

function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}


// Function created if user wins game
function winGame() {
    // rightAnswer.textContent = "CONGRATULATIONS, OH ANCIENT ONE!";
    winCounter++;
    // startButton.disabled = false;
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

function init() {
    getWins();
    getLosses();
}

init()






