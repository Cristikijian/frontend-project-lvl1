import readlineSync from 'readline-sync';
import { startGame, getRandomIntInclusive, QUESTIONS_COUNT } from '../src/index.js';

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

export default function primeGame() {
  let result = 0;
  let questionNumber = 1;

  while (questionNumber <= QUESTIONS_COUNT) {
    const number = getRandomIntInclusive(1, 100);
    const isPrimeNumber = isPrime(number);
    const answer = readlineSync.question(`Question: ${number}\n`);
    console.log(isPrimeNumber, answer);
    if ((isPrimeNumber && answer === 'yes') || (!isPrimeNumber && answer === 'no')) {
      console.log(`Your answer: ${answer} `);
      result += 1;
      console.log('Correct!');
    } else {
      console.log('Try again!');
    }
    questionNumber += 1;
  }
  return result;
}

startGame();
