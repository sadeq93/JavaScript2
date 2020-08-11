
function createHTMLList(arr) { 
  let body = document.querySelector("body")
  let ul = document.createElement("ul");
  body.appendChild(ul);

  arr.forEach(element => {
  let li = document.createElement("li");
  li.innerText = element;
  ul.appendChild(li);
  })
  
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];
createHTMLList(myHobbies);