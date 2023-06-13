import { cwd } from 'node:process';
import { join } from 'path';
import { rename } from 'fs/promises';

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
        await rename(join(cwd(), oldName), join(cwd(), newName));
      } catch (err) {
        console.log('Operation failed');
      }
    }
  }
}