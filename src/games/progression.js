import logicGame from '../index.js';
import randomInteger from '../secondary.js';

function checkAnswer(question) {
  return question;
}

function createQuestion() {
  const step = randomInteger(2, 20);
  const indexHideValue = randomInteger(0, 9);
  const result = [];
  for (let i = 1; i <= 10; i += 1) {
    result.push(step * i);
  }
  const hideValue = result[indexHideValue];
  result[indexHideValue] = '..';
  return {
    expression: result.join(' '),
    result: hideValue,
  };
}

function progression() {
  logicGame(
    'What number is missing in the progression?',
    createQuestion,
    checkAnswer,
  );
}

export default progression;
