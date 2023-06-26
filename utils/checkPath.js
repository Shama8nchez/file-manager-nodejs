import { cwd } from 'process';
import { resolve } from 'path';

export default function checkPath(path) {
  return path.startsWith('.') ? resolve(cwd(), path) : path;
}