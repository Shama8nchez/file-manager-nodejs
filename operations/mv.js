import checkPath from '../utils/checkPath.js';
import fs from 'fs';
import { access, unlink } from 'fs/promises';
import { cwd } from 'node:process';
import { join } from 'path';

export default async function mv(args) {
  if (!args) {
    console.log('Invalid input');
  } else {
    const pathes = args.split(' ');
    if (pathes.length !== 2) {
      console.log('Invalid input');
    } else {
      const pathFile = checkPath(pathes[0].trim());
      const pathDir = checkPath(pathes[1].trim());

      try {
        await access(join(cwd(), pathFile));
        await access(join(cwd(), pathDir));

        const readStream = fs.createReadStream(join(cwd(), pathFile));
        const writeStream = fs.createWriteStream(join(cwd(), pathDir, pathFile));

        readStream.pipe(writeStream);
        unlink(join(cwd(), pathFile));
      } catch (err) {
        console.log('Operation failed')
      }
    }
  }
}