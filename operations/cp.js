import fs from 'fs';
import { access, constants } from 'fs/promises';
import { cwd } from 'node:process';
import { join } from 'path';
import { pipeline } from 'node:stream';

export default async function cp(args) {
  if (!args) {
    console.log('Invalid input');
  } else {
    const pathes = args.split(' ');
    if (pathes.length !== 2) {
      console.log('Invalid input');
    } else {
      const pathFile = pathes[0].trim();
      const pathDir = pathes[1].trim();

      try {
        await access(join(cwd(), pathFile));
        await access(join(cwd(), pathDir));

        const readStream = fs.createReadStream(join(cwd(), pathFile));
        const writeStream = fs.createWriteStream(join(cwd(), pathDir, pathFile));

        readStream.pipe(writeStream)
      } catch (err) {
        console.log('Operation failed')
      }
    }
  }
}