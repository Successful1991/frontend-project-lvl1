import randomInteger from '../secondary.js';
import logicGame from '../index.js';

function checkAnswer(question) {
  return question;
}

function createQuestion() {
  const operand1 = randomInteger(1, 20);
  const operand2 = randomInteger(1, 20);
  switch (randomInteger(1, 3)) {
    case 1:
      return {
        expression: `${operand1} - ${operand2}`,
        result: operand1 - operand2,
      };
    case 2:
      return {
        expression: `${operand1} + ${operand2}`,
        result: operand1 + operand2,
      };
    default:
      return {
        expression: `${operand1} * ${operand2}`,
        result: operand1 * operand2,
      };
  }
}

function calc() {
  logicGame(
    'What is the result of the expression?',
    createQuestion,
    checkAnswer,
  );
}

export default calc;
