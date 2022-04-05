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

let person: {
  name: string;
  age: number;
};

person = {
  name: "Isaac",
  age: 28,
};

// person = {
//   isEmployee: true,
// };

// Array of objects(persons)
let people: {
  name: string;
  age: number;
}[];

//Type inference

let course = "React - The Complere guide";
