function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i)
  }
  numbers.forEach((number) => {

    if (number % 3 === 0 && number % 5 === 0) {
      return [threeCallback(), fiveCallback()]
    } else if (number % 3 === 0) {
      return threeCallback();
    } else if (number % 5 === 0) {
      return fiveCallback();
    }


  })
}
  const sayThree = () => {
    console.log("sayThree");
  }
  const sayFive = () => {
    console.log("sayFive");
  }

  threeFive(10, 15, sayThree, sayFive);
