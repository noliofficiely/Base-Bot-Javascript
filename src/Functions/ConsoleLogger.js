const gradient = require('gradient-string');

function logInfo(text) {
  console.log(gradient(['#E2FF2E', '#D9E334']) (text));
}
function logSucces(text) {
  console.log(gradient(['#4AE061', '#4BC949'])(text));
}
function logError(text){
  console.log(gradient(['#ff1b3a', '#ff0000'])(text));
}

module.exports = {
  logInfo,
  logSucces,
  logError,
};