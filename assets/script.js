var startButton = document.querySelector('#start-button');
var timerEl = document.querySelector('#clock');
var count;
var timerCount = 70;
var question;
var wrongChoice = false;
var rightChoice = false;
startScore = 70;//?? may need to be in score.js


var currentQuestionIndex = 0;
var quizQuestions = [
    {
        question: 'Commonly used data type Do Not include?',
        answers: {
            a: 'strings',
            b: 'Boolean',
            c: 'alerts',
            d: 'numbers',
        },
        correctAnswer: 'alerts'
    },
    {
        question: 'The condition in an if/else statement is enclosed within?',
        answers: {
            a: 'curly brackets',
            b: 'quotes',
            c: 'parentheses',
            d: 'square brackets'
        },
        correctAnswer: 'parentheses'

    },
    {
        question: 'Arrays in JavaScript can be used to store?',
        answers: {
            a: 'numbers and strings',
            b: 'others Arrays',
            c: 'boolean',
            d: 'all of the above'
        },
        correctAnswer: 'all of the above'

    },
    {
        question: 'String values must be enclosed within --- when being assigned to variables?',
        answers: {
            a: 'commas',
            b: 'curly brackets',
            c: 'quotes',
            d: 'parentheses',
        },
        correctAnswer: 'quotes'

    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is?',
        answers: {
            a: 'JavaScript',
            b: 'terminal/bash',
            c: 'alerts',
            d: 'console.log',
        },
        correctAnswer: 'console.log'

    },
]


function startGame() {
    startButton.remove();
    var currentQuestion = quizQuestions[currentQuestionIndex];
    displayQuestion(currentQuestion);
    timer();
}


function timer() {
    count = setInterval(function () {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount <= 0) {
            clearInterval(count);
            endGame()
        }
    }, 1000)
    return timerCount;

}
startButton.addEventListener('click', startGame);

function displayQuestion(question) {
    var questionElem = document.createElement('h3');

    questionElem.textContent = question.question;
    document.getElementById('question').innerHTML = "";
    document.getElementById('question').append(questionElem);

    var btnElA = document.createElement('button');
    btnElA.textContent = quizQuestions[currentQuestionIndex].answers.a;
    document.getElementById('answer-a').innerHTML = "";
    document.getElementById('answer-a').appendChild(btnElA);
    btnElA.setAttribute('style', 'padding:10px', 'height:auto');

    var btnElB = document.createElement('button');
    btnElB.textContent = quizQuestions[currentQuestionIndex].answers.b;
    document.getElementById('answer-b').innerHTML = "";
    document.getElementById('answer-b').appendChild(btnElB);
    btnElB.setAttribute('style', 'padding:10px', 'height:auto');

    var btnElC = document.createElement('button');
    btnElC.textContent = quizQuestions[currentQuestionIndex].answers.c;
    document.getElementById('answer-c').innerHTML = "";
    document.getElementById('answer-c').appendChild(btnElC);
    btnElC.setAttribute('style', 'padding:10px', 'height:auto');

    var btnElD = document.createElement('button');
    btnElD.textContent = quizQuestions[currentQuestionIndex].answers.d;
    document.getElementById('answer-d').innerHTML = "";
    document.getElementById('answer-d').appendChild(btnElD);
    btnElD.setAttribute('style', 'padding:10px', 'height:auto');
    
    btnElA.onclick = checkAnswer;
    btnElB.onclick = checkAnswer;
    btnElC.onclick = checkAnswer;
    btnElD.onclick = checkAnswer;
};

function checkAnswer(event) {
    console.log(event.target.textContent);
    if (quizQuestions[currentQuestionIndex].correctAnswer !== event.target.textContent) {
        timerCount = timerCount - 10;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex >= quizQuestions.length) {
        endGame();
    } else {
        displayQuestion(quizQuestions[currentQuestionIndex])

    }

}

function endGame() {
    var timeScore = startScore - timerCount
    localStorage.setItem('score', JSON.stringify(timeScore))
    
    window.location.href = "results.html"
}