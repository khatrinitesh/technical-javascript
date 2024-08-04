const sumFruits = fruits => fruits.reduce((sum,{quantity}) => sum + quantity,0);
const fruitArray = [
    { name: "apple", quantity: 5 },
    { name: "banana", quantity: 2 },
    { name: "orange", quantity: 3 }
]
const total =sumFruits(fruitArray)
console.log(total)