const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const port = 3000;

app.get('/', (req,res) => {
    res.send("Hello World!!")
})


app.get('/create', async (req,res) => {
 let user = await userModel.create({
    username: "Rahul",
    age: 25,
    email: "rahul@gmail.com"
   })
   res.send(user)
   console.log(user)

})


app.get('/post/create', async (req,res) => {
    let post = await postModel.create({
        postData: "hello jee",
        user: "684369999cfbd3cc4fa0895a",
    })
    let user = await userModel.findOne({_id: "684369999cfbd3cc4fa0895a"});
    user.posts.push(post._id);
    await user.save();
    res.send({post, user});
})

app.listen(port);