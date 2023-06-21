#!/usr/bin/env node

import game from '../src/games/game-progression.js';
import rules from '../src/index.js';
import { name } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);

const gameRules = rules();
gameRules.setUserName(userName);
gameRules.reset();
game(gameRules).start();
