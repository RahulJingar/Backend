const express = require('express');
const path = require('path');
const app = express();
const port = 80


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    res.render("index")
})


app.get('/profile/:username',(req,res)=>{
    res.send(`Welcome, ${req.params.username}`)
})


app.get('/author/:username/:age',(req,res)=>{
    res.send(`Welcome, ${req.params.username} of age ${req.params.age}`)
})

app.listen(port, (req,res)=>{
    console.log("it is running")
});