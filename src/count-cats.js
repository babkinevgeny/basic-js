const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  matrix.forEach(row => {
    row.forEach(el => {
      if (el === '^^') {
        cats++;
      }
    });
  });
  return cats;
};
