import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

function isEven(num) {
  return num % 2 === 0;
}

export default function evenGame() {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

  if (userAnswer !== correctAnswer) {
    return false;
  }
  console.log('Correct!');
  return true;
}
