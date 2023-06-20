import os from 'os';

export default function osOperations(args) {
  switch (args) {
    case '--EOL':
      console.log(JSON.stringify(os.EOL))
      break;

    case '--cpus':
      const cpus = os.cpus();
      console.log('Total number of cpus: ' + cpus.length);

      let cpusInfo = cpus.map(cpu => {
        const obj = {model: cpu.model, clockRate: (cpu.speed)/1000 + ' GHz'};
        return obj;
      });
      console.log(cpusInfo)
      break;

    case '--homedir':
      console.log(os.homedir());
      break;

    case '--username':
      console.log(os.userInfo().username);
      break;

    case '--architecture':
      console.log(os.arch());
      break;
  }
}