import startBlock from './cli.js';
import { QUESTIONS_COUNT } from './constans.js';

export default function startGame(startQuestion, playGame) {
  const userName = startBlock();
  console.log(startQuestion);
  let result = 0;

  for (let i = 1; i <= QUESTIONS_COUNT; i += 1) {
    if (playGame()) {
      result += 1;
    } else {
      break;
    }
  }
  if (result === QUESTIONS_COUNT) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
}
