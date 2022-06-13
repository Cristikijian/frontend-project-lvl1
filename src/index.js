import startBlock from './cli.js';

export function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

export const QUESTIONS_COUNT = 3;

export function startGame(startQuestion, game) {
  const userName = startBlock();
  console.log(startQuestion);
  const result = game();
  if (result === QUESTIONS_COUNT) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}
