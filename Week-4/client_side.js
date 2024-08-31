const express = require('express');

function sum(n){
    let ans = 0;
    for(let i = 0; i < n; i++){
        ans = ans + i;
    }
    return ans;
}

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    const n = req.query.n;
    const ans = sum(n);
    // res.send(ans.toString);
    res.send('Hi Your sum is: ' + ans)
});

app.listen(port, () => {
    console.log('Listing...');
});