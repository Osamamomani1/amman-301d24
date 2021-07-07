'use strict';

// Splice method
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// const slicedAnimals=animals.slice(2, -2);
// console.log('sliced array',slicedAnimals);
// console.log('original array',animals);
// expected output: Array ["camel", "duck", "elephant"]
// console.log(animals.slice(1, 3));
// expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// expected output: Array ["camel", "duck"]

// Splice
// const months = ['Jan', 'March', 'April', 'June'];
// console.log("before splice",months);
// months.splice(4, 1, 'May');
// console.log("after splice",months);
// inserts at index 1
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// replaces 1 element at index 4
// console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// join()
let arr = ['this','was','fun']
console.log( arr.join('/') ); // commas will be the default
  // prints out: this,was,fun
  
// console.log( arr.join('') ); // one long word
  // prints out: thiswasfun
  
// console.log( arr.join('.') ); // millennial advertising
  // prints out: this.was.fun.
  
// console.log( arr.join('-') ); // kebab case
  // prints out: this-was-fun
  
// console.log( arr.join('_') ); // snake case
  // prints out: this_was_fun

// =========================
// string methods: split()
// let str = 'yalbachar@ltuc.com';
// let words = str.split(' ');
// let username=str.split('@');
// let removedCom=str.split('.com')
// console.log(str)
// console.log(username);
// console.log(removedCom);
// console.log("after split",str);
  // prints out: [ 'This', 'is', 'a', 'really', 'cool', 'thing' ]
// let iii = str.split('i');
// console.log(iii);
  // prints out: [ 'Th', 's ', 's a really cool th', 'ng' ]

