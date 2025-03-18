// https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/#heading-how-to-create-an-array-in-javascript

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// console.log(nobleGases)

// let nobleGases = Array('He', 'Ne', 'Ar', 'Kr', 'Xn');
// console.log(nobleGases)

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// console.log(nobleGases[0]);
// console.log(nobleGases[1]);
// console.log(nobleGases[2]);
// console.log(nobleGases[3]);
// console.log(nobleGases[4]);


// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// nobleGases[5] ='RN'
// console.log(nobleGases)
// console.log(nobleGases.length)

// let elements = [[['H', 'Li', 'Na'], ['Be', 'Mg']], [['B', 'Al'], ['C', 'Si']]];
// console.log(elements[0])
// console.log(elements[1])
// console.log(elements[0][0][0])

// let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];
// firstGroup.length = 11;
// console.log(firstGroup)

// firstGroup[15] = 'Fr'
// console.log(firstGroup)

// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = ['flour', 'water', 'yeast', 'salt'];
// console.log(dough1 === dough2)


// console.log(Array() === Array());

// let dough1 = ['flour', 'water', 'yeast', 'salt'];
// let dough2 = dough1
// console.log(dough1 === dough2)


// let metal1 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
// let metal2 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
// console.log(metal1)
// console.log(metal2)

// const compareNested = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     } for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1[i].length; j++) {
//             if (arr1[i][j] !== arr2[i][j]) {
//                 return false
//             }
//         }
//     }
//     return true
// };
// console.log(compareNested)


// let albums1 = [
//     {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
// ];
// let albums2 = [
//     {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: undefined},
// ];
// console.log(albums1)
// console.log(albums2)


// let alkali = ['Li', 'Na', 'K'];
// let alkEarth = ['Be', 'Mg', 'Ca'];
// const result = [...alkali,...alkEarth]
// console.log(result)

// let metalsCopy = [...metals];
// console.log(metalsCopy)

// function f1(first, second, ...others) {
//     console.log(first);
//     console.log(second);
//     console.log(others);
// };
// console.log(f1('he','ar','kr','xn','rn'))

// function Example(first,second,...others){
//     console.log(first)
//     console.log(second)
//     console.log(others)
// }
// Example('happy','joy','unhappy','emotion','papa','mummy')

// function f2(...args) {
//     console.log(args);
//     // you can use an iterative method on the args array
// };
// f2('happy coding')

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn'];
// const [first,second,third,] = nobleGases
// console.log(first)
// console.log(second)
// console.log(third)

// let halogens = ['f','c']
// console.log(halogens.push('ppp'))

// let halogens = ['F', 'Cl'];
// console.log(halogens); // ['F', 'Cl']

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
// console.log(nobleGases.pop())
// console.log(nobleGases)
// console.log(nobleGases.indexOf('Ne'))

// let nobleGases = ['He', 'Ne', 'Ar', 'Kr', 'Xn', 'Rn'];
// console.log(nobleGases.shift())
// console.log(nobleGases.shift())
// console.log(nobleGases.shift())
// console.log(nobleGases.shift())
// console.log(nobleGases)

// let alkali = ['Li', 'Na', 'K'];
// let moreAlkali = ['Rb', 'Cs', 'Fr'];
// let alkEarth = ['Be', 'Mg', 'Ca'];
// // console.log(alkali)
// // console.log(moreAlkali)
// // console.log(alkEarth)

// let metals = [...alkali, ...alkEarth];
// console.log(metals)

// const example = ['re','rr','rr']
// console.log(Array.isArray(example))

// let animals = ['pig', 'dog', 'sheep'];
// console.log(animals.toString)
// console.log(animals.join(','))
// console.log(animals.join(' * '))
// let arr = [1, 'two', null, undefined, true, {}];
// console.log(arr)
// console.log(JSON.stringify(arr))

// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
// ];
// console.log(JSON.stringify(albums))

// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe'},
//     {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];

// const result = albums.map((val) => val)
// console.log(result)

// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe'},
//     {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];

// let albumsCopy = JSON.parse(JSON.stringify(albums));
// console.log(albumsCopy);

// let dMinor = ['D', 'E', 'F', 'G', 'A', 'B♭', 'C'];
// console.log(dMinor.includes('Aa'))
// console.log(dMinor.includes('A'))

// let animals = [
//     {no: 1, track: 'Pigs on the Wing (Part One)'},
//     {no: 2, track: 'Dogs'},
//     {no: 3, track: 'Pigs (Three Different Ones)'},
//     {no: 4, track: 'Sheep'},
//     {no: 5, track: 'Pigs on the Wing (Part Two)'}
// ];
// console.log(animals.map(el => el['track'].includes('Pigs')))
// console.log(animals.map(el => el['track'].includes('Two')))

// https://www.freecodecamp.org/news/javascript-array-handbook/
// let myArray = [29, 'Nathan', true];
// console.log(myArray)
// let myNumbers = [5, 10, 15];
// console.log(myNumbers)

// let myArray = Array(29, 'Nathan', true);
// console.log(myArray)

// let myArray = [29, 'Nathan', true];
// console.log(myArray[0])
// console.log(myArray[1])
// console.log(myArray[2])

// let animals = ['dog', 'bird', 'cat', 'horse'];
// let i= 0
// while(i<animals.length){
//     console.log(animals[i])
//     i++
// }

// let car = ['maruti','sumo','safari','tata']
// let i = 0 
// while(i<car.length){
//     console.log(car[i])
//     i++
// }
// let animals = ['dog', 'bird', 'cat', 'horse'];
// for(i in animals){
//     console.log(animals[i])
// }
// let animals = ['dog', 'bird', 'cat', 'horse'];
// animals.forEach(function(element,index){
//     console.log(`${index} ${element}`)
// })

// let stockPrices = [3, 7, 2, 15, 4, 9, 21, 14];

// let filteredPrices = stockPrices.filter(function (currentElement){
//     return currentElement > 10;
// })
// console.log(filteredPrices)


// let stocks = [
//     {
//       code: 'GOOGL',
//       price: 1700,
//     },
//     {
//       code: 'AAPL',
//       price: 130,
//     },
//     {
//       code: 'MSFT',
//       price: 219,
//     },
//     {
//       code: 'TSLA',
//       price: 880,
//     },
//     {
//       code: 'FB',
//       price: 267,
//     },
//     {
//       code: 'AMZN',
//       price: 3182,
//     },
//   ];

//   const filteredStock = stocks.filter((val) => val.price > 2000)
//   console.log(filteredStock)

// let numbers = [5, 2, 4, 1];
// console.log(numbers.sort())

// let numbers = [5, 2, 4, 1];
// numbers.sort().reverse();
// console.log(numbers)
