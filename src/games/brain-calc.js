import { getRandomNumber } from '../utils.js';

export const startQuestion = 'What is the result of the expression?';

function sum(a, b) {
  return [a + b, '+'];
}

function subtract(a, b) {
  return [a - b, '-'];
}

function multiply(a, b) {
  return [a * b, '*'];
}

function getRandomOperator() {
  const operators = [sum, subtract, multiply];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
}

export function calcGame() {
  const expression = getRandomOperator();
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const [expressionResult, operatorSymbol] = expression(firstNumber, secondNumber);

  const question = `${firstNumber} ${operatorSymbol} ${secondNumber}`;
  return [question, expressionResult];
}
