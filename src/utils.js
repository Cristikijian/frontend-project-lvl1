// eslint-disable-next-line import/prefer-default-export

import { MAX_RANDOM_NUMBER, MIN_RANDOM_NUMBER } from './constans.js';

export function getRandomIntInclusive(min = MIN_RANDOM_NUMBER, max = MAX_RANDOM_NUMBER) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
}

export function isEven(num) {
  return num % 2 === 0;
}

export function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i += 1) {
    if (isEven(num)) {
      return false;
    }
  }
  return true;
}
