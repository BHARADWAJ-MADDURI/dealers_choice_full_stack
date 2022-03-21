const Sequelize = require('sequelize');
const db = require('./db');

const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4;

const Car = db. define('car', {
    id:{
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.INTEGER
    }
});

module.exports = Car;