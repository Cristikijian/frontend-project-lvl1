import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../utils.js';

export default function progressionGame() {
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
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}\n`);

  if (Number(userAnswer) !== numberToGuess) {
    return false;
  }
  console.log(`Your answer: ${userAnswer} `);
  console.log('Correct!');
  return true;
}
