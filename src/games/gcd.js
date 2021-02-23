import startGame from '../index.js';
import randomInteger from '../secondary.js';

function checkAnswer(answer) {
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

function gcd() {
  startGame(
    'Find the greatest common divisor of given numbers.',
    createQuestion,
    checkAnswer,
  );
}

export default gcd;
