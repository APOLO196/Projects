
function getPassedStudents(students) {
   
    const passedStudents = [];

   
    for (let i = 0; i < students.length; i++) {
        
        const student = students[i];

       
        if (student.score >= 50) {
            
            passedStudents.push(student.name);
        }
    }

    
    return passedStudents;
}


const students = [
  { name: 'Ivan', score: 45 },
  { name: 'Maria', score: 82 },
  { name: 'Peter', score: 55 },
  { name: 'John', score: 30 }
];

const passedStudents = getPassedStudents(students);

console.log(passedStudents); // ['Maria', 'Peter']


students.push({ name: 'Anna', score: 60 });

const updatedPassedStudents = getPassedStudents(students);

console.log(updatedPassedStudents); // ['Maria', 'Peter', 'Anna']