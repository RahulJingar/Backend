const express = require('express');
const app = express();
const port = 80;
const user = require('./userModule');


app.get('/', (req,res) => {
    res.send("Hello World!!")
})

app.get('/create', async (req,res) => {
    let candidate = await user.create({
        name:"Rahul",
        age:25,
        city:"nasirabad"
    })
    res.send(candidate);
})
//object create krne ke liye


app.get('/update',async (req,res) => {
   let update = await user.findOneAndUpdate({city:"nasirabad"}, {name:"Manish"}, {new:true})
   res.send(update)
})
//update krne ke liye


app.get('/read', async (req,res) => {
    let users = await user.find()
    res.send(users)
})

app.get('/readOne', async (req,res) => {
    let users = await user.find({name:"Manish"})
    res.send(users)
})

app.get('/delete', async (req,res) => {
    let users = await user.findOneAndDelete({name:"Manish"})
    res.send(users)
})

//saare users mil jaayenge ek array main store hokr

app.listen(port)