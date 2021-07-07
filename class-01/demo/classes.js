'use strict';

class Animal{
    constructor(name, eyes, height,color){
        this.name=name;
        this.eyes=eyes;
        this.height=height;
        this.color=color;
    }
    
    walk(age){
        let message='Cat walking and my age is : '+String(age);
        return message
    }
}

class Cat extends Animal {
    // for adding new property to the child only
    constructor(name, eyes, height,color, sound){
        super(name, eyes, height,color);
        this.sound=sound;

    }
    purr(){
        console.log('purrrrrrr');
    }
}

class Tiger extends Cat{
    constructor(name, eyes, height,color, sound, tribe){
        super(name, eyes, height,color, sound);
        this.tribe=tribe;
    }
}
class Dog extends Animal{
  
}

let sherokhan= new Tiger('sherokhan','blue eyes', '2m', 'orange and black','rawr','cool tribe');
let bill= new Dog('Bill','brown eyes','45cm','black and white');
let sammy= new Cat('Sammy','Green eyes','30cm','orange', 'mewooo');
// console.log(sammy.name);
// console.log(sammy.sound);
// console.log(bill.name);
// sammy.purr();
sherokhan.purr()
console.log(sherokhan.name);
console.log(sherokhan.walk());



