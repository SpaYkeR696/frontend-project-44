#!/usr/bin/env node
/* eslint-disable import/extensions */

import { name } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = name();
console.log(`Hello, ${userName}!`);
