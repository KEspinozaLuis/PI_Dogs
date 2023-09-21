import styles from './Card.module.css'
import { Link } from 'react-router-dom';

const Card = ({id, image, name, temperaments, minWeight, maxWeight}) =>{

    return(
        <div className={styles.cardDog}>
            <img src={image} className={styles.imgDog}/>
            <h2 className={styles.infoDog}>Name: {name}</h2>
            <h2 className={styles.infoDog}>Temperaments: {temperaments}</h2>
            <h2 className={styles.infoDog}>Min Weight: {minWeight} kg</h2>
            <h2 className={styles.infoDog}>Max Weight: {maxWeight} kg</h2>
            <Link to={`/detail/${id}`} className={styles._nameLink}>
                <h2 className={styles._infoMore}>More...</h2>
            </Link>
        </div>
    )
}

export default Card;