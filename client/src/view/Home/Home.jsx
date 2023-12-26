import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import {
  getDogs,  
  getTemperaments
} from '../../redux/actions'
import styles from './Home.module.css';
import Loading from '../../components/Loading/Loading';

const Home = ()=>{
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.allDogs);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
      setTimeout(() => {
        setLoading(false)
      }, 1000);
      
      dispatch(getDogs());
      if(allDogs.length === 0){
        window.localStorage.setItem('currentPage', 1);
        dispatch(getTemperaments());
      }
    }, [])

    return (
      <div className={`${styles.containerDogs} containerBackground`}>
          <div className={`${styles.fondoHuellas} footprints`}></div>
          {
            loading
            ? <Loading/>
            : <CardsContainer allDogs={allDogs}/>
          }  
      </div>
    )
}

export default Home;