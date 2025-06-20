const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

app.get('/',(req,res)=>{
    fs.readdir(`./files`,(err, files)=>{
        res.render("index", {files: files});        
    })
})




app.get('/file/:filename',(req,res)=>{
   fs.readFile(`./files/${req.params.filename}`, "utf-8", function(err, filedata){
    res.render('show', {filename: req.params.filename, filedata: filedata});
   })
})

app.get('/edit/:filename',(req,res)=>{
    res.render('edit', {filename: req.params.filename.replace(".txt", " ")});
})


app.post('/edit', (req,res) => {
    console.log(req.body);
    fs.rename(`./files/${req.body.previous}`, `./files/${req.body.new}`, (err) => {
        res.redirect("/");
    })
})




app.post('/create', function(req,res){
    fs.writeFile(`./files/${req.body.title.split(' ').join(' ')}`, req.body.details, function(err){
        res.redirect('/')
    })
})

app.listen(port);