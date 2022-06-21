#!/usr/bin/env node
import { calcGame, startQuestion } from '../src/games/brain-calc.js';
import { startGame } from '../src/index.js';

startGame(startQuestion, calcGame);
