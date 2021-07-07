const express=require('express');
const cors=require('cors');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config();
const port=process.env.PORT;
const catController=require('./controller/cats.controller');
// const seedCat=require('./models/cats.model');
const catModel=require('./models/cats.model');

app.use(cors());

mongoose.connect('mongodb://localhost:27017/favCats',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.get('/cats',catController);

app.get('/givemecats',(req,res)=>{
    catName=req.query.catname
    catModel.findOne({name:catName}, (error, cat)=>{
        if (error){
            res.send(error.message)
        }
        res.send(cat);
    });
});
app.listen(port,()=>{   
    console.log('listening to port: 8000');
})