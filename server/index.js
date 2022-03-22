const express = require('express');
const app = express();
const path = require('path');
const { Car } = require('../db');
const syncAndSeed  = require('../db/syncAndSeed');


const port = process.env.PORT || 3000;

app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res)=> res.sendFile(path.join('/Users/bharadwajmadduri/Desktop/Fullstack_Stuff/DealersChoiceFullStack/index.html')));

app.use('/api/cars', require('./routes/cars'));
app.use('/api/brands', require('./routes/brands'));



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