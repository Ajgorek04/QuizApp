const container = document.querySelector(".container");
const startGame = document.querySelector("#startGame");
const questionsDiv = document.querySelector(".questions");

let currentQuestionIndex = 0;

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
];
const questionTitle = document.querySelector(".questions h1");
const questionText = document.querySelector(".questions p");
const answerList = document.querySelectorAll(".questions ul li");

function updateQuestion(index) {
    const question = questionsList[index];
    questionTitle.textContent = `Question ${index + 1}`;
    questionText.textContent = question.question;

    answerList.forEach((answerElement, answerIndex) => {
        answerElement.textContent = `${String.fromCharCode(
            65 + answerIndex
        )}. ${question.answers[answerIndex]}`;
    });
}
