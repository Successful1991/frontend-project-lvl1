import readlineSync from 'readline-sync';
import greeting from './cli.js';

function startGame(parameters, roundsCount = 3) {
  const { taskDescription, createTask } = parameters;
  const userName = greeting();
  console.log(taskDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, answer } = createTask();

    console.log('Question:', question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.
      Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export default startGame;
