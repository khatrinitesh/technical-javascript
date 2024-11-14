// function sayHi(){
//     console.log(name)
//     console.log(age)
//     var name = 'test'
//     let age = 55 
// }
// sayHi();
// undefined and ReferenceError

// for(var i=0;i<3;i++){
//     setTimeout(() => console.log(i),1)
// }
// for(let i=0;i<3;i++){
//     setTimeout(() => console.log(i),1)
// }
//3 3 3 and 0 1 2

// const shape = {
//     radius:10,
//     diameter(){
//         return this.radius * 2
//     },
//     perimeter: () => 2 * Math.PI * this.radius
// }
// console.log(shape.diameter());
// console.log(shape.diameter());
// 20 and NaN

// console.log(+true);
// console.log(!'test');
// 1 and false

// const bird = {
//     size:'small'
// }
// const mouse = {
//     name:'test',
//     small:'true'
// }
// console.log(mouse.bird.size)
// mouse.bird.size is not valid

// let c = {greeting:'hey'}
// let d 
// d = c 
// c.greeting = 'hello'
// console.log(d.greeting)
// hello

// let a = 3 
// let b = new Number(3)
// let c = 3 
// console.log(a == b)
// console.log(a === b)
// console.log(b === c)
// true - false - false

// class Chameleon{
//     static colorChange(newColor){
//         this.newColor = newColor
//         return this.newColor
//     }

//     constructor({newColor = 'green'} = {}){
//         this.newColor = newColor
//     }
// }

// const freddie = new Chameleon({newColor:'purple'})
// console.log(freddie.colorChange('orange'))
// TypeError

