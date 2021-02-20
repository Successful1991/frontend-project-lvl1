import logicGame from '../index.js';
import randomInteger from '../secondary.js';

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
];

function checkAnswer(value) {
  if (value === undefined) {
    return null;
  }
  return primeNumbers.includes(value) ? 'yes' : 'no';
}

function createQuestion() {
  const value = randomInteger(1, 100);
  return {
    expression: value,
    result: value,
  };
}

function prime() {
  logicGame(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    createQuestion,
    checkAnswer,
  );
}

export default prime;
