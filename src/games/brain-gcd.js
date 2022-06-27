import { getRandomNumber } from '../utils.js';
import { startGame } from '../index.js';

function getGreatestDivider(a, b) {
  if (b) {
    return getGreatestDivider(b, a % b);
  }
  return Math.abs(a);
}

function divisorGame() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const greatestDivider = getGreatestDivider(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, greatestDivider];
}

export default function runDivisorGame() {
  startGame('Find the greatest common divisor of given numbers.', divisorGame);
}
