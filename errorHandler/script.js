const express = require('express');
const app = express();
port = 2000;

app.use((req,res,next)=>{
    console.log("i am running to middleware")
    next();
})


app.get('/',(req,res)=>{
    res.send("Hello World!!")
})


app.get('/introduction',(req,res)=>{
    res.send("Hello sir my name is rahul jingar, i live in ajmer rajasthan, i have done my graduation bsc mathematics from mdsu university, i started my career with zomato as a rider support executive, strong communication and problem solving data. later i worked at indiamart as a project delivery executive handling client, During thi journey i developer my passion like mern full stack then will join to regex software company and i several the multiple project quiz app, calculater, password generater, etc, i am looking for the job an internship and my hobbies are a playing cricket and listening music that's all about me")
})


app.get('/profile',(req,res,next)=>{
    return next(new Error("Something went wrong!!"))
    
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something Went wront, because i dont know about it!')
})

app.listen(port)

