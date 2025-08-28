var users = [
  {name: "Ali", age: 22},
  {name: "Sara", age: 28},
  {name: "Mona", age: 35},
  {name: "Ahmed", age: 45}
];

var grouped = {Young: [], Middle: [], Old: []};

users.forEach(user => {
  if (user.age < 25) {
    grouped.Young.push(user);
  } else if (user.age <= 40) {
    grouped.Middle.push(user);
  } else {
    grouped.Old.push(user);
  }
});

console.log(grouped);
