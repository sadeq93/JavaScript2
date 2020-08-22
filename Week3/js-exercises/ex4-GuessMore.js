/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

let x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);// the result should be 9, because the val parameter is a copy variable from the value of the variable x which is primitive variable, now the val is independent variable and dose not change the x variable .

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);//the result should be 10, because the val parameter is a copy for the address (y variable) of the object , so any changed will applied on the objet not on the address, which called reference variable.