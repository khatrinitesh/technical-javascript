const findPairWithSum = (arr,target) => {
    const seen = new Set();
    for(const num of arr){
        if(seen.has(target - num)) return [target - num,num];
        seen.add(num);
    }
    return null;
}

const numbers = [2,7,11,15];
const target = 9;
const pair = findPairWithSum(numbers,target);
console.log(pair);