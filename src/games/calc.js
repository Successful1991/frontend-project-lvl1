import generateRandomInteger from '../utils.js';

function calc(operand1, operand2, operator) {
  switch (operator) {
    case '+':
      return operand1 + operand2;
    case '-':
      return operand1 - operand2;
    case '*':
      return operand1 * operand2;
    default:
      return null;
  }
}

function createTask() {
  const minValue = 1;
  const maxValue = 20;
  const operand1 = generateRandomInteger(minValue, maxValue);
  const operand2 = generateRandomInteger(minValue, maxValue);
  const operators = ['+', '-', '*'];
  const operator = operators[generateRandomInteger(0, operators.length - 1)];

  return {
    question: `${operand1} ${operator} ${operand2}`,
    answer: calc(operand1, operand2, operator).toString(),
  };
}

export default {
  taskDescription: 'What is the result of the expression?',
  createTask,
};
