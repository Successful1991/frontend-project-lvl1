import randomInteger from '../secondary.js';

function createTask() {
  const value = randomInteger(1, 100);
  return {
    question: value,
    answer: value % 2 === 0 ? 'yes' : 'no',
  };
}

function getEvenParam(amountRaunds = 3) {
  return {
    taskDescription: 'Answer "yes" if the number is even, otherwise answer "no".',
    createTask,
    amountRaunds,
  };
}

export default getEvenParam;
