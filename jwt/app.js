const cookieParser = require('cookie-parser');
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000

app.use(cookieParser());

app.get('/', (req,res) => {
    let token = jwt.sign({email:"rahul@example.com"}, "secret")
    res.cookie("token", token);
    res.send("done")
});

app.get('/read', (req,res) => {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data);
})

app.listen(port);