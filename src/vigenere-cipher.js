const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect) {
    this.isDirect = isDirect || isDirect === undefined ? true : false;
  }
  
  correctKey(key, message) {
    let keyArr = [...key.split('')];

    while (keyArr.length < message.length) {
      keyArr = [...keyArr, ...key.split('')];
    }

    const messageArr = message.split('');

    messageArr.forEach((letter, index) => {
      if (letter === ' ') {
        keyArr.splice(index, 0, ' ')
      }
    });

    const difference = keyArr.length - messageArr.length;

    if (difference > 0) {
      keyArr.splice(keyArr.length - difference, difference);
    }

    const newKey = keyArr.join('');
    
    return newKey;
  }

  toggleCrypt(message, key, needToEncrypt) {
    if (!message || !key) {
      throw new Error('There should be message and key both!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    if (key.length < message.length) {
      key = this.correctKey(key, message)
    }

    let codedArr = [];

    for (let i = 0; i < message.length; i++) {
      const messageLetterCode = message.charCodeAt(i) - 65;

      if (messageLetterCode < 0 || messageLetterCode > 25) {
        codedArr.push(message[i]);
        continue;
      }

      const keyLetterCode = key.charCodeAt(i) - 65;
      
      let letterCoded;

      if (needToEncrypt) { // encryption
        letterCoded = String.fromCharCode((((messageLetterCode + keyLetterCode) % 26) + 65))
      } else { // decryption
        letterCoded = String.fromCharCode((((messageLetterCode + 26 - keyLetterCode) % 26) + 65))
      }

      codedArr.push(letterCoded);
    }

    let messageCoded = codedArr.join('');

    if (!this.isDirect) {
      messageCoded = messageCoded.split('').reverse().join('');
    }

    return messageCoded;
  }


  encrypt(message, key) {
    return this.toggleCrypt(message, key, true)
  }   

  decrypt(message, key) {
    return this.toggleCrypt(message, key, false)
  }
}

module.exports = VigenereCipheringMachine;
