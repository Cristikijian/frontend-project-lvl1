#!/usr/bin/env node
import { divisorGame, startQuestion } from '../src/games/brain-gcd.js';
import { startGame } from '../src/index.js';

startGame(startQuestion, divisorGame);
