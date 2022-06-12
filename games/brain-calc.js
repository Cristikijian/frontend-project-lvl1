import readlineSync from 'readline-sync';
import startBlock from '../src/cli.js';
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

function calcGame() {
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
    }
    questionNumber += 1;
  }
  return result;
}

const userName = startBlock();
console.log('What is the result of the expression?');
const result = calcGame();
if (result === QUESTIONS_COUNT) {
  console.log(`Congratulations, ${userName}!`);
} else {
  console.log('You died');
}
