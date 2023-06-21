import fs from 'fs';
import { access } from 'fs/promises';
import { cwd } from 'node:process';
import { join } from 'path';

export default async function cat(args) {
  if (!args || args.split(' ').length !== 1) {
    console.log('Invalid input');
  } else {
    try {
      await access(join(cwd(), args));
      const readStream = fs.createReadStream(join(cwd(), args));
      readStream.on('data', (chunk) => {
        console.log(chunk.toString());
      });
    } catch (err) {
      console.log('Operation failed');
    }

  }
}