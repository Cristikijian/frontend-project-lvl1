#!/usr/bin/env node
import calcGame from '../games/brain-calc.js';
import { startGame } from '../src/index.js';

startGame('What is the result of the expression?', calcGame);
