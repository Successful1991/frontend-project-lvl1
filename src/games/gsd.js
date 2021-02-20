import logicGame from '../index.js';
import randomInteger from '../secondary.js';

function rightAnswer(answer) {
  if (!Array.isArray(answer) || answer.length < 2) {
    return null;
  }

  const [divisor1, divisor2] = answer;
  let commonDivisor = divisor1 < divisor2 ? divisor1 : divisor2;
  do {
    if (divisor1 % commonDivisor === 0
    && divisor2 % commonDivisor === 0) {
      return commonDivisor;
    }
    commonDivisor -= 1;
  } while (commonDivisor > 1);
  return 1;
}

function createQuestion() {
  const value1 = randomInteger(1, 100);
  const value2 = randomInteger(1, 100);
  return {
    expression: `${value1} ${value2}`,
    result: [value1, value2],
  };
}

function gsd() {
  logicGame(
    'Find the greatest common divisor of given numbers.',
    createQuestion,
    rightAnswer,
  );
}

export default gsd;
