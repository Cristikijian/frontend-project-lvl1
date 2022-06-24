import { getRandomNumber } from '../utils.js';

export const startQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

function isEven(num) {
  return num % 2 === 0;
}

export function evenGame() {
  const number = getRandomNumber();
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
}
