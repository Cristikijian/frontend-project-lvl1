#!/usr/bin/env node
import progressionGame from '../src/games/brain-progression.js';
import startGame from '../src/index.js';

startGame('What number is missing in the progression?', progressionGame);
