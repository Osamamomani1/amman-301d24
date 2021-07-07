'use strict';

const arr=[3,8,6,1,9,2];
// [3,8,6,1,9,2]
// [3,6,8,1,9,2]
// [3,6,1,8,9,2]
// [3,6,1,8,2,9]
// [3,1,6,8,2,9]
// [3,1,6,2,8,9]

// descending
// [3,8,6,1,9,2]
// [8,3,6,1,9,2]
// [8,6,3,1,9,2]
// [8,6,3,1,9,2]
// [8,6,3,9,1,2]
// [8,6,3,9,2,1]

// ASCII code : is the representation of charcters in the computer
// const arr=['x','h','c','i','b','e','E'];
console.log('original: ', arr);
const descendingSort=(a,b)=>{
    let result=b-a;
    console.log(result)
    return result;
}
arr.sort(descendingSort);
console.log('sorted: ', arr);

