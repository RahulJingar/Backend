const express = require('express');
const app = express();
port = 80;


app.get('/',(req,res)=>{
    res.send("Hello World!!")
})


app.get('/introduction',(req,res)=>{
    res.send("Hello sir my name is rahul jingar, i live in ajmer rajasthan, i have done my graduation bsc mathematics from mdsu university, i started my career with zomato as a rider support executive, strong communication and problem solving data. later i worked at indiamart as a project delivery executive handling client, During thi journey i developer my passion like mern full stack then will join to regex software company and i several the multiple project quiz app, calculater, password generater, etc, i am looking for the job an internship and my hobbies are a playing cricket and listening music that's all about me")
})

app.get('/zomato', (req,res)=>{
    res.send("I worked at zomato as a rider support executive and i was enjoying the my work but everyday listen to rider 8 hours my ear was injured, then i was going to the hospital and checked my ear and dr.said to me my ear is very injured and go on to the operation then asked to her ok then was go to the my family and told my father fasther said to me no problem i waas going to you in the hospital and my operation was successfully but some time my ear was injures then it was be ok")
})


app.listen(port)