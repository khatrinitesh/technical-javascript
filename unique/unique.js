const uniqueCharts = str => [...new Set(str)].join('')
console.log(uniqueCharts('hello'));
console.log(uniqueCharts('character'));
console.log(uniqueCharts('javascript'));