import generateRandomInteger from '../utils.js';

function calc(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    default:
      return operand1 * operand2;
  }
}

function createTask() {
  const operand1 = generateRandomInteger(1, 20);
  const operand2 = generateRandomInteger(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomInteger(0, 2)];

  return {
    question: `${operand1} ${operator} ${operand2}`,
    answer: calc(operand1, operand2, operator).toString(),
  };
}

export default {
  taskDescription: 'What is the result of the expression?',
  createTask,
};
