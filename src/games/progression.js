import randomInteger from '../secondary.js';

function createProgression() {

  const step = randomInteger(2, 20);
  const result = [];

  for (let i = 1; i <= 10; i += 1) {
    result.push(step * i);
  }

  return hiddenNum(result);
}


function hiddenNum(progression) {

  const index = randomInteger(0, 9);
  const hiddenValue = progression[index];

  progression[index] = '..';

  return {
    progression,
    hiddenValue,
  };
}


function createTask() {
  const { progression, hiddenValue } = createProgression();
  return {
    question: progression.join(' '),
    answer: hiddenValue,
  };
}

function progression(amountRaunds = 3) {
  return {
    taskDescription: 'What number is missing in the progression?',
    createTask,
    amountRaunds,
  };
}

export default progression;
