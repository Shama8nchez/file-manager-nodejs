import checkPath from '../utils/checkPath.js';
import fs from 'fs';
import { access, unlink } from 'fs/promises';
import { cwd } from 'node:process';
import { join } from 'path';

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
        await access(join(cwd(), pathFile));

        unlink(join(cwd(), pathFile));
      } catch (err) {
        console.log('Operation failed')
      }
    }
  }
}