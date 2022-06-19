import readlineSync from 'readline-sync';
import { getRandomIntInclusive, isPrime } from '../utils.js';

export default function primeGame() {
  const number = getRandomIntInclusive();
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  const userAnswer = readlineSync.question(`Question: ${number}\n`);

  if (userAnswer !== correctAnswer) {
    return false;
  }
  console.log(`Your answer: ${userAnswer} `);
  console.log('Correct!');
  return true;
}
