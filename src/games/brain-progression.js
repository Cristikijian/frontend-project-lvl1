import { getRandomNumber } from '../utils.js';

export const startQuestion = ('What number is missing in the progression?');
const firstIndexOfProgression = 0;
const lastIndexOfProgression = 9;
const firstStepIndex = 1;
const lastStepIndex = 10;

function genProgression(startNumber, stepNumber) {
  const progression = [];
  let number = Number(startNumber);
  while (progression.length <= lastStepIndex) {
    progression.push(number);
    number += stepNumber;
  }
  return progression;
}

export function progressionGame() {
  const hidenElementIndex = getRandomNumber(firstIndexOfProgression, lastIndexOfProgression);
  const startNumber = getRandomNumber();
  const stepNumber = getRandomNumber(firstStepIndex, lastStepIndex);
  const progression = genProgression(startNumber, stepNumber);
  const numberToGuess = progression[hidenElementIndex];
  progression[hidenElementIndex] = '..';
  return [`${progression.join(' ')}`, numberToGuess];
}
