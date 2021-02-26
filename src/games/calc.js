import randomInteger from '../secondary.js';

function createTask() {
  const operand1 = randomInteger(1, 20);
  const operand2 = randomInteger(1, 20);
  switch (randomInteger(1, 3)) {
    case 1:
      return {
        question: `${operand1} - ${operand2}`,
        answer: toString(operand1 - operand2),
      };
    case 2:
      return {
        question: `${operand1} + ${operand2}`,
        answer: toString(operand1 + operand2),
      };
    default:
      return {
        question: `${operand1} * ${operand2}`,
        answer: toString(operand1 * operand2),
      };
  }
}

function calc(amountRaunds = 3) {
  return {
    taskDescription: 'What is the result of the expression?',
    createTask,
    amountRaunds,
  };
}

export default calc;
