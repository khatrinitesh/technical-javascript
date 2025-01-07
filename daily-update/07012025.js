// console.log('tst')

// const name = 'nitesh'
// if(name === 'nitesh'){
//     console.log('yes')
// }
// else{
//     console.log('no')
// }

// const achievement = 350
// if(achievement > 500){
//     console.log('a+')
// }
// else if(achievement > 400){
//     console.log('b+')
// }
// else if(achievement > 300){
//     console.log('c')
// }
// else{
//     console.log('failed')
// }

// console.log('Hello world!');

// console.warn('hello %s','quickref')
// console.error(new Error('ooops'))

// let amount = 6 
// let price = 4.99
// console.log(amount * price)

// let x = null 
// let name = 'test'
// const found = false 
// console.log(name,found,x)
// var a 
// console.log(a)

// let single = 'where are you right now'
// let double = 'where are you and your family right now'
// console.log(single.length)
// console.log(double.length)


// arithmetic operators 
// console.log(5+5)
// console.log(10-5)
// console.log(5*10)
// console.log(10/5)
// console.log(10%5)

// comments 
// this line will denote a comment 
/* the below configuration must be changed before deployment */

// assignment operators
// let number = 100
// number = number + 10;
// number += 10;
// console.log(number);

// string interpolation 
// let age = 7;
// //string concatentation 
// console.log('nitesh is ' + age + ' years old' )
// // string interpolatin 
// console.log(`nitesh is ${age} years old`)

// let count 
// console.log(count)
// count = 10 
// console.log(count)


// const keyword
// const numberOfColumns = 4;
// numberOfColumns = 8;

// conditionals rendering 
// const isMailSent= true;
// if(isMailSent){
//     console.log('mail sent to recipient')
// }

// // ternary operator 
// var x = 1 
// console.log(x === 1 ? true : false)

// // operators 
// console.log(true || false)
// console.log(10 > 5 || 10 > 20)
// console.log(false || false)
// console.log(10 > 100 || 10 > 20)
// // logical operator && 
// console.log(true && true)
// console.log(1 > 2 && 2 > 1)
// console.log(true && false)
// console.log(4 === 4 && 3 > 1)
// // comparison operators 
// console.log(1>3)
// console.log()


// const size = 10 
// if(size > 100){
//     console.log('big')
// }
// else if(size > 20){
//     console.log('medium')
// }
// else if(size > 4){
//     console.log('small')
// }
// else{
//     console.log('tiny')
// }

// switch statement 
// const food = 'salad'
// switch(food){
//     case 'oyster' : console.log('the taste of the sea');
//     break;
//     case 'pizza' : console.log('a delicious pie');
//     break;
//     default: console.log('enjoy your meal');
// }

// logical operator 
// let lateToWork = true; 
// let oppositeValue = !lateToWork
// console.log(oppositeValue)

// nullish coalscing opeartor ??
// console.log(null ?? ' win')
// console.log(undefined ?? 'me too')
// console.log(false ?? 'i lose')
// console.log(0 ?? 'damn it')
// console.log(0 == false)
// console.log(0 === false)
// console.log(1 == '1')

// console.log(0 == false);
// console.log(0 === false)
// console.log(1 == '1')
// console.log(1 === '1')
// console.log(null == undefined)
// console.log('0' ==false)
// console.log('0' === false)

// functions 
// function sum(n1,n2){
//     return n1 + n2 
// }
// console.log(sum(44,44))

// function rocketToMars(){
//     return 'BOOM'
// }
// const rocketToMars = function(){
//     return 'BOOM!'
// }

// const sum = (p1,p2) => {
//     return p1 + p2 
// }
// console.log(sum(10,20))

// with no arguments 
// const printHello = () => {
//     console.log('hello')
// }
// printHello()

// with a multiple agruments 
// const checkWeight = (weight,height) => {
//     console.log(`Weight: ${weight} Height: ${height}`)
// }
// checkWeight(24,35)

// concise arrow functions 
// const multiply = (a,b) => a * b 
// console.log(multiply(10,20))

// function expressions
// const dog = function(){
//     return 'woof!'
// }
// console.log(dog())

// function parameters 
// function sayHello(name){
//     return `hello ${name}`
// }
// console.log(sayHello('test'))

// function declaration 
// function add(a1,a2){
//     return a1 + a2 
// }
// console.log(add(102,102))

// javascript scope 
// function myFunction(){
//     var pizzaName = 'margarita'
//     console.log(pizzaName)
// }
// myFunction()

// block scoped variables 
// const isLoggedIn = true 
// if(isLoggedIn == true){
//     const statusMsg = 'logged in'
// }
// console.log(statusMsg)

// global variables 
// const color = 'blue'
// function printColor(){
//     console.log(color)
// }
// printColor()

// for(let i =0;i<3;i++){
//     console.log(i)
// }

// for(var i=0;i>3;i++){
//     console.log(i)
// }

// for(var i=0;i<4;i++){
//     setTimeout(_ => console.log(i),10)
// }

// arrays 
// const fruits = ['apple','banana','pineapple']

// different data tyoes 
// const data = [1,'chicken',false]

// property length 
// const numbers = [1,2,3,4]
// console.log(numbers.length)

// accessing an array element 
// const myArray = [100,200,300]
// console.log(myArray[0]) // 100
// console.log(myArray[1]) // 200

// method.push()
// adding a single element Add items to the end and returns the new array length.
// const cart = ['apple','orange']
// console.log(cart.push('pineapple'))

// adding multiple elements  
// const numbers = [1,2]
// console.log(numbers.push(3,4,5))

// accessing an array elements 
// const myArray = [100,200,300]
// console.log(myArray[2])
// console.log(myArray[1])

// method.pop() Remove an item from the end and returns the removed item.
// const fruits = ["apple", "orange", "banana"]
// fruits.pop()
// console.log(fruits)

// method.shift() Remove an item from the beginning and returns the removed item.
// let cats = ['Bob', 'Willy', 'Mini'];
// console.log(cats.shift())

// method.unshift  Add items to the beginning and returns the new array length.
// let cats = ['bob']
// const result = cats.unshift('willy')
// console.log(result)

// method.conat() if you want to avoid mutating your original array, you can use concat.
// const numbers = [3,2,1]
// const newFirstNumber = 4  
// console.log([newFirstNumber].concat(numbers))

// reverse loop
// const fruits = ['apple','pineapple','orange']
// for(let i=fruits.length-1;i>=0;i++){
//     console.log(`${i}.${fruits[i]}`)
// }

// iterators 
// let plusFive = (number) => {
//     return number + 5 
// }
// let f = plusFive;
// console.log(plusFive(3))
// console.log(f(9))

// const isEven = (n) => {
//     return n % 2 == 0;
// }

// let printMsg = (evenFunc,num) => {
//     const isNumEven = evenFunc(num);
//     console.log(`${num} is an even number: ${isNumEven}`)
// }
// printMsg(isEven,214)

// const numbers = [1,2,3,4]
// const resultcalc = numbers.reduce((a,b) => {
//     return a + b 
// })
// console.log(resultcalc)

// array method reduce 

// array method map 
// const members = ["Taylor", "Donald", "Don", "Natasha", "Bobby"];
// const resultMembers = members.map((val) => {
//     return val + ' joined the contest'
// })
// console.log(resultMembers)
// array method .forEach 
// const numbers = [28,77,45,99,27]
// const finalNum = numbers.forEach((val) => {
//     console.log(val)
// })

// array method filter
// const randomNumbers = [4, 11, 42, 14, 39];
// const finalGreat = randomNumbers.filter((val) => {
//     return val > 5
// })
// console.log(finalGreat)

// objects  accessing properties
// const apple = {
//     color: 'Green',
//   price: { bulk: '$3/kg', smallQty: '$4/kg' }
// }
// console.log(apple.color)
// console.log('price', apple.price)
// console.log('bulk', apple.price.bulk)
// console.log('smallQty', apple.price.smallQty)

// non-existent properties 
// const classElection = {
//     date:'January 7th'
// }
// console.log(classElection.date)

// Mutable
// const student = {
//     name: 'Sheldon',
//     score: 100,
//     grade: 'A',
//   }
//   console.log(student)
//   student.name = 'sameet'
//   console.log(student)
//   student.score = 200 
//   delete student.grade 
//   console.log(student)

// delete operator 
// const person = {
//     firstName: "Matilda",
//     age: 27,
//     hobby: "knitting",
//     goal: "learning JavaScript"
// }
// delete person.goal 
// console.log(person)



