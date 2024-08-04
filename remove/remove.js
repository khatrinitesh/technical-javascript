const removeChar = (str,charToRemove) => str.split(charToRemove).join('');
const result = removeChar('hello world','o')
console.log(result);