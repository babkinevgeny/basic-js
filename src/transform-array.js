
const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if ( !arr.length ) {
    return [];
  }

  const seqArr = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];

  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const prev = arr[i - 1];
    const next = arr[i + 1];
    const cur = arr[i];

    if (seqArr.includes(cur)) {
      continue;
    }

    if (prev === '--discard-next') {
      continue;
    }

    if (prev === '--double-next') {
      newArr.push(cur);
    }

    if (next === '--discard-prev') {
      continue;
    }

    if (next === '--double-prev') {
      newArr.push(cur);
    }

    newArr.push(cur);
  }
  return newArr;
};