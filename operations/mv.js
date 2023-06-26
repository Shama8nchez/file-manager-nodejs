import checkPath from '../utils/checkPath.js';
import fs from 'fs';
import { stat, rm } from 'fs/promises';
import { cwd } from 'node:process';
import { resolve, parse } from 'path';

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
        const fileTarget = await stat(resolve(cwd(), pathFile));
        if (fileTarget.isDirectory()) console.log('Operation failed');
        else {
          const dirTarget = await stat(resolve(cwd(), pathDir));
          if (!dirTarget.isDirectory()) console.log('Operation failed');
          else {
            const readStream = fs.createReadStream(resolve(cwd(), pathFile));
            const writeStream = fs.createWriteStream(resolve(resolve(cwd(), pathDir), parse(pathFile).base));
    
            readStream.pipe(writeStream);
            rm(resolve(cwd(), pathFile))
          }
          
        }
      } catch (err) {
        console.log('Operation failed')
      }
    }
  }
}