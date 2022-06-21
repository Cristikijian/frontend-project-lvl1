#!/usr/bin/env node
import { progressionGame, startQuestion } from '../src/games/brain-progression.js';
import { startGame } from '../src/index.js';

startGame(startQuestion, progressionGame);
