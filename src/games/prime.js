import generateRandomInteger from '../utils.js';

function isPrime(value) {
  if (value < 2) {
    return false;
  }

  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}

function createTask() {
  const minValue = 2;
  const maxValue = 100;
  const value = generateRandomInteger(minValue, maxValue);
  return {
    question: value,
    answer: isPrime(value) ? 'yes' : 'no',
  };
}

export default {
  taskDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  createTask,
};
