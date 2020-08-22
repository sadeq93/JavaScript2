/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
const removeDuplicates = (array) => {
  for (let i = array.length - 1; i >= 0; i--) {
    if (i !== array.indexOf(array[i])) {
      array.splice(array[i], 1)
    }
  }
  return array.sort()
}

removeDuplicates(letters);

if (letters == ['a', 'b', 'c', 'd', 'e', 'f'] + []) {
  console.log("Hooray!")
}
