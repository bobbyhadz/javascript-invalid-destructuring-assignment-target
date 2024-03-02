// ⛔️ Uncaught SyntaxError: Invalid destructuring assignment target

// EXAMPLE 1 - Place the objects in an array or only assign a single value to the variable

// ✅ declare an array of objects
const arr = [{name: 'Tom'}, {name: 'John'}];

console.log(arr[0]); // 👉️ { name: 'Tom' }

// // --------------------------------------------

// // ✅ declare a single object
// const obj = {id: 1, name: 'Bobby Hadz'};

// console.log(obj['name']); // 👉️ Bobby hadz

// ------------------------------------------------------------------

// // EXAMPLE 2 - Providing a default value for a function's parameter

// // ✅ set a default value for a function's parameter

// function log(obj = {key: 'value'}) {
//   console.log(obj); // 👉️ {key: 'value'}
// }

// log();

// ------------------------------------------------------------------

// // EXAMPLE 3 - Destructuring a value from an object argument

// function log({key} = {key: 'value'}) {
//   console.log(key); // 👉️ "value"
// }

// log();

// ------------------------------------------------------------------

// // EXAMPLE 4 - Destructuring a value from an array argument

// function log([first, second] = ['one', 'two']) {
//   console.log(first, second); // 👉️ "one", "two"
// }

// log();
