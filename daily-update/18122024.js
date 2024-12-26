// const obj = {
//     name:'test',
//     age:30,
//     greet(){
//         console.log(`hello, my name ${this.name}`)
//     }
// }
// obj.greet();

// const obj = new Object();
// obj.name = 'test'
// obj.age = 35 
// obj.greet = function(){
//     console.log(`hello my name is ${this.name}`)
// }
// obj.greet();

// function Person(name,age){
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log(`hello my name ${this.name}`)
//     }
// }

// const p1 = new Person('test1',35)
// const p2 = new Person('test2',36)
// console.log(p1,p2)

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age; 
//     }
//     greet(){
//         console.log(`hello my name is ${this.name}`)
//     }
// }
// const p1 = new Person('t1',33)
// const p2 = new Person('t2',34)
// console.log(p1)
// console.log(p2)

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age; 
//     }
//     greet(){
//         console.log(`hello my name ${this.name}`)
//     }
// }
// const p1 = new Person('test1',33)
// const p2 = new Person('test2',34)
// console.log(p1)
// console.log(p2)

// const example = {
//     greet(){
//         console.log(`hello my name is ${this.name} and age iss ${this.age}`)
//     }
// }
// const obj = Object.create(example)
// obj.name = 'test'
// obj.age = 34
// obj.greet()

// function createPerson(name,age){
//     return{
//         name,
//         age,
//         greet(){
//             console.log(`hello my name is ${this.name} and age is ${this.age}`)
//         }
//     }
// }
// const p1 = createPerson('test1',22)
// const p2 = createPerson('test2',23)
// p1.greet();
// p2.greet()

// const obj = JSON.parse('{"name": "John", "age": 30}');
// console.log(obj.name)

// const singleton = (function (){
//     const instance = {
//         name:'test',
//         age:34,
//         greet(){
//             console.log(`hello my name is ${this.name} and age is ${this.age}`)
//         }
//     }
//     return instance 
// })()
// singleton.greet();