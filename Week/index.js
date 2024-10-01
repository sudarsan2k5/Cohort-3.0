const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const {auth, JWT_SECRET} = require('./auth')
const { UserModel, TodoModel } = require('./db')
const app = express();


app.use(express.json())
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
        msg: "You are Singed UP ya..."
    });
});

app.post('/singin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password
    });
    
    if(response){
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);
        res.json({
            id: token
        })
    }else{
        res.json({
            msg: "Bad Credential :("
        })
    }

});

app.post('/todo', auth, (req, res) => {
    
});
app.get('/todos', auth, (req, res) => {

});

app.listen(8000);