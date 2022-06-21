#!/usr/bin/env node
import { startQuestion, primeGame } from '../src/games/brain-prime.js';
import { startGame } from '../src/index.js';

startGame(startQuestion, primeGame);
