const areAnagrams = (str1,str2) => 
    str1.length === str2.length && 
str1.split('').sort().join('') === str2.split('').sort().join('');
const result = areAnagrams('hello world','hello world')
console.log(result)