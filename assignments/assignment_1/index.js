const { rawListeners } = require("process");

function getNameFromCommandLine() {
  // Write you code here, name should be taken as args in process.argv
  const firstName = process.argv[2];
  return firstName;
}

function getNameFromEnv() {
  // Write your code here
  return process.env.name;
}

function getNameFromReadLine() {
  // Write your code here
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question((ans) => {
    console.log(ans);
    rl.close();
  });
}

module.exports = {
  getNameFromCommandLine,
  getNameFromEnv,
  getNameFromReadLine,
};
