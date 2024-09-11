const express = require('express');
const app = express();
const bodyParser = require('body-parser');
// const bodyParse = require('body-parser'); this and this app.use(express.json()); are same


// In express if you want to pass JSON data,
// You need to first parse the json datae

app.use(bodyParser.json());
app.use(express.json());
app.post('/sum', (req, res) => {
    console.log(req.body);
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b)

    console.log({a}, {b});
    res.json({
        ans: a + b
    })
})

app.listen(3000)