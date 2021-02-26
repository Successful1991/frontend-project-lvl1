import randomInteger from '../secondary.js';

function createTask() {
  const operand1 = randomInteger(1, 20);
  const operand2 = randomInteger(1, 20);
  switch (randomInteger(1, 3)) {
    case 1:
      return {
        question: `${operand1} - ${operand2}`,
        answer: (operand1 - operand2).toString(),
      };
    case 2:
      return {
        question: `${operand1} + ${operand2}`,
        answer: (operand1 + operand2).toString(),
      };
    default:
      return {
        question: `${operand1} * ${operand2}`,
        answer: (operand1 * operand2).toString(),
      };
  }
}

function getCalcParam(amountRaunds = 3) {
  return {
    taskDescription: 'What is the result of the expression?',
    createTask,
    amountRaunds,
  };
}

export default getCalcParam;
