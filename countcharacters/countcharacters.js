const countChars = str => [...str].reduce((acc,char) => (acc[char] = (acc[char] || 0) + 1,acc),{});
const result = countChars('hello world');
console.log(result);