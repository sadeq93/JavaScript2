const mondayTasks = [{
  name: 'Daily standup',
  duration: 30, // specified in minutes
},
{
  name: 'Feature discussion',
  duration: 120,
},
{
  name: 'Development time',
  duration: 240,
},
{
  name: 'Talk to different members from the product team',
  duration: 60,
},
];


function dayWorth(tasks, hourlyRate) {
  let durations = tasks.map(element => (element.duration / 60) * hourlyRate);
  let total = durations.reduce((acc, element) => acc + element);
  return `€${Math.round(total * 100) / 100}`;
  // another way
  // let total = tasks.reduce((acc, element) => acc + element.duration, 0)
  // return `€${Math.round(((total / 60) * hourlyRate) * 100) / 100}`;
}

console.log(dayWorth(mondayTasks, 25))
console.log(dayWorth(mondayTasks, 13.37))