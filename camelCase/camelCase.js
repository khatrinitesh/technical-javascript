const toCamelCase = str => str.replace(/[^a-zA-Z0-9]+(.)/g,(_,char) => char.toUpperCase()).replace(/^./,char => char.toLowerCase());

const result = toCamelCase('hello world example');
console.log(result)