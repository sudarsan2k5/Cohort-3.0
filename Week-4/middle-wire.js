const express = require('express');

const users = [{
    name: "Sudarsan",
    kidneys: [{
        healthy: false
    }]
}];

const app = express();

app.get('/', (req, res) => {
    const sudarsanKidneys = users[0].kidneys;
    const numberOfKidneys = sudarsanKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i = 0; i < sudarsanKidneys.length; i++){
        if(sudarsanKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
        }
    }
    const numberOfUnhealthyKidney = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidney
    })
});

app.listen(8000)