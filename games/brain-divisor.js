import readlineSync from 'readline-sync';
import { getRandomIntInclusive, QUESTIONS_COUNT } from '../src/index.js';

function getGreatestDivider(a, b) {
  if (b) {
    return getGreatestDivider(b, a % b);
  }
  return Math.abs(a);
}

export default function divisorGame() {
  let result = 0;
  let questionNumber = 1;

  while (questionNumber <= QUESTIONS_COUNT) {
    const firstNumber = getRandomIntInclusive(1, 100);
    const secondNumber = getRandomIntInclusive(1, 100);
    const greatestDivider = getGreatestDivider(firstNumber, secondNumber);
    const answer = readlineSync.question(`Question: ${firstNumber} ${secondNumber}\n`);
    if (greatestDivider === Number(answer)) {
      console.log(`Your answer: ${answer} `);
      result += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer. Correct answer was ${greatestDivider}`);
    }
    questionNumber += 1;
  }
  return result;
}
