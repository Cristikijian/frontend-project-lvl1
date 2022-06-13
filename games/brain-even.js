import readlineSync from 'readline-sync';
import { getRandomIntInclusive, QUESTIONS_COUNT } from '../src/index.js';

function getOppositeAnswer(someAnswer) {
  return someAnswer === 'yes' ? 'no' : 'yes';
}

export default function evenGame() {
  let number = getRandomIntInclusive(1, 1000);
  let result = 0;
  let questionNumber = 1;

  while (questionNumber <= QUESTIONS_COUNT) {
    const answer = readlineSync.question(`Question: ${number}\n`);

    if ((number % 2 === 0 && answer === 'yes') || (number % 2 !== 0 && answer === 'no')) {
      result += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${getOppositeAnswer(answer)}'.`);
      break;
    }
    questionNumber += 1;
    number = getRandomIntInclusive(1, 1000);
  }

  return result;
}
