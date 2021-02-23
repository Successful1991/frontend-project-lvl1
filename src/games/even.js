import randomInteger from '../secondary.js';
import startGame from '../index.js';

function checkAnswer(number) {
  return number % 2 === 0 ? 'yes' : 'no';
}

function createQuestion() {
  const value = randomInteger(1, 100);
  return {
    expression: value,
    result: value,
  };
}

function even() {
  startGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    createQuestion,
    checkAnswer,
  );
}

export default even;
