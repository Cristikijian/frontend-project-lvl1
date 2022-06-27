import { getRandomNumber } from '../utils.js';
import { startGame } from '../index.js';

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

function progressionGame() {
  const hidenElementIndex = getRandomNumber(firstIndexOfProgression, lastIndexOfProgression);
  const startNumber = getRandomNumber();
  const stepNumber = getRandomNumber(firstStepIndex, lastStepIndex);
  const progression = genProgression(startNumber, stepNumber);
  const numberToGuess = progression[hidenElementIndex];
  progression[hidenElementIndex] = '..';
  return [`${progression.join(' ')}`, numberToGuess];
}

export default function runProgressionGame() {
  startGame('What number is missing in the progression?', progressionGame);
}
