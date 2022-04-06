// Primitives: number, dtring, boolean, string
// More Complex types: arrays, objects, strings
// Function types. parameters: number

// Primitives
let age: number = 24;

age = 12;

let userName: string;

userName = "Isaac";

let isInstructor: boolean;

isInstructor = false;

// More Complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Isaac",
  age: 28,
};

// person = {
//   isEmployee: true,
// };

// Array of objects(persons)
let people: Person[];

// Union Types

let course: string | number = "React - The Complete guide";
course = 12341;

// Functions & Types

function add(a: number, b: number): number {
  return a + b;
}

// Special Function with void type for return
function print(value: any) {
  console.log(value);
}

// Generics

// <T> allows TypeScript to look at the data types of the variables passed through the function
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

// updatedArray[0].split('')
stringArray[0].split("");

// Classes

class Student {
  firstName: string;
  lastName: string;
  age: number;
  private courses: string[];

  constructor(first: string, last: string, age: number, courses: string[]) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.courses = courses;
  }

  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  lisCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Isaac", "Rendon", 28, ["Angular"]);
student.enroll("React");

// Unavialble because we made courses private
// student.courses;
