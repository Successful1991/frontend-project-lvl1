import generateRandomInteger from '../utils.js';

function createProgression(length, step) {
  const result = [];

  for (let i = 1; i <= length; i += 1) {
    result.push(step * i);
  }
  return result;
}

function hideValue(progression, index) {
  return progression.map((value, i) => (i === index ? '..' : value));
}

function createTask() {
  const progressionLength = 10;
  const index = generateRandomInteger(0, progressionLength - 1);
  const step = generateRandomInteger(1, 20);

  const progression = createProgression(progressionLength, step);
  const newProgression = hideValue(progression, index);

  return {
    question: newProgression.join(' '),
    answer: progression[index].toString(),
  };
}

export default {
  taskDescription: 'What number is missing in the progression?',
  createTask,
};
