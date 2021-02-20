import readlineSync from 'readline-sync';
import greeting from './cli.js';

function logicGame(questionText, task, checkAnswer) {
  let question;
  const userName = greeting();
  let step = 0;
  do {
    question = task();
    const rightAnswer = checkAnswer(question.result);

    console.log('Question: ', question.expression);
    let value = readlineSync.question('Your answer: ');

    if (typeof rightAnswer === 'number' && !Number.isNaN(Number(value))) {
      value = Number(value);
    }
    if (rightAnswer === value) {
      console.log('Correct!');
    } else {
      console.log(`'${value}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
      Let's try again, ${userName}!`);
      return;
    }

    step += 1;
  } while (step < 3);

  console.log(`Congratulations, ${userName}!`);
}
export default logicGame;
