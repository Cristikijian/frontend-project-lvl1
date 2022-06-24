import { getRandomNumber } from '../utils.js';

export const startQuestion = ('Find the greatest common divisor of given numbers.');

function getGreatestDivider(a, b) {
  if (b) {
    return getGreatestDivider(b, a % b);
  }
  return Math.abs(a);
}

export function divisorGame() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const greatestDivider = getGreatestDivider(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  return [question, greatestDivider];
}
