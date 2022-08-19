// importing express
const express = require('express');

// initializing express
const app = express();

const port = 5000;

// routes or endpoint
app.get('/', (req,res)=>{
    res.send('Response from express');
})

app.get('/home', (req,res)=>{
    res.send('Response from express for home');
})

app.listen( port, ()=>{
    console.log('server has started');
});
