const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    const link = `( ${String(value)} )`;
    
    this.chain.push(link)

    return this;
  },
  removeLink(position) {
    if (position < 1 || typeof position !== 'number' || position >= this.chain.length) {
      this.chain = [];
      throw new Error('invalid position')
    }
    this.chain.splice(position - 1, 1)

    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.chain.join('~~');
    this.chain = [];
    return finishedChain;
  }
};

module.exports = chainMaker;
