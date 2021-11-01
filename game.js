const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
   { 
    question: "Inside which HTML element do we put the JavaScript ?",
    choice1: "<javascript>",
    choice2: "<js>",
    choice3: "<scripting>",
    choice4: "<script>",
    answer: 4,
   },

   { 
    question: "Where is the correct place to insert a JavaScript?",
    choice1: "body",
    choice2: "head",
    choice3: "head and body",
    choice4: "footer",
    answer: 3,
   },


{ 
    question: "How do you round the number 7.25, to the nearest integer?",
    choice1: "Math.round(7.25)",
    choice2: "Math.rnd(7.25)",
    choice3: "rnd(7.25)",  
    choice4: "round(7.25)",
    answer: 1,
   },

   { 
    question: "How do you create a function in JavaScript?",
    choice1: "function myFunction()",  
    choice2:  "function = myFunction()",
    choice3: "function:myFunction()",
    choice4: "Not Possible",
    answer: 1,
   },

   { 
    question: "How to write an IF statement in JavaScript?",
    choice1: "if (i == 5)",  
    choice2: "if i == 5 then",
    choice3: "if i = 5",
    choice4: "if i = 5",
    answer: 1,
   },
   {
   question: "Which operator is used to assign a value to a variable?",
    choice1: "x",  
    choice2: "*",
    choice3: "=",
    choice4: "-",
    answer: 3,
   },
];
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    console.log(availableQuesions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
       
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        
        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
        },1000);
        selectedChoice.parentElement.classList.add(classToApply);

        
        getNewQuestion();
    });
});

startGame();
