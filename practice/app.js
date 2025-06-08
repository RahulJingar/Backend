const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const user = require('./models/user')


app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => {
    res.render("index")
})



app.get('/read', async (req,res) => {
   let allusers = await user.find()
    res.render("read", {users: allusers}) 
})

app.get('/edit/:userid', async (req,res) => {
   let users = await user.findOne({_id:req.params.userid})
    res.render("edit",{users}) 
})

app.post('/update/:userid', async (req,res) => {

    const {image, name, email} = req.body;

   let users = await user.findOneAndUpdate({_id:req.params.userid}, {image, name, email}, {new: true});
    res.redirect("/read") 
})

app.get('/delete/:id', async (req,res) => {
   let users = await user.findOneAndDelete({_id:req.params.id})
    res.redirect("/read") 
})




app.post('/create',async (req,res) => {
    let {name, email, image} = req.body;
    let createdUsers = await user.create({
        name,
        email,
        image
    })
    res.redirect('/read')
})

app.listen(port)
