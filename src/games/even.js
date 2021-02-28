import generateRandomInteger from '../utils.js';

function isEven(value) {
  return value % 2 === 0 ? 'yes' : 'no';
}

function createTask() {
  const value = generateRandomInteger(1, 100);
  return {
    question: value,
    answer: isEven(value),
  };
}

export default {
  taskDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
  createTask,
};
