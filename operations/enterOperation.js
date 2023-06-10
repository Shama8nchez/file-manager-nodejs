import up from './up.js';
import cd from './cd.js';

export default async function enterOperation(operation, args) {
  switch (operation) {
    case 'up': 
      up()
      break;

    case 'cd': 
      cd(args);
      break;
  }
}