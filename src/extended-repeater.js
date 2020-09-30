const CustomError = require("../extensions/custom-error");

function customToString(value) {
  let result;
  switch (value) {
    case null:
      result = 'null';
      break;
    case false:
      result = 'false';
      break;
    case undefined:
      result = '';
      break;
    default:
      result = value.toString();
  }

  return result;
}

module.exports = function repeater(str, options) {
  str = customToString(str);
  options.addition = customToString(options.addition);
  options.separator = options.separator ? options.separator : '+';
  options.additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
  
  let addition = '';
  let additionArr = [];

  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes; i++) {
      additionArr.push(options.addition);
    }

    addition = additionArr.join(options.additionSeparator)
  } else {
    addition = options.addition
  }

  let result = '';
  let strArr = [];

  if (options.repeatTimes) {
    for (let i = 0; i < options.repeatTimes; i++) {
      strArr.push(str + addition);
    }
    result = strArr.join(options.separator)
  } else {
    result = str + addition;
  }

  return result;
};
  