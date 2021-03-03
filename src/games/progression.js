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
  newProgression[index] = '..';

  return newProgression;
}

function createTask() {
  const minValueIndex = 0;
  const maxValueIndex = 9;
  const index = generateRandomInteger(minValueIndex, maxValueIndex);

  const minValueStep = 2;
  const maxValueStep = 20;
  const step = generateRandomInteger(minValueStep, maxValueStep);
  const progression = createProgression(step);
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
