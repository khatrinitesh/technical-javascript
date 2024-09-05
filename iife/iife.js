(function multiply(){
    var result  = a * b 
    console.log(result)
}),multiply(10,20)
// (function a(){
//     console.log('a')
//     function b(){
//         console.log('b')
//         function c(){
//             console.log('c')
//         }
//         c()
//     }
//     b()
// })();
// module pattern 
// var myModule = (function(){
//     var privateVariable = 'I am private';

//     return {
//         getPrivate:function(){
//             return privateVariable;
//         }
//     };
// })();
// console.log(myModule.getPrivate()); 

// // advanced 
// (function(a,b){
//     var minus = a - b 
//     console.log('Minus',minus)
// })(10,20)

// (function(a,b){
//     var sum = a + b 
//     console.log('Sum:',sum)
// })(10,29)