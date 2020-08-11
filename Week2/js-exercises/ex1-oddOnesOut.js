
const myNumbers = [1, 2, 3, 4];

const checkAndDouble = arr => arr.filter(element => element % 2 === 0).map(el => el * 2);
console.log(checkAndDouble(myNumbers)) // Logs "[4, 8]" to the console