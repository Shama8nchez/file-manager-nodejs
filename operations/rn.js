import { cwd } from 'node:process';
import { resolve, parse } from 'path';
import { rename, stat } from 'fs/promises';

export default async function rn(args) {
  if (!args) {
    console.log('Invalid input');
  } else {
    const names = args.split(' ');
    if (names.length !== 2) {
      console.log('Invalid input');
    } else {
      const oldName = names[0].trim();
      const newName = names[1].trim();
      try {
        const target = await stat(resolve(cwd(), oldName));
        if (target.isDirectory()) console.log('Operation failed')
        else await rename(resolve(cwd(), oldName), resolve(cwd(), parse(oldName).dir, newName));
      } catch (err) {
        console.log('Operation failed');
      }
    }
  }
}