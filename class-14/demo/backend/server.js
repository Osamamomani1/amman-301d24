const express=require('express');
const cors=require('cors');
const jkwsClient=require('jwks-rsa');
const jwt=require('jsonwebtoken');
const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/catOwners',
                    {useNewUrlParser:true,useUnifiedTopology:true});
require('dotenv').config();
const app=express();
app.use(cors());
// the middleware for requests
app.use(express.json());


const port=process.env.PORT;

const {
    getCats,
    createCat,
    updateCat,
    deleteCat
}=require('./controllers/cat.controller');

// app.post('/testing-post',(req,res)=>{
//     const data=req.body
//     res.send(data);
// })

app.get('/cats',getCats);
app.post('/create-cat',createCat);
app.put('/update-cat/:cat_id',updateCat);
app.delete('/delete-cat/:cat_id',deleteCat);

app.listen(port,()=>{
    console.log(`listening to port: ${port}`);
})