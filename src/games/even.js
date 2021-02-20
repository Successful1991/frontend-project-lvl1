import randomInteger from '../secondary.js';
import logicGame from '../index.js';

function checkAnswer(number) {
  if (number === undefined) {
    return null;
  }
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
  logicGame(
    'Answer "yes" if the number is even, otherwise answer "no".',
    createQuestion,
    checkAnswer,
  );
}

export default even;
