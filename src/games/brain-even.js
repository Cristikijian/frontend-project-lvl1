import readlineSync from 'readline-sync';
import { getRandomIntInclusive, isEven } from '../utils.js';

export default function evenGame() {
  const number = getRandomIntInclusive();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number}\n`);

  if (userAnswer !== correctAnswer) {
    return false;
  }
  console.log(`Your answer: ${userAnswer} `);
  console.log('Correct!');
  return true;
}
