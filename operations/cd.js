import { join } from 'path';
import { cwd, chdir } from 'node:process';
import checkPath from '../utils/checkPath.js';

export default function cd(args) {
  if (!args) {
    console.log('You need to specify the directory path');
  } else {
    /* let dir = '';
    if (args.startsWith(cwd())) {
      dir = args.slice(cwd().length);
    } else {
      dir = args;
    } */

    const dir = checkPath(args);

    try {
      chdir(join(cwd(), dir));
    } catch (err) {
      console.log('Incorrect directory')
    }
  }
}