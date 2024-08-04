const areObjectsEqual = (o1,o2) => {
    const keys1 = Object.keys(o1);
    const keys2 = Object.keys(o2);

    if(keys1.length !== keys2.length) return false;

    if(!keys1.every((key,index) => key === key2[index])) return false;

    return keys1.every(key => obj1[key] === obj2[key]);
}

const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { a: 1, b: 2, c: 3 };
const obj3 = { a: 1, c: 3, b: 2 };
const obj4 = { a: 1, b: 2 };

console.log(obj1,obj2,obj3,obj4);