import fs from 'fs';
import { access, stat } from 'fs/promises';
import { cwd } from 'node:process';
import { parse, resolve } from 'path';

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
        const fileTarget = await stat(resolve(cwd(), pathFile));
        if (fileTarget.isDirectory()) console.log('Operation failed');
        else {
          const dirTarget = await stat(resolve(cwd(), pathDir));
          if (!dirTarget.isDirectory()) console.log('Operation failed');
          else {
            const readStream = fs.createReadStream(resolve(cwd(), pathFile));
            const writeStream = fs.createWriteStream(resolve(resolve(cwd(), pathDir), parse(pathFile).base));
    
            readStream.pipe(writeStream);
          }
        }
        //await access(resolve(cwd(), pathFile));
        
      } catch (err) {
        console.log('Operation failed')
      }
    }
  }
}