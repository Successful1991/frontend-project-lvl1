import startGame from '../index.js';
import randomInteger from '../secondary.js';

function checkAnswer(value) {
  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return 'no';
    }
  }

  return 'yes';
}

function createQuestion() {
  const value = randomInteger(2, 100);
  return {
    expression: value,
    result: value,
  };
}

function prime() {
  startGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    createQuestion,
    checkAnswer,
  );
}

export default prime;
