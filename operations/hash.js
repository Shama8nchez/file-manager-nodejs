import { stat, readFile } from 'fs/promises';
import { cwd } from 'node:process';
import { resolve } from 'path';

export default async function compress(args) {
  if (!args || args.split(' ').length !== 1) {
    console.log('Invalid input');
  } else {
    try {
      const fileTarget = await stat(resolve(cwd(), args));
      if (fileTarget.isDirectory()) console.log('Operation failed');
      else {
        const {
          createHash,
        } = await import('node:crypto');
        
        const hash = createHash('sha256');
  
        const data = await readFile(resolve(cwd(), args))
        hash.update(data);
        console.log(hash.digest('hex'));
      }
    } catch {
      console.log('Operation failed');
    }
  }
}