import readlineSync from 'readline-sync';
import startBlock from '../src/cli.js';
import { getRandomIntInclusive, QUESTIONS_COUNT } from '../src/index.js';

function gameCounter(name) {
  let number = getRandomIntInclusive(1, 1000);
  let result = 0;
  let questionNumber = 1;

  while (questionNumber <= QUESTIONS_COUNT) {
    const answer = readlineSync.question(`Question:${number}\n`);

    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      result += 1;
      console.log('Correct!');
    } else {
      console.log('Try again!');
    }
    questionNumber += 1;
    number = getRandomIntInclusive(1, 1000);
  }

  return result === 3 ? console.log(`Congratulations, ${name}!`) : console.log('You died');
}

const userName = startBlock();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameCounter(userName);
