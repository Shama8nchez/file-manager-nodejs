import checkPath from '../utils/checkPath.js';
import { stat, unlink } from 'fs/promises';
import { cwd } from 'node:process';
import { resolve } from 'path';

export default async function rm(args) {
  if (!args) {
    console.log('Invalid input');
  } else {
    const pathes = args.split(' ');
    if (pathes.length !== 1) {
      console.log('Invalid input');
    } else {
      const pathFile = checkPath(pathes[0].trim());

      try {
        const target = await stat(resolve(cwd(), pathFile));
        if (target.isDirectory()) console.log('Operation failed')
        else unlink(resolve(cwd(), pathFile));
      } catch (err) {
        console.log('Operation failed')
      }
    }
  }
}