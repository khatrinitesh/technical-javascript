const maxProduct = nums => {
    nums.sort((a,b) => a -b)

    return Math.max(
        nums[0] * nums[1] * nums[nums.length -1],
        nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
    );
};
const array = [1, 10, -5, 1, -100];
console.log(maxProduct(array));


// const findMax = obj => Math.max(...Object.values(obj))
// const objectExample = {a:40,b:10,c:20}
// const result = findMax(objectExample)
// console.log(result)