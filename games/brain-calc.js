import readlineSync from 'readline-sync';
import { getRandomIntInclusive, QUESTIONS_COUNT } from '../src/index.js';

function sum(a, b) {
  const answer = readlineSync.question(`Question: ${a} + ${b}\n`);
  return [a + b, Number(answer)];
}

function subtract(a, b) {
  const answer = readlineSync.question(`Question: ${a} - ${b}\n`);
  return [a - b, Number(answer)];
}

function multiply(a, b) {
  const answer = readlineSync.question(`Question: ${a} * ${b}\n`);
  return [a * b, Number(answer)];
}

function getRandomOperator() {
  const operators = [sum, subtract, multiply];
  return operators[Math.floor(Math.random() * operators.length)];
}

export default function calcGame() {
  let result = 0;
  let questionNumber = 1;

  while (questionNumber <= QUESTIONS_COUNT) {
    const expression = getRandomOperator();
    const firstNumber = getRandomIntInclusive(1, 100);
    const secondNumber = getRandomIntInclusive(1, 100);
    const [expressionResult, answer] = expression(firstNumber, secondNumber);

    if (expressionResult === answer) {
      console.log(`Your answer: ${answer} `);
      result += 1;
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer. Correct answer was ${expressionResult}`);
      break;
    }
    questionNumber += 1;
  }
  return result;
}
