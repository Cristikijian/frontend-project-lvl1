import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

function getGreatestDivider(a, b) {
  if (b) {
    return getGreatestDivider(b, a % b);
  }
  return Math.abs(a);
}

export default function divisorGame() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const greatestDivider = getGreatestDivider(firstNumber, secondNumber);
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\nYour answer: `);
  if (Number(userAnswer) !== greatestDivider) {
    return false;
  }
  console.log('Correct!');
  return true;
}
