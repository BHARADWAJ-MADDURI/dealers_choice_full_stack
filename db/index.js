const db = require('./db');
const Car = require('./Car');
const Brand = require('./Brand');

Car.belongsTo(Brand);
Brand.hasMany(Car);

module.exports = {
    db,
    Car,
    Brand
}