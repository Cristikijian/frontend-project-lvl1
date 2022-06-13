import readlineSync from 'readline-sync';
import startBlock from '../src/cli.js';
import { getRandomIntInclusive, QUESTIONS_COUNT } from '../src/index.js';

function progressionGame() {
  let result = 0;
  let questionNumber = 1;

  while (questionNumber <= QUESTIONS_COUNT) {
    const unknownElement = getRandomIntInclusive(0, 9);
    const stepNumber = getRandomIntInclusive(1, 10);
    let startNumber = getRandomIntInclusive(1, 50);
    const progression = [];

    while (progression.length <= 10) {
      progression.push(startNumber);
      startNumber += stepNumber;
    }

    const numberToGuess = progression[unknownElement];
    progression[unknownElement] = '..';
    const answer = readlineSync.question(`Question: ${progression}\n`);

    if (numberToGuess === Number(answer)) {
      console.log(`Your answer: ${answer} `);
      result += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer. Correct answer was ${numberToGuess}`);
    }
    questionNumber += 1;
  }
  return result;
}

const userName = startBlock();
console.log('What number is missing in the progression?');
const result = progressionGame();
if (result === QUESTIONS_COUNT) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log(`Let's try again, ${userName}!`);
}
