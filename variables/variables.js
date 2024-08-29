// number 
let age = 25;
console.log(age)


//string
let name = 'test' 
console.log(name)

// boolean 
let isStudent = true;
console.log(isStudent)

// undefined 
let address;
console.log(address)

// null 
let job = null;
console.log(job)

// symbol 
let uniqueID = Symbol('asdd')
console.log(uniqueID)

// BigInt
let bigInt = 1234567890123456789012345678901234567890n;
console.log(bigInt)


// object 
let person = {
    name: 'Alice',
    age: 25,
    isStudent: false
};
console.log(person)

// arrays 
let numbersw = [1, 2, 3, 4, 5];
console.log(numbersw)

// function 
function greet(name){
    console.log(`hello, ${name}`)
}
greet('nitesh')

// Use Date and RegExp
let currentDate = new Date();
console.log(currentDate);

// regexp 
let pattern = /\d{3}-\d{2}-\d{4}/; // Example: Matches a pattern like "123-45-6789"
console.log(pattern);

// handle errors 
try {
    // Code that may throw an error
    let result = someNonExistentFunction();
} catch (error) {
    console.error('An error occurred:', error.message);
}