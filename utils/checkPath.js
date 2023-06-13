import { cwd } from 'process';

export default function checkPath(path) {
  return path.startsWith(cwd()) ? path.slice(cwd().length) : path;
}