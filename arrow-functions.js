/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
// function addTwoNumbers(a, b) {
//     Code block
//     return a + b;
// }

// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters
const addTwoNumbers = (a, b) => {
    // Code block
    return a + b;
}

let sum = addTwoNumbers(3, 5);
console.log(sum);

// Single Line Arrow Function With Parameters
const addTwoNumbers2 = (a, b) => a + b;

let newSum = addTwoNumbers2(4, 6);
console.log(newSum);

// Implicit Returns
const saySomething = message => console.log(message);
saySomething('Hello there!');

const sayHello = () => console.log('Hi!!');
sayHello();

// Returning Multiple Lines
const returnMultipleLines = () => (
    `<p>
    This is a multi-line string!!!
</p>`
);

console.log(returnMultipleLines());