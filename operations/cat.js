import fs from 'fs';
import { access, stat } from 'fs/promises';
import { cwd } from 'node:process';
import { resolve } from 'path';

export default async function cat(args) {
  if (!args || args.split(' ').length !== 1 || args === '.' || args === '/' || args === '\\' || args === '..') {
    console.log('Invalid input');
  } else {
    try {
      const target = await stat(resolve(cwd(), args));
      if (target.isDirectory()) {
        console.log('Operation failed');
      } else {
        const readStream = fs.createReadStream(resolve(cwd(), args));
        for await (const chunk of readStream) {
          process.stdout.write(chunk);
        }
        process.stdout.write('\n'); 
      }
    } catch (err) {
      console.log('Operation failed');
    }
  }
}