import readlineSync from 'readline-sync';
import startBlock from '../src/cli.js';
import { getRandomIntInclusive, QUESTIONS_COUNT } from '../src/index.js';

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

function primeGame() {
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

const userName = startBlock();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const result = primeGame();
if (result === QUESTIONS_COUNT) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
