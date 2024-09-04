const express = require('express');

const app = express();

app.get('/sum/:firstArg/:secondArg', (req, res) => {
    const n1 = parseInt(req.params.firstArg)
    const n2 =parseInt(req.params.secondArg)

    res.json({
        answer: n1 + n2
    })
})

app.get('/multiply', (req, res) => {

})

app.listen(8000);