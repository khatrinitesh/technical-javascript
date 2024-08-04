const moveZerosToEnd = arr => {
    let index = 0;

    for(const num of arr) {
        if(num !== 0){
            arr[index++] = num;
        }
    }

    while(index < arr.length){
        arr[index++] = 0;
    }

    return arr;
}
const array =[ 0,1,2,3,0,]
const result = moveZerosToEnd(array)
console.log(result)