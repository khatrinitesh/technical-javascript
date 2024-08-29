// console.log(typeof NaN)

// special value
// console.log(NaN === NaN)

// Detection
// console.log(isNaN('string'))
// console.log(Number.isNaN('string'));
// console.log(Number.isNaN(NaN))

// console.log(0 / 0); 
// console.log(parseInt('abc'));

// let result1 = 0 / 0; 
// let result2 = parseInt('invalid number');
// console.log(result1)
// console.log(result2)
// console.log(NaN === NaN)

// console.log(isNaN(result1))
// console.log(isNaN(result2))
// console.log(Number.isNaN(result1))
// console.log(Number.isNaN(result2))

// operations resulting in NAN 
// let invalidOperations1 = Math.sqrt(-1);
// let invalidOperations2 = 'string' * 2;
// let invalidOperation3 = 'text' / 3;
// console.log(invalidOperations1); 
// console.log(invalidOperations2);
// console.log(invalidOperations3);

// handling functons 
// function checkNaN(value){
//     let result = value * 'string';
//     return Number.isNaN(result)
// }
// console.log(checkNaN(5));
// console.log(checkNaN(111));

// NaN and type coericon 
// let result1 = 'hello' * 3 
// let result2 = '10' * '5'
// console.log(result1)
// console.log(result2)

// NaN in conditional statements 
// let value = NaN; 
// if(value){
//     console.log('NaN is truthy')
// }
// else{
//     console.log('NaN is falsy')
// }
// console.log(NaN == false)
// console.log(NaN == 0)
