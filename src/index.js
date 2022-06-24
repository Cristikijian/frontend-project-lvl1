import readlineSync from 'readline-sync';
import startBlock from './cli.js';
import { QUESTIONS_COUNT } from './constans.js';

// eslint-disable-next-line import/prefer-default-export
export function startGame(startQuestion, playGame) {
  const userName = startBlock();
  console.log(startQuestion);

  for (let i = 1; i <= QUESTIONS_COUNT; i += 1) {
    const [question, correctAnswer] = playGame();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (userAnswer !== correctAnswer.toString()) {
      console.log(`${userAnswer} is wrong answer ;( Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
}
