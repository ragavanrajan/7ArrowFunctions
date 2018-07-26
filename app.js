// const sayHello = function() {
//     console.log('Hello');

// }

// ********************
// Remove the function word and put => symbol

// const sayHello = () => {
//     console.log('Hello');

// }

// ********************
// One line function does not need braces
// const sayHello = () => console.log('Hello');


// ********************
// using return - one line returns

// const sayHello = () => 'Hello';

// ********************
// Same as above
// const sayHello = function() {
//   return 'Hello';
// }


// ********************
//passing object literals { msg: 'Hello} in paranthesis ({msg: 'hello'})
// Return object
// const sayHello = () => ({
//     msg: 'Hello'
// });

// ********************
// single param does not need paraenthis 

// const sayHello = name => console.log(`Hello ${name}`);

// ********************
// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Ragavan', 'Rajan');

const users = ['Nathan', 'John', 'Mike'];

// ********************
// Map function to get the length
// const nameLengths = users.map(function(name) {
//     return name.length;

// })


// ********************
// Map function  with Arrow to get the length
//Shorter 

// const nameLengths = users.map((name) => {
//     return name.length;

// });

// ********************
//shortest - return in one line

const nameLengths = users.map(name =>
    name.length);


console.log(nameLengths);