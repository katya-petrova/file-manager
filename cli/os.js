import os from 'os';

export function showOSInfo(input) {
  switch (input[1]) {
    case '--EOL':
      getEOL();
      break;
    case '--cpus':
      getCPU();
      break;
    case '--homedir':
      getHomeDir();
      break;
    case '--username':
      getUsername();
      break;
    case '--architecture':
      getArchitecture();
      break;
    default:
      console.error(`${input[2]} is not a valid command!`);
      break;
  }
}

function getEOL() {
  return console.log(JSON.stringify(os.EOL));
}

function getCPU() {
  return console.log(os.cpus());
}

function getHomeDir() {
  return console.log(os.homedir());
}

function getUsername() {
  return console.log(os.userInfo().username);
}

function getArchitecture() {
  return console.log(os.arch());
}

// os --cpus
// Get home directory and print it to console
// os --homedir
// Get current system user name (Do not confuse with the username that is set when the application starts) and print it to console
// os --username
// Get CPU architecture for which Node.js binary has compiled and print it to console
// os --architecture
