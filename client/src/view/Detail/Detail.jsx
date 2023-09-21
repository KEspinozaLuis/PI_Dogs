import { useEffect, useState } from 'react';
import {useParams, Link} from 'react-router-dom';
import axios from 'axios';
import styles from './Detail.module.css';

const Detail = ()=>{
    const {id} = useParams();
    const [dog, setDog] = useState({});
    const URL_BASE = 'http://localhost:3001/dogs/'

    useEffect(()=>{
        axios(`${URL_BASE}${id}`)
        .then(({data})=>{
            if(data.name){
                setDog(data);
            }
        })
        return setDog({});
    }, [id])
    
    return (
        
        <div className='container'>
            <h1>Vista del Detail</h1>
            <img src={dog?.image} alt={dog?.name} className={styles.imgDog} />
            <h2>Id: {dog?.id}</h2>
            <h2>Name: {dog?.name}</h2>
            <h2>Height: {dog?.minHeight} - {dog?.maxHeight} cm</h2> 
            <h2>Weight: {dog?.minWeight} - {dog?.maxWeight} kg</h2>
            <h2>Temperaments: {dog?.temperaments}</h2> {/*--Falta contemplar mostrar los temperanmentos de un perro creado */}
            <h2>Years of life: {dog?.life_span}</h2>
            <Link to='/home'>Home</Link>
        </div>
    )
}

export default Detail;