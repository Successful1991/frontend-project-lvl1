import generateRandomInteger from '../utils.js';

function isEven(value) {
  return value % 2 === 0;
}

function createTask() {
  const minValue = 1;
  const maxValue = 100;
  const value = generateRandomInteger(minValue, maxValue);
  return {
    question: value,
    answer: isEven(value) ? 'yes' : 'no',
  };
}

export default {
  taskDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  createTask,
};
