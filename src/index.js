import readlineSync from 'readline-sync';
import greeting from './cli.js';

function logicGame(descriptionTask, task, checkAnswer) {
  let question;
  const userName = greeting();
  let step = 0;
  console.log(descriptionTask);

  do {
    question = task();
    const rightAnswer = checkAnswer(question.result);

    console.log('Question: ', question.expression);
    let userAnswer = readlineSync.question('Your answer: ');

    if (typeof rightAnswer === 'number' && !Number.isNaN(Number(userAnswer))) {
      userAnswer = Number(userAnswer);
    }
    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
      Let's try again, ${userName}!`);
      return;
    }
    step += 1;
  } while (step < 3);

  console.log(`Congratulations, ${userName}!`);
}
export default logicGame;
