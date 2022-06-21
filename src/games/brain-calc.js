import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';
import { answerBlock } from '../index.js';

export const startQuestion = 'What is the result of the expression?';
const SUM = '+';
const SUB = '-';
const MUL = '*';
const operators = [SUM, SUB, MUL];

function askExpression(a, b, operatorStr) {
  return readlineSync.question(`Question: ${a} ${operatorStr} ${b}\nYour answer: `);
}

export function calcGame() {
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
  return answerBlock(Number(userAnswer), expressionResult);
}
