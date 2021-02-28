import generateRandomInteger from '../utils.js';

function createProgression(step) {
  const result = [];

  for (let i = 1; i <= 10; i += 1) {
    result.push(step * i);
  }
  return result;
}

function hideValue(progression, index) {
  const newProgression = progression;
  const hiddenValue = (newProgression[index]).toString();

  newProgression[index] = '..';

  return {
    newProgression,
    hiddenValue,
  };
}

function createTask() {
  const step = generateRandomInteger(2, 20);
  const index = generateRandomInteger(0, 9);
  const { newProgression: progression, hiddenValue } = hideValue(createProgression(step), index);
  return {
    question: progression.join(' '),
    answer: hiddenValue,
  };
}

export default {
    taskDescription: 'What number is missing in the progression?',
    createTask,
  };
