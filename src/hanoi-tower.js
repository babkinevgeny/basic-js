const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SEC_IN_HOUR = 60 * 60;
  const minTurns = 2 ** disksNumber - 1;
  const turnPerSec = SEC_IN_HOUR / turnsSpeed;
  const minSecs = Math.floor(minTurns * turnPerSec);

  return {turns: minTurns, seconds: minSecs}
};
