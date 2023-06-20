import { join } from 'path';
import { cwd, chdir } from 'node:process';
import checkPath from '../utils/checkPath.js';

export default function cd(args) {
  if (!args || args.split(' ').length !== 1) {
    console.log('Invalid input');
  } else {
    const dir = checkPath(args);

    try {
      chdir(dir);
    } catch (err) {
      console.log('Operation failed')
    }
  }
}