import randomInteger from '../secondary.js';

function isPrime(value) {
  for (let i = 2; i <= value / 2; i += 1) {
    if (value % i === 0) {
      return false;
    }
  }

  return true;
}

function createTask() {
  const value = randomInteger(2, 100);
  return {
    question: value,
    answer: isPrime(value) ? 'yes' : 'no',
  };
}

function prime(amountRaunds = 3) {
  return {
    taskDescription: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    createTask,
    amountRaunds,
  };
}

export default prime;
