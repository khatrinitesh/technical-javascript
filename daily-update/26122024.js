// let person = {
//     name:'test',
//     age:34,
//     greet:function(){
//         console.log('hello, ' + this.name)
//     }
// }
// person.greet()

// let person = new Object();
// person.name ='test'
// person.age = 34
// person.greet = function(){
//     console.log(`hello ${person.name} ${person.age}`)
// }
// person.greet()

// function Person(name,age){
//     this.name =name;
//     this.age = age;
//     this.greet = function(){
//         console.log('hello' + this.name)
//     }
// }
// let person1 = new Person('sachin',55)
// let person2 = new Person('rahul',54)
// console.log(person1,person2)

// function createPerson(name,age){
//     return{
//         name:name,
//         age:age,
//         greet:function(){
//             console.log('hello' + this.name + this.age)
//         }
//     }
// }
// let p1 = createPerson('tsest1',33)
// let p2 = createPerson('tsest2',34)
// console.log(p1)
// console.log(p2)

// let person = { name: "John", age: 30 };
// let personClone = {...person,age:44}
// console.log(personClone)

// let person = { name: "John", age: 30 };
// let personClone = Object.assign({},person,{age:34})
// console.log(personClone)


// function greet(city,country,age){
//     console.log(`hello + ${this.name}, city is ${city}, country is ${country}, age is ${age}`)
// }
// const person = {name:'test'}
// console.log(greet.call(person,'mumbai','india',34))

// const person = {
//     name:'test',
//     age:34,
//     greet:function(){
//         console.log(`hello ${this.name}, ${this.age}`)
//     }
// }
// person.greet()

// function Person(name,age){
//     return{
//         name:name,
//         age:age,
//         greet:function(){
//             console.log(`hello ${this.name}, ${this.age}`)
//         }
//     }
// }
// const s1 = Person('test1',34)
// const s2 = Person('test2',35)
// console.log(s1)
// console.log(s2)

// function greet(city,country,age){
//     console.log(`hello ${this.name} ${city} ${country} ${age}`)
// }
// const example = {name:'test'}
// greet.apply('test',['chicago','usa',55])

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(2,4))

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(3))

// let arr = [10, 20, 30, 40, 50];
// console.log(arr.slice(1,3))

// let obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// };
// console.log(obj.name)
// console.log(obj.age)
// console.log(obj.city)

// obj.country =' india'
// console.log(obj.country)
// for(key in obj){
//     console.log(key + ":" + obj[key])
// }

// let map = new Map();
// map.set('name','test')
// map.set('age',30)
// map.set('city','mumbai')
// console.log(map.get('name'))
// console.log(map.get('age'))
// console.log(map.get('city'))
// console.log(map.size)

// let map = new Map();
// map.set('name','test'),
// map.set('age','34'),
// map.set('city','mumbai'),
// map.set('state','maharashtra'),
// console.log(map.get('name'))
// console.log(map.get('age'))
// console.log(map.get('city'))
// console.log(map.get('state'))
// console.log(map.size)

// What is the difference between == and === operators
// console.log(5=='5')
// console.log(5==='5')
// console.log(null===undefined)
// console.log(null==undefined)
// console.log(true == 1)
// console.log(true === 1)
// console.log(false== 0)
// console.log(false=== 0)
// console.log(5 === "5");
// console.log(null==undefined)
// console.log(null===undefined)
// console.log("" == false);  
// console.log("" === false);
// console.log({} == {});
// console.log([] == []);
    

// const addArrow = (a, b) => a + b;
// console.log(addArrow(3,3))

// function multiply(a,b){
//     return  a  * b 
// }
// console.log(multiply(1,20))


// function Counter(){
//     this.count = 0
//     setInterval(() => {
//         this.count++;
//         console.log(this.count)
//     },500)
// }
// const result = new Counter()

// function Counter(){
//     this.count = 0
//     setInterval(() => {
//         this.count++
//         console.log(this.count)
//     },300)
// }
// const final = new Counter()

// function square(x){
//     return x * x 
// }
// console.log(square(25))

// const numbers = [1, 2, 3, 4, 5];
// const mapped = numbers.map((val) => val * 2) // Arrow function used in map
// console.log(mapped)

// const add = (a, b) => a + b;
// console.log(add(1,20))

// const obj = {
//     num1: 10,
//     num2: 20,
//     addNumbers: function() {
//         setTimeout(() => {
//             this.num1 += 5;
//             this.num2 += 5;
//             console.log(`Updated numbers: ${this.num1}, ${this.num2}`);
//         }, 1000);
//     }
// };
// obj.addNumbers()

// const obj = {
//     num1:10,
//     num2:20,
//     addNumbers:function(){
//         setTimeout(() => {
//             this.num1 += 5;
//             this.num2 += 10;
//             console.log(`Updated numbers: ${this.num1},${this.num2}`)
//         },500) 
//     }
// }
// obj.addNumbers()

// const objValue = {
//     num1:333,
//     num2:444,
//     addNumbers:function(){
//         setTimeout(() => {
//             this.num1 += 11;
//             this.num2 += 20;
//             console.log(`updated numbers ${this.num1}, ${this.num2}`)
//         },500)
//     }
// }
// objValue.addNumbers();

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map((num) => num *2)
// console.log(squaredNumbers)

// function multipler(factor){
//     return function(number){
//         return number * factor 
//     }
// }

// const m2 = multipler(2);
// const m3 = multipler(3)
// console.log(m2(2));
// console.log(m3(10));

// What is the currying function
// function compose(f,g){
//     return function(x){
//         return f(g)
//     }
// }

// setTimeout(function(){
//     console.log('hello after 2 minutes')
// },200)

// let numberArray = [];
// const impureAddNumber = (number) => numberArray.push(number);

// function multiply(a){
//     return function(b){
//         return a * b 
//     }
// }
// const multiply2 = multiply(2);
// console.log(multiply2(5));

// function sum(a){
//     return function(b){
//         return function(c){
//             return a + b + c 
//         }
//     }
// }
// console.log(sum(10)(20)(30))

// function add(a){
//     return function(b){
//         return function(c){
//             return a + b + c 
//         }
//     }
// }
// console.log(add(10)(20)(30))

// const multiply = a => b => a * b;
// const resultfinally = multiply(5)
// console.log(resultfinally(10))

// What is the difference between let and var
// function example(){
//     if(true){
//         var x = 5 
//     }
//     console.log(x)
// }
// example()

// function testVar(){
//     var x = 5 
//     console.log(x)
// }
// testVar()

// function testVar(){
//     let x = 5
//     console.log(x)
     
// }

// testVar()

// What is the Temporal Dead Zone
// let x = 10
// console.log(x)

// function example(){
//     console.log(a)
//     let a = 4 
// }
// example()

// for (let i = 0; i < 5; i++) {
//     console.log(i);  // 0, 1, 2, 3, 4
//   }
//   console.log(i)

// What is an IIFE (Immediately Invoked Function Expression)
// (function(){
//     let message = 'Do eu tempor mollit anim velit ipsum qui velit.'
//     console.log(message)
// })();
// console.log(message)// message isn't defined

// (function(name){
//     console.log(`hello ${name}`)
// },('test'))

// const person = {
//     name: 'John',  // Assign a name here
//     age: 30,       // Assign an age here
//     greet: function() {
//         console.log(`Hello ${this.name} ${this.age}`);
//     }
// }
// person.greet()

// function person(name,age){
//     this.name=name;
//     this.age=age;
//     this.greet= function(){
//         console.log(`hello ${this.name} ${this.age}`)
//     }
// }
// const reuslt1 = new person('test',33)
// const reuslt2 = new person('test',33)
// console.log(reuslt1)
// console.log(reuslt2)

// function person(name){
//     return{
//         name:name,
//         greet:function(){
//             console.log(`hello ${name}`)
//         }
//     }
// }

// const final =  person('test')
// final.greet()

// (function example(){
//     var message = 'Reprehenderit aute exercitation eiusmod non tempor do sint laborum dolor non duis.'
//     console.log(message)
// })()


// let counter = (function(){
//     let count = 0;
//     return{
//         increment:function(){
//             count++
//             console.log(count)
//         },
//         decrement:function(){
//             count--
//             console.log(count)
//         }
//     }
// })()
// counter.increment()
// counter.decrement()

// (() => {
//     const x = 10
//     const y =20
//     console.log(x +y )
// })()

// const url = "https://www.example.com/search?query=Hello World & JavaScript!";
// console.log(encodeURI(url))
// console.log(decodeURI(url))

// console.log(a)
// var x = 10;
// console.log(a)

// foo()
// function foo(){
//     console.log('hello from foo')
// }

// bar();
// var bar = function(){
//     console.log('hello from bar')
// }

// function createTimer(){
//     let count = 0;
//     setInterval(() => {
//         for(let i=0;i<10;i++){
//             console.log(i)
//         }
//     },1000)
// }
// createTimer()

// let arr = new Array(5);
// console.log(arr)
// console.log(Array.isArray(arr))
// console.log(arr.length)
// let arr = new Array('apple','mango')
// console.log(arr);
// console.log(arr.length);
// console.log(arr)
// let arr2 = new Array(3);
// console.log(arr2.length)
// let arr3 = new Array(3);
// console.log(Array.isArray(arr3))
// for(let i=0;i<arr.length;i++){
//     console.log(i)
// }
 


