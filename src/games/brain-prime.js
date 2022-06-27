import { getRandomNumber } from '../utils.js';
import { startGame } from '../index.js';

function isPrime(num) {
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

function primeGame() {
  const number = getRandomNumber();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
}
export default function runPrimeGame() {
  startGame('Answer "yes" if given number is prime. Otherwise answer "no".', primeGame);
}
