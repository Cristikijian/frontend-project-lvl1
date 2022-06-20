import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const SUM = '+';
const SUB = '-';
const MUL = '*';
const operators = [SUM, SUB, MUL];

function askExpression(a, b, operatorStr) {
  return readlineSync.question(`Question: ${a} ${operatorStr} ${b}\nYour answer: `);
}

export default function calcGame() {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();

  let expressionResult;
  let userAnswer;

  const operator = operators[getRandomNumber(0, operators.length - 1)];

  switch (operator) {
    case SUM:
      userAnswer = askExpression(firstNumber, secondNumber, operator);
      expressionResult = firstNumber + secondNumber;
      break;
    case SUB:
      userAnswer = askExpression(firstNumber, secondNumber, operator);
      expressionResult = firstNumber - secondNumber;
      break;
    case MUL:
      userAnswer = askExpression(firstNumber, secondNumber, operator);
      expressionResult = firstNumber * secondNumber;
      break;
    default:
      break;
  }

  if (Number(userAnswer) !== expressionResult) {
    return false;
  }
  console.log('Correct!');
  return true;
}
