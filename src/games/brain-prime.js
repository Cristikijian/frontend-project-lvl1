import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

export function isPrime(num) {
  const minMultiplier = Math.sqrt(num);
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= minMultiplier; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export default function primeGame() {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number}\nYour answer: `);

  if (userAnswer !== correctAnswer) {
    return false;
  }
  console.log('Correct!');
  return true;
}
