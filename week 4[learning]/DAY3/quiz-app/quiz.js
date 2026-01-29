export class Quiz {
  constructor(questions) {
    this.questions = questions;
    this.index = 0;
    this.score = 0;
  }

  getQuestion() {
    return this.questions[this.index];
  }

  checkAnswer(selected) {
    if (selected === this.getQuestion().answer) {
      this.score++;
    }
    this.index++;
  }

  isFinished() {
    return this.index === this.questions.length;
  }
}
