'use strict';

const myArray=[1,2,3,4,5,6,7,8];
// we need to get the even numbers only out of the original array

// const evenArry=[]
// myArray.forEach(number=>{
//     if(number%2===0){
//         evenArry.push(number);
//     }
// });
// const evenArray=myArray.map(number=>{
//     if (number % 2 === 0){
//         return number;
//     }
// });

const oddArray=myArray.filter(number=>{
    return number % 2 !== 0;
});

/*
- foreach it is an array method to loop through the array:
    - it has no return value
    - it does not modify the original array
    
- map it is an array method to loop through the array:
    - it has a return value(new array with the same legnth of the original array)
    - it does not modify the original array

- filter it is an array method to loop through the array:
    - it has returns a new array(elements must pass a condition or a critira in order to be returned in the new array)
    - it does not modify the original array        
*/


console.log('new array: ',oddArray);
console.log('original array: ',myArray);
// console.log('hello 301d24');
// const greetFunction=username=>{
//     let message=`hello ${username}`;
//     console.log(message);
//     // alert(message);
// }

// greetFunction('Ahmad');
