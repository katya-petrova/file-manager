#!/usr/bin/env node
import readline from 'readline';
import { getFileDir } from './utils/getFileDirectory.js';

const rl = readline.createInterface(process.stdin, process.stdout);

const args = process.argv.slice(2).join().split('=');
const username = args[1];
const welcomeMsg = `Welcome to the File Manager, ${username}! \n`;
const goodbyeMsg = `Thank you for using File Manager, ${username}, goodbye!`;
const { __dirname, __filename } = getFileDir(import.meta.url);

rl.write(welcomeMsg);

rl.write(__dirname);

rl.on('line', (input) => {
  if (input === '.exit') {
    exitProcess();
  }
});

rl.on('SIGINT', function () {
  exitProcess();
});

function exitProcess() {
  rl.write(goodbyeMsg);
  process.exit();
}
