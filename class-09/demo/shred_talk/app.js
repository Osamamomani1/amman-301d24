'use strict';
let person =
  {
    "person_name":"John",
    "role":"Dad",
    "interests": ["Coaching","Teaching"]
  };

// for( let i in person ) {
//     console.log(i, person[i]);
// };

// let properties = Object.keys(person);
// console.log(properties)
// properties.forEach( property => {
//   console.log(property, person[property]);
// })

// Or more succinctly
// Object.keys(person).forEach( property => {
//   console.log(property, person[property]);
// })


// console.log(Object.values(person));

// To Iterate it ...
// Object.values(person).forEach(value => {
//   console.log(value);
// })

// console.log(Object.entries(person));
// console.log('=============================')
// Object.entries(person).forEach(entry => {
//     console.log(entry);
//     entry.forEach(item=>{console.log(item)})
//   })