const container = document.querySelector(".container");
const startGame = document.querySelector("#startGame");
const questionsDiv = document.querySelector(".questions");

let currentQuestionIndex = 0;
let score = 0;

startGame.addEventListener("click", () => {
    startGame.style.display = "none";
    questionsDiv.style.display = "flex";

    // Wyświetlenie pierwszego pytania
    updateQuestion(currentQuestionIndex);
});

const questionsList = [
    {
        question: "Co to jest JavaScript ?",
        answers: [
            "Język programowania",
            "Typ danych",
            "Marka samochodu",
            "Potrawa",
        ],
        correctAnswer: 0,
    },
    {
        question: "Jaka jest najlepsza marka samochodu ?",
        answers: ["BMW", "Audi", "Mercedes", "Ferrari"],
        correctAnswer: 1,
    },
    {
        question: "Jaka jest stolica Polski ?",
        answers: ["Kielce", "Kraków", "Polska", "Warszawa"],
        correctAnswer: 3,
    },
    {
        question: "Ile dzień ma godzin ?",
        answers: ["14", "12", "24", "15"],
        correctAnswer: 2,
    },
    {
        question: "Co to minecraft ?",
        answers: ["Potrawa", "Piosenka", "Gra", "Film"],
        correctAnswer: 2,
    },
];
const questionTitle = document.querySelector(".questions h1");
const questionText = document.querySelector(".questions p");
const answerList = document.querySelectorAll(".questions ul li");
const numerOfAnswers = document.querySelector(".questions h2");

function updateQuestion(index) {
    if (currentQuestionIndex < 5) {
        const question = questionsList[index];
        questionTitle.textContent = `Question ${index + 1}`;
        questionText.textContent = question.question;

        answerList.forEach((answerElement, answerIndex) => {
            answerElement.textContent = `${String.fromCharCode(
                65 + answerIndex
            )}. ${question.answers[answerIndex]}`;
        });
        numerOfAnswers.textContent = `${index + 1} / 5`;
    }
}

const endGame = document.querySelector(".endGame");

answerList.forEach((answer) => {
    answer.addEventListener("click", () => {
        const selectedAnswerIndex = Array.from(answerList).indexOf(answer);
        const currentQuestion = questionsList[currentQuestionIndex];

        if (currentQuestionIndex < 4) {
            if (selectedAnswerIndex === currentQuestion.correctAnswer) {
                score++;
                console.log(score);
            }

            currentQuestionIndex++;
            updateQuestion(currentQuestionIndex);
        } else if (currentQuestionIndex === 4) {
            if (selectedAnswerIndex === currentQuestion.correctAnswer) {
                score++;
                console.log(score);
            }

            end();
        }
    });
});

function end() {
    container.style.display = "none";
    endGame.style.display = "flex";

    const scoreText = document.querySelector(".endGame p");

    scoreText.textContent = `Your Score: ${score} / 5`;
}

const playAgain = document.querySelector(".endGame button");

playAgain.addEventListener("click", () => {
    location.reload();
});
