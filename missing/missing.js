const findMissingNumber = arr => {
    const n = arr.length;
    const totalSum = (n * (n+1)) / 2;
    const actualSum = arr.reduce((sum,num) => sum + num,0)
    return totalSum - actualSum
}
const numbers = [0,1,2,3,4]; // missing number is 2 
const missingNumber = findMissingNumber(numbers);
console.log(missingNumber)