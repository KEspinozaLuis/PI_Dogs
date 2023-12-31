const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
    minHeight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		maxHeight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		minWeight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		maxWeight: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
    life_span:{
      type: DataTypes.STRING,
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
  });
};
