import up from './up.js';
import cd from './cd.js';
import ls from './ls.js';
import cat from './cat.js';
import add from './add.js';

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
  }
}