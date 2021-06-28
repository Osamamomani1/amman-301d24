const express = require('express') // require the express package
const app = express() // initialize your express app instance
const cors = require('cors');
const weatherData= require('../starter-code/data/weather.json')
require('dotenv').config();
app.use(cors()) // after you initialize your express app instance

// a server endpoint (api)
app.get('/',  (req, res) =>{ // callback function of what we should do with our request
  res.send('Hello World') // our endpoint function response
})

app.get('/students-list', (req, res)=>{
    let students=[
        {name:'s1', id:1},
        {name:'s2', id:2},
        {name:'s3', id:3}
    ]
    res.json(students)
})
app.get('/about-us', (req, res)=>{
    res.send('301d24 studets are awesome')
})

app.get('/weather', (req, res)=>{
    res.json(weatherData)
})

// app.listen(process.PORT) // kick start the express server to work
app.listen(8000, ()=>{
    console.log('started server on port 8000')
}) // kick start the express server to work
