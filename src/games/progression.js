import generateRandomInteger from '../utils.js';

function createProgression(step) {
  const result = [];
  const numberValues = 10;

  for (let i = 1; i <= numberValues; i += 1) {
    result.push(step * i);
  }
  return result;
}

function hideValue(progression, index) {
  return progression.map((value, i) => (i === index ? '..' : value));
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
