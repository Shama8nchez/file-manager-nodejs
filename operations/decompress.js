import fs from 'fs';
import zlib from 'zlib';
import { stat } from 'fs/promises';
import { cwd } from 'node:process';
import { resolve, parse } from 'path';

export default async function decompress(args) {
  if (!args || args.split(' ').length !== 2) {
    console.log('Invalid input');
  } else {
    const pathes = args.split(' ');
    const pathFile = pathes[0].trim();
    const pathDir = pathes[1].trim();

    const fileTarget = await stat(resolve(cwd(), pathFile));
    if (fileTarget.isDirectory()) console.log('Operation failed');
    else {
      const dirTarget = await stat(resolve(cwd(), pathDir));
      if (!dirTarget.isDirectory()) console.log('Operation failed');
      else {
        const rs = fs.createReadStream(pathFile);
        const ws = fs.createWriteStream(resolve(pathDir, parse(pathFile).name));
        const gzip = zlib.createBrotliDecompress();
    
        rs.pipe(gzip).pipe(ws);
      }

    }
  }
}