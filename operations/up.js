import { join } from 'path';
import { chdir, cwd } from 'process';

export default function up() {
  chdir(join(cwd(), '..'));
}