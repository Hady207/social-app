#!/usr/bin/env node
const { execSync } = require('child_process');
// const { createInterface } = require('readline');

let nodePackger = 'yarn';

// const rl = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' });
  } catch (error) {
    console.log(`Failed tp execute ${command}`, error);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/Hady207/express-ts-starter ${repoName}`;
const installDepsCommand = `cd ${repoName} && ${nodePackger} install`;

console.log(`Cloning the repository with name ${repoName}`);
const checkedOut = runCommand(gitCheckoutCommand);

if (!checkedOut) process.exit(1);

// rl.question('Choose yarn or npm?', function (ansr) {
//   if (ansr.toLowerCase() === 'yarn') {
//     nodePackger = 'yarn';
//     rl.close();
//   } else if (ansr.toLowerCase() === 'npm') {
//     nodePackger = 'npm';
//     rl.close();
//   } else {
//     console.log(`Please choose node package manager`);
//   }
// });

console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);

if (!installedDeps) process.exit(1);

console.log(
  'Congratulations! You are ready. Follow the following commands to start',
);
console.log(`cd ${repoName} && ${nodePackger} start`);
