const Person=require('../models/Person.model');

const indexController=(req,res)=>{
    let person=new Person(1,'John Doe','Single')
    res.json({message:'hello world',
              personData:person
            });
}
module.exports=indexController