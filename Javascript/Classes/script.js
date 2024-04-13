class Student {
  constructor(name, age, grades) {
    this.name = name;
    this.age = age;
    this.grades = grades;
  }

  greet() {
    console.log(`Hello ${this.name}, your age is ${this.age}`);
  }

  getAverage(gradeMax) {
    let sum = 0;
    for (let i = 0; i < this.grades.length; i++) {
      if (this.grades[i] > gradeMax) {
        throw TypeError("One of the grades is more than 20");
      }
      sum += this.grades[i];
    }
    return sum / this.grades.length;
  }

  checkIfStudentSuceeded(gradeMax) {
    if (this.getAverage(gradeMax) < gradeMax / 2) {
      console.log("Student failed");
    } else console.log("Student succeed");
  }
}

let student1 = new Student("Yusef", 19, [12, 15, 18]);
let student2 = new Student("Zein", 16, [6, 17, 8]);
console.log(student1);
console.log(student1.name);
console.log(student1.grades);
student1.greet();
let avg = student2.getAverage(20);
console.log(avg);
student2.checkIfStudentSuceeded(20);