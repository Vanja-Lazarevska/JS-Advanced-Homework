console.log('Connected')
// Exercise 1
// Create 3 object templates. Academy, Student and Subject. The structure should be: 
// Academy
// Name - string
// Students - array of Students
// Subjects - array of Subjects
// Start - Date when it starts
// End - Date when it ends
// NumberOfClasses - number of subjects * 10, not settable
// PrintStudents - method that prints all students in console
// PrintSubjects - method that prints all subjects in console

// Subject
// Title - string
// NumberOfClasses - default 10, not settable
// isElective - boolean
// Academy - Academy object
// Students - array of Students
// OverrideClasses - accepts a number and rewrites the NumberOfClasses property with that number. The number can't be smaller than 3.

// Student
// FirstName - string
// LastName - string
// Age - number
// CompletedSubjects - emptyArray as default, not settable
// Academy - null as default, not settable
// CurrentSubject - null as default, not settable
// StartAcademy - accepts Academy object that it sets to the Academy property of the student
// StartSubject - accepts Subject object and adds it to the CurrentSubject property but only if the student has an Academy object in the Academy property and that subject exists in the academy. If not, give error in console and do not set the CurrentSubject property

// Exercise 2
// Make the functions StartAcademy and StartSubject dynamic.
// StartAcademy - When the student calls StartAcademy, the student should also be added to the Academy property Students ( The academy that he is starting )
// StartSubject - When the student calls StartSubject the student should also be added to the Subject property Students ( The subject that he is starting ). If there was another subject in the CurrentSubject property, that subject should be transferred to CompletedSubjects and then add the new Subject

function Academy(name, start, end) {
    this.name = name;
    this.students = [];
    this.subjects = [];
    this.start = start;
    this.end = end;
    this.numberOfClasses = this.subjects.length * 10;

    this.addStudents = function(student){
        this.students.push(student)
    }

    this.addSubjects = function(subject){
        this.subjects.push(subject)
        subject.setAcademyObj(this)
    }

    this.printStudents = function(){
        this.students.forEach(student => {
            console.log(student.firstName)
    });

    this.printSubjects = function() {
        this.subjects.forEach(subject => {
            console.log(subject.title)
        });
    };
}};

function Subject(title) {
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = true;
    this.academy = null;
    this.students = [];
    
    this.setAcademyObj = function(academyObj){
        this.academy = academyObj
    }

    this.setStudents = function(student){
        this.students.push(student)
    }

    this.overrideClasses = function(num){
     num < 3 ? console.log('Enter different number') : this.numberOfClasses = num
}
}

function Student(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completedSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    
    this.startAcademy = function(academyObj){
        this.academy = Object.create(academyObj)
        let arr = academyObj.students
        academyObj[arr] = arr.push(this.firstName)
        console.log(academyObj.students) 
    };

    this.startSubject = function(subjectObj){
     if(this.academy !== null){
        console.log(this.academy.subjects)
        console.log(subjectObj.title)
        this.academy.subjects.find(subject => {
            subject == subjectObj.title ? this.currentSubject = Object.create(subjectObj) : console.log('No such subject')
        })
        let arr = subjectObj.students
        subjectObj[arr] = arr.push(this.firstName)
        console.log(subjectObj.students)
        if(this.currentSubject !== null){
            this.completedSubjects.push(Object.values(this.currentSubject).join())  
            console.log(this.completedSubjects)
        }
     } 
        
    }
}

let student1 = Object.create(new Student('Bob', 'Nelson', 25))
let student2 = Object.create(new Student('Mark', 'Freeman', 20))
let student3 = Object.create(new Student('Ana', 'Clark', 24))
let student4 = Object.create(new Student('Semantha', 'Robinson', 26))

let CSharp = Object.create(new Subject('C#'))
let html = Object.create(new Subject('HTML'))
let css = Object.create(new Subject('CSS'))


let sedcAcademy = Object.create(new Academy('SEDC','19.10.2022' ,'12.11.2023'))
let JsSubject = Object.create(new Subject('Java Script'))
sedcAcademy.addSubjects(JsSubject)
sedcAcademy.addStudents(student2)
sedcAcademy.printStudents()
sedcAcademy.printSubjects()

student4.startAcademy(sedcAcademy)
student4.startSubject(CSharp)
console.log(student4)

console.log(sedcAcademy)



// console.log(student1)
// student1.startAcademy(sedcAcademy)
// student1.startSubject(JsSubject)
// console.log(student1.currentSubject)


