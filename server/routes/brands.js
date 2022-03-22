const router = require('express').Router();
const {Car, Brand} = require('../../db');

router.get('/', async(req, res, next) => {
    try{
        res.send(await Brand.findAll());
    }
    catch(ex){
        next(ex);
    }
})

module.exports = router;