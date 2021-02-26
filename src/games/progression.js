import randomInteger from '../secondary.js';

function createProgression() {
  const step = randomInteger(2, 20);
  const result = [];

  for (let i = 1; i <= 10; i += 1) {
    result.push(step * i);
  }
  return result;
}

function hideNum(progression) {
  const newProgression = progression;
  const index = randomInteger(0, 9);
  const hiddenValue = (newProgression[index]).toString();

  newProgression[index] = '..';

  return {
    newProgression,
    hiddenValue,
  };
}

function createTask() {
  const { newProgression: progression, hiddenValue } = hideNum(createProgression());
  return {
    question: progression.join(' '),
    answer: hiddenValue,
  };
}

function getProgressionParam(amountRaunds = 3) {
  return {
    taskDescription: 'What number is missing in the progression?',
    createTask,
    amountRaunds,
  };
}

export default getProgressionParam;
