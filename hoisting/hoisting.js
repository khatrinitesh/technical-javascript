// ============= VARIABLE HOISTING =====================
// variable hositing with var
// console.log(x)
// var x = 20;

// // variable hoisting with let 
// try{
//     console.log(y)
// }
// catch(e){
//     console.error(e)
// }
// let y = 20

// // Variable Hoisting with const
// try{
//     console.log(z);
// }
// catch(e){
//     console.error(e);
// }
// const z = 30;

// ============= FUNCTION HOISTING =====================
// Function Hoisting with function declaration
// greet(x);
// function greet(){
//     console.log('hi there',x)
// }

// // Function Hoisting with function expression
// try{
//     greet2();
// }
// catch(e){
//     console.error(e);
// }
// var greet2 = function(){
//     console.log('hi there')
// }

// class hositing 
// try{
//     const person = new Person('nitesh')
// }
// catch(e){
//     console.error(e)
// }

// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }

// console.log(a) // undefined
// console.log(b) // ReferenceError: Cannot access 'b' before initialization

var a = 10;
// let b = 20;

function sum(x,y){
    return x + y 
}
console.log(sum(10,20))

