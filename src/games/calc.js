import randomInteger from '../secondary.js';
import logicGame from '../index.js';

function checkAnswer(question) {
  if (question === undefined) {
    return null;
  }
  return question;
}

function createQuestion() {
  const operand1 = randomInteger(1, 20);
  const operand2 = randomInteger(1, 20);
  const question = {};
  switch (randomInteger(1, 3)) {
    case 1:
      question.expression = `${operand1} - ${operand2}`;
      question.result = operand1 - operand2;
      break;
    case 2:
      question.expression = `${operand1} + ${operand2}`;
      question.result = operand1 + operand2;
      break;
    default:
      question.expression = `${operand1} * ${operand2}`;
      question.result = operand1 * operand2;
      break;
  }
  return question;
}

function calc() {
  logicGame(
    'What is the result of the expression?',
    createQuestion,
    checkAnswer,
  );
}

export default calc;
