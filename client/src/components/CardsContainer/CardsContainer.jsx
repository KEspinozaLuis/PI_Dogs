import styles from './CardsContainer.module.css'
import { useState } from 'react'
import Card from '../Card/Card'
import Pagination from '../Pagination/Pagination'
import Filters from '../Filters/Filters'

const CardsContainer = ({allDogs})=>{

    //Total de perros
    const totalDogs = allDogs.length;

    //Paginación
    const [currentPage, setCurrentPage] = useState(window.localStorage.getItem('currentPage'));

    //Cantidad de perros por página
    const dogsByPage = 8;
    const lastIndex = currentPage * dogsByPage; // 8
    const firstIndex = lastIndex - dogsByPage; // 0

     //Click a la página
     const onPage = (page)=>{
        setCurrentPage(page);
        //Local storage paginado
        window.localStorage.setItem('currentPage', page);
    }

    return(
        <>
            <Filters setCurrentPage={setCurrentPage}/>
            <div className="container">
                <div className={styles.cardDog}>
                    {allDogs.map( dog =>{
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
                {
                    allDogs.length === 0 && 
                        <div className={styles.containerEmpty}>
                            <img src="../../src/assets/dog-empty.png" alt="" />
                            <p>¡I'm sorry!<br/> There are no dogs...</p>
                        </div>
                }
            </div>
            <Pagination 
            totalDogs={totalDogs}
            dogsByPage ={dogsByPage}
            currentPage ={currentPage}
            setCurrentPage={setCurrentPage}
            onPage={onPage}
            />
        </>
        
    )
}

export default CardsContainer;