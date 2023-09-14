const {getDogs, addDog} = require('../controllers/dogsController');

//Obtener todos los perros
const getDogsHandler = async(req, res)=>{
    const {name} = req.query;
    try {
        const allDogs = await getDogs();
        if(name) {
            const dogName = allDogs.filter(dog => dog.name.toLowerCase().includes(name.toLowerCase()));
            if(dogName.length === 0) throw new Error('No existe el perro');
            return res.status(200).json(dogName);
        }
        return res.status(200).json(allDogs);
    } catch (error) {
        return res.status(404).send({error: error.message});
    }
}

//Obtener detalle de un perro
const getDogByIdHandler = async (req, res) =>{
    const { id } = req.params;
    try {
        const allDogs = await getDogs();
        const getbyIdDog = allDogs.find(dog => dog.id=== parseInt(id))
        if(!getbyIdDog) throw new Error(`No existe el perro con id: ${id}`);
        return res.status(200).json(getbyIdDog)
    } catch (error) {
        return res.status(404).json({error: error.message})
    }
}

//Crear un perro
const createDogHandler = async (req, res) => {
    const {name, height, weight, life_span, image, temperaments} = req.body;
    if(!name || !height || !weight || !life_span || !image) return res.status(401).json({error: 'Faltan datos'});
    try {
        const newDog = await addDog({
            name, 
            height, 
            weight, 
            life_span, 
            image
        });
        await newDog.addTemperament(temperaments);
        res.status(200).json(newDog);
    } catch (error) {
        res.status(401).json({error: error.message});
    }
}

module.exports = {
    getDogsHandler,
    getDogByIdHandler,
    createDogHandler
} 