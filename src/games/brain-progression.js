import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const firstIndexOfProgression = 0;
const lastIndexOfProgression = 9;
const firstStepIndex = 1;
const lastStepIndex = 10;

function genProgression(progression = []) {
  const stepNumber = getRandomNumber(firstStepIndex, lastStepIndex);
  let startNumber = getRandomNumber();
  while (progression.length <= lastStepIndex) {
    progression.push(startNumber);
    startNumber += stepNumber;
  }
  return progression;
}

export default function progressionGame() {
  const hidenElementIndex = getRandomNumber(firstIndexOfProgression, lastIndexOfProgression);
  const progression = genProgression();
  const numberToGuess = progression[hidenElementIndex];
  progression[hidenElementIndex] = '..';
  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);

  if (Number(userAnswer) !== numberToGuess) {
    return false;
  }
  console.log('Correct!');
  return true;
}
