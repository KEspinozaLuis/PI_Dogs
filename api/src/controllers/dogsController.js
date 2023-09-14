const axios = require('axios');
require("dotenv").config()
const { URL_API, API_KEY } = process.env;

const {Dog, Temperament} = require('../db');

//Obtener todas las razas de los perros desde la API y BD
const getDogs = async()=>{
    //Listado de perros de la API
    const {data} = await axios(`${URL_API}/?api_key=${API_KEY}`);
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
//Buscar por nombre
const searchDogName = async (name)=>{
    const allDogs = await getDogs();
    const searchDog = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
    if(searchDog.length === 0) throw new Error('No existe el perro');
    return searchDog;
}

//Obtener detalle de un perro por ID
const getDogById = async (id, source)=>{
    const {data} = await axios(`${URL_API}/${id}/?api_key=${API_KEY}`);
    const dog = 
        source === 'api' 
        ? data
        : await Dog.findByPk(id)
    
    //Si en caso no existe el ID
    if(!dog || Object.keys(dog).length === 0) throw new Error(`No existe el perro con id: ${id}`);
    return dog;
}


//Crear un perro
const addDog = async (data)=>{
    const {name, height, weight, life_span, image, temperaments} = data;
    if(!name || !height || !weight || !life_span || !image || !temperaments) throw new Error('Faltan datos');
    if(temperaments.length === 0) throw new Error('Agrega por lo menos 1 temperamento');
    const newDog ={
        name, 
        height, 
        weight, 
        life_span, 
        image
    };
    const addNewDog = await Dog.create(newDog);
    await addNewDog.addTemperament(temperaments);

    return addNewDog;
}

module.exports = {
    getDogs,
    searchDogName,
    getDogById,
    addDog
}