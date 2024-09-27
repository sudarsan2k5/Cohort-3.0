const express = require('express');
const mongoose = require('mongoose');
const { UserModel, TodoModel } = require('./bd');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "sudarsan2k5";

mongoose.connect("mongodb+srv://sudarsan2k5:admin@cluster0.tvtp8.mongodb.net/sudarsan202");

const app = express();
app.use(express.json());

app.post('/signup', async (req, res) =>{
    console.log("hi");
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    res.json({
        msg: "You are Logged in :)"
    });
});

app.post('/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        })

    }else{
        res.status(403).json({
            msg: "Incorect Credential"
        })
    }
});


app.post('/todo', auth,(req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    TodoModel.create({
        userId,
        title
    })
    // console.log("TODOS");
    // console.log(userId);
    res.json({
        userId: userId
    });
});

app.get('/todos', auth,async (req, res) => {
    const userId = req.userId;
    const todos = await TodoModel.find({
        userId: userId
    })

    res.json({
        todos: todos
    });
});

function auth(req, res, next){
    const token = req.headers.token;
    const deCodeData = jwt.verify(token, JWT_SECRET);
    console.log("Hello");
    console.log(deCodeData);
    if(deCodeData){
        req.userId = deCodeData.id;
        next();
    }else{
        res.json({
            msg: "Incorrect Credential"     
        })
    }
}



app.listen(8000, () => {
    console.log("Server Listing.....");
});