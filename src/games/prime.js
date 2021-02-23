import startGame from '../index.js';
import randomInteger from '../secondary.js';

const primeNumbers = [
  2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
  43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
];

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
