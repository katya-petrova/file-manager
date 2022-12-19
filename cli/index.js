#!/usr/bin/env node
import readline from 'readline';
import { parseArgs } from './parseArguments.js';
import { showOSInfo } from './os.js';
import { calculateHash } from './hash.js';
import { basicOperations } from './basic.js';
import { compressDecompress } from './compress.js';
import { navigation, currentDirectory } from './navigation.js';

const rl = readline.createInterface(process.stdin, process.stdout);

const args = process.argv.slice(2);
const initArgs = args.join().split('=');
const username = initArgs[1] || 'Anonimus';
const welcome = `Welcome to the File Manager, ${username}! \n`;
const goodbye = `Thank you for using File Manager, ${username}, goodbye!`;

rl.write(welcome);

console.log(`\nYou're currently in ${currentDirectory}\n`);

rl.on('line', async (input) => {
  const parsedInput = parseArgs(input);

  if (input === '.exit') {
    exitProcess();
  }

  switch (parsedInput[0]) {
    case 'os':
      rl.write(showOSInfo(parsedInput[1]));
      break;
    case 'hash':
      rl.write(calculateHash(parsedInput[1]));
      break;
    case 'basic':
      basicOperations(parsedInput[1]);
      break;
    case 'navigation':
      await navigation(parsedInput[1]);
      break;
    case 'compress':
      compressDecompress(parsedInput[1]);
      break;
    default:
      console.error('\x1b[31m%s\x1b[0m', `Invalid input!`);
      break;
  }
  setTimeout(() => {
    console.log(`\nYou're currently in ${currentDirectory}\n`);
  }, 0);
});

rl.on('SIGINT', function () {
  exitProcess();
});

function exitProcess() {
  rl.write(goodbye);
  process.exit();
}
