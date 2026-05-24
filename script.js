const questions = [
    {
        question: "What is the capital of India?",
        answers: [
            { text: "Mumbai", correct: false },
            { text: "Delhi", correct: true },
            { text: "Kolkata", correct: false },
            { text: "Chennai", correct: false }
        ]
    },

    {
        question: "Which language is used for web pages?",
        answers: [
            { text: "Python", correct: false },
            { text: "C++", correct: false },
            { text: "HTML", correct: true },
            { text: "Java", correct: false }
        ]
    },

    {
        question: "2 + 2 = ?",
        answers: [
            { text: "3", correct: false },
            { text: "4", correct: true },
            { text: "5", correct: false },
            { text: "6", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreElement = document.getElementById("score");
const questionBox = document.getElementById("question-box");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    resetState();

    let q = questions[currentQuestion];
    questionElement.innerText = q.question;

    optionButtons.forEach((button, index) => {
        button.innerText = q.answers[index].text;

        button.onclick = () => {
            selectAnswer(button, q.answers[index].correct);
        };
    });
}

function resetState() {
    optionButtons.forEach(button => {
        button.disabled = false;
        button.classList.remove("correct", "wrong");
    });
}

function selectAnswer(button, correct) {

    optionButtons.forEach(btn => btn.disabled = true);

    if(correct){
        button.classList.add("correct");
        score++;
    }else{
        button.classList.add("wrong");
    }
}

nextButton.addEventListener("click", () => {
    currentQuestion++;

    if(currentQuestion < questions.length){
        showQuestion();
    }else{
        showResult();
    }
});

function showResult(){
    questionBox.classList.add("hide");
    resultBox.classList.remove("hide");

    scoreElement.innerText = score + " / " + questions.length;
}

showQuestion();