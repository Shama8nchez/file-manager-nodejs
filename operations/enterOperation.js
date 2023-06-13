import up from './up.js';
import cd from './cd.js';
import ls from './ls.js';
import cat from './cat.js';
import add from './add.js';
import rn from './rn.js';
import cp from './cp.js';
import mv from './mv.js';

export default async function enterOperation(operation, args) {
  switch (operation) {
    case 'up': 
      up()
      break;

    case 'cd': 
      cd(args);
      break;

    case 'ls': 
      ls();
      break;

    case 'cat': 
      cat(args);
      break;

    case 'add': 
      add(args);
      break;

    case 'rn': 
      rn(args);
      break;

    case 'cp': 
      cp(args);
      break;

    case 'mv': 
      mv(args);
      break;
  }
}