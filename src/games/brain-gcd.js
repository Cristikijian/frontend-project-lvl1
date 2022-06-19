import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../utils.js';

function getGreatestDivider(a, b) {
  if (b) {
    return getGreatestDivider(b, a % b);
  }
  return Math.abs(a);
}

export default function divisorGame() {
  const firstNumber = getRandomIntInclusive();
  const secondNumber = getRandomIntInclusive();
  const greatestDivider = getGreatestDivider(firstNumber, secondNumber);
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\n`);
  if (Number(userAnswer) !== greatestDivider) {
    return false;
  }
  console.log(`Your answer: ${userAnswer} `);
  console.log('Correct!');
  return true;
}
