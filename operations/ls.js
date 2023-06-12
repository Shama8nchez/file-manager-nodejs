import { stat, readdir } from 'node:fs/promises';
import { cwd } from 'node:process';
import { join } from 'path';

export default async function ls() {
  const directories = [];
  const files = []
  try {
    const list = await readdir(cwd());
    for (const item of list) {
      try {
        const stats = await stat(join(cwd(), item));
        if (stats.isDirectory()) directories.push(item)
        else files.push(item)
      } 
      catch (error) {
        console.log(error);
      }
    }
  } catch (err) {
    console.error(err);
  } finally {
    const dirLength = directories.length;
    for (let i = 0; i < dirLength; i++) {
      console.log(`${i + 1}. ${directories[i]} - directory`);
    }

    for (let i = 0; i < files.length; i++) {
      console.log(`${i + dirLength + 1}. ${files[i]} - file`);
    }
  }
}