/**

** Exercise 3: Guess the output **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();
x();

/*
the result will be 12, because inside the immediately invoked function there is variable reassigning then closure ,as a result the global variable will changed.
*/