const findMax = obj => Math.max(...Object.values(obj))
const objectExample = {a:40,b:10,c:20}
const result = findMax(objectExample)
console.log(result)