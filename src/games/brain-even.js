import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';
import { answerBlock } from '../index.js';

export const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  return num % 2 === 0;
}

export function evenGame() {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

  return answerBlock(userAnswer, correctAnswer);
}
