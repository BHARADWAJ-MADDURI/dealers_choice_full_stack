const router = require('express').Router();
const {Car, Brand} = require('../../db');

router.get('/', async(req, res, next) => {
    try{
        res.send(await Car.findAll());
    }
    catch(ex){
        next(ex);
    }
})

router.get('/:carId', async(req, res, next) => {
    try{
        const car = await Car.findByPk(req.params.carId, {
            include: {
                model: Brand
            }
        });
        res.send(car);
    }
    catch(ex){
        next(ex);
    }
})

router.delete('/:id', async(req, res, next) => {
    try{
        const car= await Car.findByPk(req.params.id);
        await car.destroy();
        res.sendStatus(204);
    }
    catch(ex){
        next(ex);
    }
})
module.exports = router;