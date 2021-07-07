'use strict';
// Functions:
// we use it prettify code
// reduce redundant code
console.log('we are alive');

// Normal function
// function myFunction(){
//     alert('hello 301d24 students');
// }
let button=document.getElementById('submit');

// using Anonymous function
// button.addEventListener('click', function(){
//     alert('hello 301d24 students');
// });
// myFunction();

// function myFunction(name){
//     let greet=`hello ${name}`;
//     return greet;
// }

// console.log(myFunction('Hisham'));
// Arrow Funciton
let arrowFunction=name=>{
    let greet=`hello ${name}`;
    console.log('Im an arrow function:', greet);
}
// arrowFunction('Qusai');
// button.addEventListener('click', ()=> alert('hello 301d24 from arrow function'));
// ES5 ==> JavaScript
// ES6 ==> JavaScript
let multiArgs=(firstName, lastName)=>  firstName+ ' '+lastName;
console.log(multiArgs('Aseel','Alsayeh'));
// function MyConst(name, age){
//     this.name=name;
// }