'use strict';

const mongoose=require('mongoose');

/*
first define a schema 
schema: description about how the data must looklike in the database
cats:
    name:{type:String}
*/

const catSchema= new mongoose.Schema({
    name:{type:String},
})

const catModel=mongoose.model('testingCats',catSchema)
// seeding
// const seedCat=()=>{
//     const frankie=new catModel({
//         name:'Farnkie'
//     });

//     console.log(frankie);
//     frankie.save()
// }
module.exports=catModel