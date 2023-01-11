'use strict';


let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<scripting>",
        choice4: "<js>",
        answer: 1,
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "msg('Hello World');",
        choice3: "alertBox('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },

    {
        question: "How do you write an IF statement in JavaScript?",
        choice1: "if (i -- 5)",
        choice2: "if i ==5 then",
        choice3: "if i = 5 then",
        choice4: "if i = 5",
        answer: 1,
    },

    {
        question: "How does a FOR loop start in JavaScript?",
        choice1: "for (i <= 5; i++)",
        choice2: "for i = 1 to 5",
        choice3: "for (i = 0; i <= 5; i++)",
        choice4: "for (i = 0; i <= 5)",
        answer: 3,
    },
]

// Global Variables
const questionPrompt = document.querySelector('#question-prompt')
const questionProgress = document.querySelector('#questionProgress')
const currentScore = document.querySelector('#current-score');
const answers = Array.from(document.querySelectorAll('.answer-text'));
console.log(answers)
const MAX_QUESTIONS = 4;
const SCORE_POINTS = 100;

let questionInfo = {}
let questionList = []
let questionNumber = 0
let score = 0
let acceptingAnswers = true


// Begin Game Function
beginGame = () => {
    // Starting Conditions
    questionNumber = 0
    score = 0
    questionList = [...questions]
    switchQuestion()
}


// Switch Question Function
switchQuestion = () => {
    // Check if game needs to switch; if not, then send to highscores page
    if(questionList.length === 0 || questionNumber > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign("/highscores.html")
    }
    // Switch Question Number as well as Text on hud 
    questionNumber++
    questionProgress.innerText = `Question ${questionNumber} of ${MAX_QUESTIONS}`
    // Change question prompt
    const questionIndex = Math.floor(Math.random() * questionList.length)
    questionInfo = questionList[questionIndex]
    questionPrompt.innerText = questionInfo.question
    // Change text for choices
    answers.forEach(answer => {
        const number = answer.dataset['number']
        answer.innerText = questionInfo['choice' + number]
    })

    questionList.splice(questionIndex, 1)
    acceptingAnswers = true
}

// Function to read button click and switch question
answers.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']
        console.log(selectedChoice, selectedAnswer);
        let classToApply = selectedAnswer == questionInfo.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            switchQuestion()
        }, 1000)
    })
})

incrementScore = num => {
    score +=num
    currentScore.innerText = score;
}

beginGame()


