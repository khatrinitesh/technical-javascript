// function sayHi(){
//     console.log(name);
//     console.log(age);
//     var name = 'test';
//     let age = 10;
// }
// sayHi();

// for(var i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i)
//     },1)
// }
// for(let i=0;i<3;i++){
//     setTimeout(() => {
//         console.log(i)
//     },1)
// }

// const shape = {
//     radius:10,
//     diameter(){
//         return this.radius + 2;
//     },
//     perimeter:() => 2 * Math.PI * this.radius
// }
// console.log(shape.radius)
// console.log(shape.perimeter())

// const shape  = {
//     radius:10,
//     diameter(){
//         return this.radius + 2;
//     },
//     perimeter:() => 2 * Math.PI * this.radius
// }
// console.log(shape.radius)
// console.log(shape.perimeter())

// console.log(+true);
// console.log(!'test')

// const bird = {
//     size:'small'
// }
// const mouse = {
//     name:'tst',
//     small:true 
// }
// console.log(bird)
// console.log(mouse)

// let c = { greeting:'hey!'}
// let d;
// d = c; 
// c.greeting = 'hello';
// // console.log(d.greeting);

// let a = 3 
// let b  = new Number(3);
// let c = 3; 
// console.log(a == b);
// console.log(a === b);
// console.log(b === c);

// let greeting = {}
// greeting 
// console.log(greeting)

// function bark(){
//     console.log('woof')
// }
// bark.animal = 'dog'

// function Person(fname,lname){
//     this.fname = fname;
//     this.lname = lname; 
// }
// const member = new Person('nitesh','khatri')
// Person.getFullName = function(){
//     return `${this.fname} ${this.lname}`
// }
// console.log(member.getFullName())

// function Person(fname,lname){
//     this.fname = fname;
//     this.lname = lname; 
// }
// const member1 = new Person('test1','surname1');
// const member2 =  Person('test2','surname2');
// console.log(member1)
// console.log(member2)

// capturing target bubbling 

// function sum(a,b){
//     return a + b 
// }
// console.log(sum(10,20))

// let number = 0;
// console.log(number++)
// console.log(++number)
// console.log(number)


// function getPersonInfo(one,two,three){
//     console.log(one)
//     console.log(two)
//     console.log(three)
// }

// const person = 'hello'
// const age = 21 
// getPersonInfo`${person} is {age} years old`

// function checkAge(data){
//     if(data === {age:18}){
//         console.log('you are an adult')
//     }
//     else if(data = {age:18}){
//         console.log('you are still an adult')
//     }
//     else{
//         console.log('hmm you dont have an age i guess')
//     }
// }
// checkAge({age:16})

// function getAge(...args){
//     console.log(typeof args)
// }
// getAge(21)

// function getAge(){
//     'use strict';
//     age = 21;
//     console.log(age);
// }
// getAge()

// const sum = eval('10+5+5')
// // console.log(sum)

// sessionStorage.setItem('cool_secret', 123);
// var num = 8;
// var num = 10;

// console.log(num);

