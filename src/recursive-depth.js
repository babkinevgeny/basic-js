const CustomError = require("../extensions/custom-error");
module.exports = class DepthCalculator {
  calculateDepth(arr, container = 1) { 
    let result = container;

    if (!Array.isArray(arr)) {
      return result
    }  

    for (let i = 0; i < arr.length; i++) {
      const current = arr[i];

      if (Array.isArray(current)) {
        const subDepth = this.calculateDepth(current, container + 1);
        if (subDepth > result) {
          result = subDepth;
        }
      }
    }

    return result;
  }
};