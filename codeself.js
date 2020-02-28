// // let & const
// let myName = 'Jordan';
// console.log(myName);
// // If I wanted to modify this variable I can

// const yourName = 'Max';
// console.log(yourName);
// // If I wanted to modify this variable I cannot

/**
 ************************************
 * // Arrow Function
 */

//  function printMyName(){
//      console.log(name);
//  }

//  printMyName('Max');

//  const printMyName = (name) => {
//      console.log(name);
//  }

//  const multiply = number => number * 2;
//  console.log(multiply(2));
 /**
  * *********************************
  * Classes
  */

//   class Human {
//       constructor() {
//           this.gender = 'male';
//       }

//       printGender() {
//           console.log(this.gender);
//       }
//   }


//   class Person extends Human {
//       constructor() {
//         super();
//         this.name = 'Jordan';
//         this.gender = 'female';
//       }
//       printMyName() {
//           console.log(this.name);
//       }
//   }

//   const person = new Person();
//   person.printMyName();
//   person.printGender();

/**
 * *******************************
 * Properties and Methods (Classes)
 */
 
// class Human {
//           gender = 'male';
          
//           printGender() {
//               console.log(this.gender);
//           }
//       }
    
    
//       class Person extends Human {
//             name = 'Jordan';
//             gender = 'female';
          
//           printMyName = () => {
//               console.log(this.name);
//           }
//       }
    
//       const person = new Person();
//       person.printMyName();
//       person.printGender();
    
// The purpose of this is to show the use of ES7 syntax writing 
// Using Arrow functions and now using the super or constructor method calls

/**
 * *********************************
 * Spread and Rest Operators
 */

// SPREAD
//  const numbers = [1, 2, 3];
//  const newNumbers = [...numbers, 4, 5, 6];
//  console.log(newNumbers);
 
// const person = {
//     name: 'Max'
// }

// const newPerson = {
//     ...person,
//     age: 29
// }

// console.log()

// REST
// const filter = (...args) => {
//     return args.filter(el => el === 1);
// }

// console.log(filter(1, 2, 3));