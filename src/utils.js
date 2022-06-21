// eslint-disable-next-line import/prefer-default-export

import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from './constans.js';

// eslint-disable-next-line import/prefer-default-export
export function getRandomNumber(min = MIN_RANDOM_NUMBER, max = MAX_RANDOM_NUMBER) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
