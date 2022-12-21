let ID = 1;

const enrollees = [
   {
      name: 'Vasya',
      surname: 'Pyatochkin',
      schoolPoints: 600,
      isPrivileges: true,
   },
   {
      name: 'Katya',
      surname: 'Kurochkina',
      schoolPoints: 999,
      isPrivileges: false,
   },
   {
      name: 'Igor',
      surname: 'Svyatoslavskiy',
      schoolPoints: 750,
      isPrivileges: true,
   },
   {
      name: 'Anton',
      surname: 'Marchenko',
      schoolPoints: 1340,
      isPrivileges: false,
   },
   {
      name: 'Maria',
      surname: 'Ivanenko',
      schoolPoints: 1000,
      isPrivileges: false,
   },
   {
      name: 'Svetlana',
      surname: 'Derevko',
      schoolPoints: 999,
      isPrivileges: false,
   },
   {
      name: 'Anton',
      surname: 'Chorniy',
      schoolPoints: 0,
      isPrivileges: false,
   },
];

const Student = function(enrollee) {
   this.id = ID++;

   this.name = enrollee.name;
   this.surname = enrollee.surname;
   this.schoolPoints = enrollee.schoolPoints;
   this.isPrivileges = enrollee.isPrivileges;

   this.isAccepted = null;

   Object.defineProperty(this, 'fullName', {
      get(){
         return `${this.surname} ${this.name}`
      }
   })
}
// Create array with Student instances and return him
const createStudentsList = (enrolleesList) => {
   const studentsList = [];

   for(const enrollee of enrolleesList) {
      const student = new Student(enrollee);
      studentsList.push(student);
   }

   return studentsList;
} 

const students = createStudentsList(enrollees);

const checkOnIsAcceptedStudent = (student) => {
   if(student.isPrivileges) {
      return true;
   }

   const MAX_POINTS = 1000;

   return student.schoolPoints >= MAX_POINTS;

}

const filterAcceptedStudents = () => {
   for(const student of students) {
      student.isAccepted = checkOnIsAcceptedStudent(student);
   }
}

filterAcceptedStudents();

console.table(students)

