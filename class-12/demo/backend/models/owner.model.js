'use strict';

const mongoose=require('mongoose');

/*
first define a schema 
schema: description about how the data must looklike in the database
cats:
    name:{type:String}
*/

const catOwnerSchema= new mongoose.Schema({
    email:{type:String},
})

module.exports=catOwnerSchema