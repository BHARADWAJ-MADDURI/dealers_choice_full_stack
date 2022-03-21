const {Car, Brand, db} = require('./index');
const syncAndSeed = async() => {
    try{
        await db.sync({ force:true });
        
        const audi = await Brand.create({name:'AUDI', country: 'GERMAN'});
        const ford = await Brand.create({name:'FORD', country: 'AMERICAN'});
        const lamborghini = await Brand.create({name:'LAMBORGHINI', country: 'ITALIAN'});
        const landRover = await Brand.create({name:'LAND ROVER', country: 'BRITISH'});
        await Car.create({name: 'A5', price: 46000, brandId: audi.id });
        await Car.create({name: 'S5', price: 55300 , brandId: audi.id });
        await Car.create({name: 'MUSTANG GT', price: 45785, brandId: ford.id });
        await Car.create({name: 'SHELBY GT500', price: 72900, brandId: ford.id });
        await Car.create({name: 'URUS', price: 239231, brandId: lamborghini.id });
        await Car.create({name: 'RANGE ROVER SPORT', price: 70900, brandId: landRover.id });
    }
    catch(ex){
        console.log(ex);
    }
};

module.exports = syncAndSeed;