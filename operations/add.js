import { cwd } from 'node:process';
import { join } from 'path';
import { appendFile } from 'fs/promises';

export default function add(args) {
  if (!args) console.log('You need to specify the file name');
  else {
    appendFile(join(cwd(), args), '');
  }
}