const Sequelize  = require('sequelize');
const db = require('./db');


const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4;

const Brand = db.define('brand', {
    id:{
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: Sequelize.STRING
    },
    country: {
        type: Sequelize.STRING
    }
});

module.exports = Brand;