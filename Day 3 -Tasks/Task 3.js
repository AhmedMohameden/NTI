var students = [
  { name: "Ahmed", age: 20, grade: "B", isGraduated: false },
  { name: "Sara", age: 22, grade: "A", isGraduated: true },
  { name: "Mona", age: 19, grade: "C", isGraduated: false }
];

var totalAge = 0;
var graduatedCount = 0;
var notGraduatedCount = 0;

for (var i = 0; i < students.length; i++) {
  totalAge += students[i].age;
  if (students[i].isGraduated) {
    graduatedCount++;
  } else {
    notGraduatedCount++;
  }
}

var averageAge = totalAge / students.length;

students.forEach(student => {
  console.log("Keys:", Object.keys(student));
  console.log("Values:", Object.values(student));
});

var newStudent = { name: "Ali", age: 21, grade: "B+", isGraduated: true };
newStudent.email = "ali@yahoo.com";
students.push(newStudent);

students.forEach(student => {
  delete student.isGraduated;
});

console.log("Student Names:", students.map(s => s.name));
console.log("Average Age:", averageAge);
console.log("Graduated:", graduatedCount);
console.log("Not Graduated:", notGraduatedCount);


