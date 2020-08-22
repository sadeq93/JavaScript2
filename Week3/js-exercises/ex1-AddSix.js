function createBase(number1) {
  return (number2) => number1 + number2;
}
const addSix = createBase(6);
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));

