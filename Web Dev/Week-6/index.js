const express = require('express');
const app = express();

const users = [];

const generateToken = function(){
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for(let i = 0; i < 32; i++){
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

app.use(express.json())

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })
    res.send({
        msg: "You Have Signed Up"
    })
});

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if(user){
        const token = generateToken();
        user.token = token;
        res.send({
            token
        })
        console.log(users)
    }else{
        res.status(403).send({
            message: "Invalid User"
        })
    }
});

app.listen(3000, () => {
    console.log("Server Listening....");
});