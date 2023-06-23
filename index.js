import * as readline from 'node:readline/promises';
import { argv, cwd, chdir, stdin as input, stdout as output } from 'node:process';
import os from 'node:os';
import enterOperation from './operations/enterOperation.js';

async function startFileManager() {
  const rl = readline.createInterface({ input, output });
  const userName = argv.filter(arg => arg.startsWith('--username'))[0].split('=')[1];
  output.write(`Welcome to the File Manager, ${userName}!\n`);

  chdir(os.homedir());
  console.log('You are currently in ' + cwd() + '\n');

  rl.on('line', async (input) => {
    const operation = input.trim().split(' ')[0];
    const args = input.slice(operation.length).trim();

    await enterOperation(operation, args);

    console.log('You are currently in ' + cwd() + '\n');
  });

  process.on('exit', () => output.write(`Thank you for using File Manager, ${userName}, goodbye!\n`));
}

startFileManager();