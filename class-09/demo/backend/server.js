'use strict';
const express= require('express');
const cors=require('cors');
const indexController=require('./controllers/Index.controller');
const weatherController=require('./controllers/weather.controller');
const aboutUsController=require('./controllers/aboutUs.controller');

require('dotenv').config();
const app=express();
app.use(cors());
const PORT=process.env.PORT;

app.get('/',indexController);

app.get('/about-us',aboutUsController);

app.get('/weather',weatherController);

app.listen(PORT,()=>{
    console.log(`listening to port: ${PORT}`);
});



