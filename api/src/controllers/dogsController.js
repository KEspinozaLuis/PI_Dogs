const axios = require('axios');
require("dotenv").config()
const { URL_API, API_KEY } = process.env;

const {Dog, Temperament} = require('../db');

//Obtener todas las razas de los perros desde la API y BD
const getDogs = async()=>{
    const {data} = await axios(`${URL_API}/?api_key=${API_KEY}`);
    //Listado de perros de la API
    const dogsApi = data.map(dog =>{
        return {
            id: dog.id,
            name: dog.name,
            weight: dog.weight.metric,
            height: dog.height.metric,
            life_span: dog.life_span,
            temperament: dog.temperament,
            image: dog.image.url
        }
    });
    //Listado de perros de la BD
    const dogsBD = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ["name"],
            through: {
                attributes: []
            }
        }
    });
    // Unimos los perros de la api + perros de BD
    const allDogs = [...dogsApi, ...dogsBD];
    return allDogs;
}

//Crear un perro
const addDog = async (data)=>{
    return await Dog.create(data);
}

module.exports = {
    getDogs,
    addDog
}