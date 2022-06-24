import { getRandomNumber } from '../utils.js';

export const startQuestion = ('What number is missing in the progression?');
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

export function progressionGame() {
  const hidenElementIndex = getRandomNumber(firstIndexOfProgression, lastIndexOfProgression);
  const progression = genProgression();
  const numberToGuess = progression[hidenElementIndex];
  progression[hidenElementIndex] = '..';
  return [`${progression.join(' ')}`, numberToGuess];
}
