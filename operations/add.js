import { cwd } from 'node:process';
import { join } from 'path';
import { appendFile, access } from 'fs/promises';

export default async function add(args) {
  if (!args) console.log('Invalid input');
  else {
    const fileName = args.split(' ');
    if (fileName.length !== 1 || fileName[0].search(/[\\\/\:\*\?\"\<\>\|]/) !== -1 || fileName[0] === '.') console.log('Invalid input');
    else {
      try {
        await access(join(cwd(), args));
        console.log('Operation failed');
      } catch {
        await appendFile(join(cwd(), args), '');
      }
    }
    
  }
}