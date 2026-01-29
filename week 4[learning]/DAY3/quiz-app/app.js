import { questions } from "./question.js";
import { Quiz } from "./quiz.js";

const quizBox = document.getElementById("quiz");
const scoreBox = document.getElementById("score");

const quiz = new Quiz(questions);

function loadQuestion() {
  if (quiz.isFinished()) {
    quizBox.innerHTML = `
      <h3>Quiz Finished</h3>
      <p>Your Score: ${quiz.score}</p>
    `;
    return;
  }

  const q = quiz.getQuestion();

  quizBox.innerHTML = `
    <h3>${q.question}</h3>
    ${q.options
      .map(
        (opt) => `<button class="option">${opt}</button>`
      )
      .join("")}
  `;

  document.querySelectorAll(".option").forEach((btn) => {
    
    btn.addEventListener("click", () => {
      quiz.checkAnswer(btn.innerText);
      loadQuestion();
    });
  });

  scoreBox.innerText = `Score: ${quiz.score}`;
}

loadQuestion();
