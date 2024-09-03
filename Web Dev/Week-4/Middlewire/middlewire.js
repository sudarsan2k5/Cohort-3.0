const express = require('express');
const app = express();

function isOldEnough(age){
    if(age >= 18){
        return true;
    }else{
        false;
    }
}

app.get('/', (req, res) => {
    if(isOldEnough(req.query.age)){
        res.json({
            msg: "You Have Successfull riden the ride 1"
        })
    }else{
        res.status(411).json({
            msg: "Sorry you are not of age yet :("
        })
    }
})

app.listen(8000, () => {
    console.log("Port is Listing.... ");
});