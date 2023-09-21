import styles from './CardsContainer.module.css'
import { useSelector } from 'react-redux'
//Componentes
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import { useState } from 'react'

const CardsContainer = ()=>{
    //Accedemos al estado global que contiene a todos los perros
    const dogs = useSelector(state => state.dogs)
    
    //Total de perros
    const totalDogs = dogs.length;

    //Paginación
    const [currentPage, setCurrentPage] = useState(1);

    //Cantidad de perros por página
    const dogsByPage = 8;
    const lastIndex = currentPage * dogsByPage;
    const firstIndex = lastIndex - dogsByPage;

    return(
        <div className="container">
            <h1>List of dogs</h1>
            <Pagination 
                totalDogs={totalDogs}
                dogsByPage ={dogsByPage}
                currentPage ={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div className={styles.containerDogs}>
                {dogs.map( dog =>{
                     return (
                        <Card
                            key={dog.id} 
                            id = {dog.id}
                            image = {dog.image}
                            name = {dog.name}
                            temperaments={dog.temperaments}
                            minWeight={dog.minWeight}
                            maxWeight={dog.maxWeight}
                        />
                    )
                }).slice(firstIndex,lastIndex)}
            </div>
        </div> 
    )
}

export default CardsContainer;