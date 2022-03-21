const express = require('express');
const app = express();
const path = require('path');
const { Car } = require('../db');
const syncAndSeed  = require('../db/syncAndSeed');


const port = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join(__dirname, 'index.html')));

app.get('/cars', async(req, res, next) => {
    try{
        res.send(await Car.findAll());
    }
    catch(ex){
        next(ex);
    }
});



const init = async () => {
    try{
        await syncAndSeed();
        app.listen(port, ()=> console.log(`listening on port ${port}`));
    }
    catch(ex) {
        console.log(ex);
    }
}

init();