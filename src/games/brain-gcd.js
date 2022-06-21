import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';
import { answerBlock } from '../index.js';

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
  const userAnswer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\nYour answer: `);
  return answerBlock(Number(userAnswer), greatestDivider);
}
