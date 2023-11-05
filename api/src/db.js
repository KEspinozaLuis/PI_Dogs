require('dotenv').config();
const { Sequelize } = require('sequelize');
const {  DB_USER, DB_PASSWORD, DB_HOST,} = process.env;

const DogModel = require('./models/Dog');
const TemperamentModel = require('./models/Temperament')

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/dogs`, 
  {logging: false, native: false });

DogModel(sequelize);
TemperamentModel(sequelize);

const {Dog, Temperament} = sequelize.models;
Dog.belongsToMany(Temperament , {through: 'dog_temperament' , timestamps: false});
Temperament.belongsToMany(Dog, {through: 'dog_temperament' , timestamps: false})

module.exports = {
  ...sequelize.models, 
  conn: sequelize,     
};
