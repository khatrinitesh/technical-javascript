const findShortestWord = words => words.reduce((shortest, word) => word.length < shortest.length ? word : shortest, words[0]);
const words = ['apple','banana','fig','grape'];
const shortest = findShortestWord(words);
console.log(shortest)