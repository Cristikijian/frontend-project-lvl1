import readlineSync from 'readline-sync';
import startBlock from '../src/cli.js';

const QUESTIONS_COUNT = 3;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

function gameCounter() {
  let number = getRandomIntInclusive(1, 1000);
  let result = 0;
  let questionNumber = 1;
  const userName = startBlock();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

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

  return result === 3 ? console.log(`Congratulations, ${userName}!`) : console.log('You died');
}

gameCounter();
