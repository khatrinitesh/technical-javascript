// const isPalindrome = str => {
//     const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return cleaned === cleaned.split('').reverse().join(''); // check for palindrome
// };

// console.log(isPalindrome('A man, a plan, a canal: Panama'));
// console.log(isPalindrome("race a car")); // false
// console.log(isPalindrome("")); // true
// console.log(isPalindrome("No 'x' in Nixon")); // true


// const isPalindrome = num => num.toString() === num.toString().split('').reverse().join('');
// const separatePalindrome = arr => arr.filter(isPalindrome)
// const numbers = [121,123,1331,456,989]
// const palindromes = separatePalindrome(numbers)
// console.log(palindromes)