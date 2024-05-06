'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Your code right here

const countRamps = (numbR) => {
  let theTotal = 0;

  for (let i = 1; i <= numbR; i++) {
    let strNumber = i.toString();
    let isRamp = true;

    for (let j = 0; j < strNumber.length - 1; j++) {
      if (parseInt(strNumber[j]) > parseInt(strNumber[j + 1])) {
        isRamp = false;
        break; 
      }
    }

    if (isRamp) {
      theTotal += 1;
    }
  }

  console.log(theTotal + " total ramp numbers are less than " + numbR);

  return theTotal + " total ramp numbers are less than " + numbR;


};

const getPrompt = () =>  {
  rl.question('input number: ', (numbR) => {
    countRamps(numbR)
    getPrompt();
  });
}


// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C

// TO-DO - ADD TESTS
if (typeof describe === 'function') {

  describe('#countRamps()', () => {
    it('should display number of non-decreasing sequences less than the input number', () => {
      assert.equal(countRamps(123), "65 total ramp numbers are less than 123");
    });
  });
} else {

  getPrompt();

}
