import { getRandomNumber } from '../utils.js';
import { startGame } from '../index.js';

export function isEven(num) {
  return num % 2 === 0;
}

function evenGame() {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
}

export default function runEvenGame() {
  startGame('Answer "yes" if the number is even, otherwise answer "no".', evenGame);
}
