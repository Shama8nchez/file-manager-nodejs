import fs from 'fs';
import { cwd } from 'node:process';
import { join } from 'path';

export default function cat(args) {
  const readStream = fs.createReadStream(join(cwd(), args));
  readStream.on('data', (chunk) => {
    console.log(chunk.toString());
  });
}