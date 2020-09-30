const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (date.hasOwnProperty('getMonth')) {
    throw new Error();
  }

  const month = date.getMonth();

  if (month === 11 || month <= 1) {
    return 'winter'
  } else if (month <= 4) {
    return 'spring'
  } else if (month <= 7) {
    return 'summer'
  } else {
    return 'autumn'
  }
};
