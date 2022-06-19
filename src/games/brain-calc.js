import readlineSync from 'readline-sync';
import { getRandomIntInclusive } from '../utils.js';

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
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
}

export default function calcGame() {
  const expression = getRandomOperator();
  const firstNumber = getRandomIntInclusive();
  const secondNumber = getRandomIntInclusive();
  const [expressionResult, userAnswer] = expression(firstNumber, secondNumber);

  if (userAnswer !== expressionResult) {
    return false;
  }
  console.log(`Your answer: ${userAnswer} `);
  console.log('Correct!');
  return true;
}
