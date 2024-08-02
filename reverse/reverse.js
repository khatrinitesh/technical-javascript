const reverseString = inputString => inputString.split(' ').map(word => [...word].reverse().join('')).join(' ');
const input = 'hello world';
const result = reverseString(input)
console.log(result)