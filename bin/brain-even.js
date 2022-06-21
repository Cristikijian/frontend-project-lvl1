#!/usr/bin/env node
import { evenGame, startQuestion } from '../src/games/brain-even.js';
import { startGame } from '../src/index.js';

startGame(startQuestion, evenGame);
