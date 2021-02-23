import readlineSync from 'readline-sync';
import greeting from './cli.js';

function startGame(taskDescription, task, checkAnswer) {
  let question;
  const userName = greeting();
  console.log(taskDescription);

  for (let i = 0; i < 3; i += 1) {
    question = task();
    const rightAnswer = checkAnswer(question.result);

    console.log('Question:', question.expression);
    let userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer.toString() === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.
      Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
export default startGame;
