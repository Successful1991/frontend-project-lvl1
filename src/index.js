import readlineSync from 'readline-sync';
import greeting from './cli.js';

function startGame(parameters) {
  const { taskDescription, createTask, amountRaunds} = parameters;
  let task;
  const userName = greeting();
  console.log(taskDescription);

  for (let i = 0; i < amountRaunds; i += 1) {
    task = createTask();

    console.log('Question:', task.question);
    const userAnswer = readlineSync.question('Your answer: ');

    if (task.answer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${task.answer}'.
      Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export default startGame;
