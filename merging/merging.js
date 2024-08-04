// const mergeObjects = arr => Object.assign({},...arr);

// const objectsArray = [
//     { name: "Alice", age: 25 },
//     { city: "Wonderland", job: "Adventurer" }
//   ];

//   const mergedObject = mergeObjects(objectsArray);
//   console.log(mergedObject)

const mergeObjects = arr => arr.reduce((acc,obj) => ({...acc,...obj}))
const objectsArray = [
    { name: "Alice", age: 25 },
    { city: "Wonderland", job: "Adventurer" }
  ];

const mergedObject = mergeObjects(objectsArray)
console.log(mergedObject)