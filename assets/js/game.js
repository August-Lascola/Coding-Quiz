'use strict';
// Global Variables used in functions
const answers = document.querySelectorAll('.answer-btn').innerText;

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

console.log(answers);
// Add functionality: Game Cycles through questions when button is pressed

// Function to Change Text for Question/answers

// Function to add event listener to button click
