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

const returnNumberOfRamps = () => {
  let inputNumber = document.getElementById("user-input").value;
  let numberOfRamps = countRamps(inputNumber);
  document.getElementById("answer").innerHTML = numberOfRamps;

}