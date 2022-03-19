const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/dealers_choice_full_stack');

const UUID = Sequelize.DataTypes.UUID;
const UUIDV4 = Sequelize.DataTypes.UUIDV4;

const Iphone = db.define('iphones', {
    id: {
        type: UUID,
        primaryKey: true,
        defaultValue: UUIDV4
    },
    name: {
        type: Sequelize.STRING
    },

})

const syncAndSeed = async () => {
    await db.sync({ force: true });
    await Iphone.create({name: 'iphone'});
    await Iphone.create({name: 'iphone 3G'});
    await Iphone.create({name: 'iphone 3GS'});
    await Iphone.create({name: 'iphone 4'});
}

module.exports = {
    db,
    Iphone,
    syncAndSeed
}