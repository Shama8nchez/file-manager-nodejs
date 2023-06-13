import { cwd } from 'node:process';
import { join } from 'path';
import { appendFile } from 'fs/promises';

export default async function add(args) {
  if (!args) console.log('Invalid input');
  else {
    const fileName = args.split(' ');
    if (fileName.length !== 1) console.log('Invalid input');
    else await appendFile(join(cwd(), args), '');
  }
}