import generateRandomInteger from '../utils.js';

function getGcd(answer) {
  const [divisor1, divisor2] = answer;
  let commonDivisor = divisor1 < divisor2 ? divisor1 : divisor2;

  for (let i = commonDivisor; i > 1; i -= 1) {
    if (divisor1 % commonDivisor === 0
    && divisor2 % commonDivisor === 0) {
      return commonDivisor.toString();
    }
    commonDivisor -= 1;
  }

  return '1';
}

function createTask() {
  const value1 = generateRandomInteger(1, 100);
  const value2 = generateRandomInteger(1, 100);
  return {
    question: `${value1} ${value2}`,
    answer: getGcd([value1, value2]),
  };
}

export default {
  taskDescription: 'Find the greatest common divisor of given numbers.',
  createTask,
};
