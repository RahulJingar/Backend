const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const port = 3000;

app.use(cookieParser());

app.get('/', (req,res) => {
    res.cookie("name", "Manish")
    res.send("done")
})

app.get('/read', (req,res) => {
    console.log(req.cookies)
    res.send("read page")
})

app.listen(port);