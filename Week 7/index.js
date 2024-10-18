const express = require('express');
const app = express();
const {UserModel, TodoModel} = require('./bd');
const jwt = require('jsonwebtoken');
const { default: mongoose } = require('mongoose');
const JTW_SECRET = "12345678"


mongoose.connect("mongodb+srv://sudarsan2k5:admin@sudarsancluster.qmp3n.mongodb.net/sudarsan-todo-app")

app.use(express.json());

app.post('/signup', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    res.json({
        msg: "You are Loggged in :)"
    })
});
app.post('/login', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({
        email: email,
        password: password
    });

    // COnsole the user
    console.log(user);

    if(user){
        // If the User Find then we have to generate a token Using JWT
        const token = jwt.sign({
            id: user._id.toString()
        }, JTW_SECRET);
        res.json({
            token: token // send token to the user
        })
    }else{
        res.status(403).json({
            msg: "Invalid Crendential :("
        });
    }
});
app.post('/todo', auth, async (req, res) => {
    const userId = req.userId;

    const title = req.body.title;
    const done = req.body.done;
    await TodoModel.create({
        title: title,
        done: done,
        userId: userId
    })

    res.json({
        userId: userId
    })
});
app.get('/todos', auth, async (req, res) => {
    const userId = req.userId;

    console.log(userId);
    
    console.log(userId);
        const todos = await TodoModel.find({
            userId: userId
        })
    console.log(todos);
    res.json({
        todos: todos
    })
});

function auth(req, res, next){
    const token = req.headers.token;
    const decodeDate = jwt.verify(token, JTW_SECRET);

    if(decodeDate){
        req.userId = decodeDate.id; /// YOu know why ??????????????// id ??
        next();
    }else{
        res.status(403).json({
            msg: "Invalid Crenditial :("
        })
    }
}

app.listen(3000);