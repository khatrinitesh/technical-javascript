// function add(a,b,c){
//     return a + b + c 
// }
// console.log(add(30,40,50)

// function curryAdd(a){
//     return function(b){
//         return function (c){
//             return a + b +c 
//         };
//     };
// }
// const add = curryAdd(10);
// const add5And10  = add(10);
// const result   = add5And10(10);
// console.log(result)

// function multiply(a){
//     return function(b){
//         return a * b 
//     }
// }
// const multiplyBy2 = multiply(2);
// console.log(multiplyBy2(200));

// function pranay(a){
//     return function(b){
//         return a +b 
//     }
// }
// const add = pranay(10)
// const result = add(50)
// console.log(result)

// function multiples(a){
//     return function(b){
//         return function(c){
//             return a  * b * c 
//         }
//     }
// }
// const example = multiples(2);
// const result = example(2)
// console.log(result(2))

// const str = 'hello'
// const repeatedStr = str.repeat(4)
// console.log(repeatedStr)

// console.log(str.repeat(2.5))

// const pattern = '*_'.repeat(10)
// console.log(pattern)

// const padding = ' '.repeat(10)
// console.log(`Important message:${padding}Handle with care!`)

// const testData = 'x'.repeat(1000);
// console.log(testData)

// function compose(...functions){
//     return function(value){
//         return functions.reduceRight((acc,fn) => fn(acc),value)
//     }
// }
// const add1 = x  => x + 1 
// const multiply2 =x  => x * 2 
// const subtract3 = x=> x - 44
// const composedFunction = compose(add1,multiply2,subtract3)
// console.log(composedFunction(5));
// function pipe(...functions){
//     return function(value){
//         return functions.reduce((acc,fn) => fn(acc),value);
//     }
// }

// const add1 = x => x + 1;
// const multiply2 = x => x * 2;
// const subtract3 = x => x - 3;
// const pipedFunction = pipe(add1,multiply2,subtract3)
// console.log(pipedFunction(5))

// class Car {
//     constructor(make, model) {
//       this.make = make;
//       this.model = model;
//     }
  
//     drive() {
//       console.log(`Driving a ${this.make} ${this.model}`);
//     }
//   }
  
// class Happy{
//     constructor(brand,city){
//         this.brand = brand;
//         this.city = city 
//     }

//     maruti(){
//         console.log(`maruti a ${this.brand} ${this.city}`)
//     }
// }

// const original = { a: 1, b: { c: 2 } };
// const result = Object.assign({},original)
// console.log(result)
// console.log(result.a === original.b)

// const original = { a: 1, b: { c: 2 } };
// const clone = JSON.parse(JSON.stringify(original));
// console.log(clone);

// const original = { a: 1, b: { c: 2 } };
// const clone = JSON.parse(JSON.stringify(original));

// console.log(clone); // { a: 1, b: { c: 2 } }
// console.log(clone.b === original.b); // false (different objects)

// const timeoutRegistry = new Set();

// // Override setTimeout to track timeouts
// const originalSetTimeout = window.setTimeout;
// window.setTimeout = function(callback, delay) {
//   const timeoutId = originalSetTimeout(callback, delay);
//   timeoutRegistry.add(timeoutId);
//   return timeoutId;
// };

// // Function to clear all timeouts
// function clearAllTimeouts() {
//   timeoutRegistry.forEach(timeoutId => {
//     clearTimeout(timeoutId);
//   });
//   timeoutRegistry.clear(); // Clear the registry after clearing all timeouts
// }

// // Example usage
// const timeout1 = setTimeout(() => console.log('Timeout 1'), 1000);
// const timeout2 = setTimeout(() => console.log('Timeout 2'), 2000);

// console.log('Setting timeouts...');

// // Clear all timeouts before they execute
// setTimeout(clearAllTimeouts, 500); // Clears timeouts after 500ms

// const users = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
//   ];

//   const result = users.map((val) => val.name)
//   console.log(result)

//   const numbers = [1, 2, 3, 4, 5];

//   const numberObjects = numbers.map(num => ({
//     original:num,
//     square:num * num
//   }))
//   console.log(numberObjects)


