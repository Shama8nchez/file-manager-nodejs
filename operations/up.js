import { join } from 'path';
import { chdir, cwd } from 'process';

export default function up(args) {
  if (args) {
    console.log('Invalid input')
  } else {
    chdir(join(cwd(), '..'));
  }
}