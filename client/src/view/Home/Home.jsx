import CardsContainer from "../../components/CardsContainer/CardsContainer";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import {
  getDogs, 
  orderByName, 
  orderByWeight, 
  getTemperaments,
  filterByTemperament,
  filterDogs,
  cleanFilters
} from '../../redux/actions'

const Home = ()=>{
    const dispatch = useDispatch();
    const [aux, setAux] = useState(false);
    const allTemperaments = useSelector(state => state.temperaments);

    useEffect(()=>{
      dispatch(getDogs());
      dispatch(getTemperaments());
    }, [dispatch])


    //Oredenar por nombre
    const handleOrderName = (event)=>{
      dispatch(orderByName(event.target.value))
      setAux(!aux);
    }

    //Oredenar por peso
    const handleOrderWeight = (event) =>{
      dispatch(orderByWeight(event.target.value))
      setAux(!aux);
    }

    //Filtrar perros de Api, Bd ó todos
    const handleFilterDogs = (event) => {
      dispatch(filterDogs(event.target.value));
    }

    //Filtrar por temperamentos
    const handleFilterTemperaments = (event)=>{
      dispatch(filterByTemperament(event.target.value))
    }

    // Limpiar filtros
    const resetFilters = () => {
      dispatch(cleanFilters());
    }

    return (
        <>
        <div className="container">
          <h2>ORDER</h2>
          <div>
              <select onChange={handleOrderName} defaultValue='name'>
                <option value="name" disabled>Name</option>
                <option value="ascName">Ascending</option>
                <option value="desName">Descending</option>
              </select>
          </div>
          <div>
              <select onChange={handleOrderWeight} defaultValue='weight'>
                <option value="weight" disabled>Weight</option>
                <option value="desWeight">100 - 0Kg</option>
                <option value="ascWeight">0 - 100Kg</option>
              </select>
          </div>
        </div>
        <div  className="container">
          <h2>FILTROS</h2>
          <div>
            <label>Filtrar Por:</label>
            <select onChange={handleFilterDogs} defaultValue='all'>
              <option value="all">All Dogs</option>
              <option value="api">Api Dogs</option>
              <option value="bd">Database Dogs</option>
            </select>
          </div>
          <div>
            <label>Filtrar Temperaments:</label>
            <select onChange={handleFilterTemperaments} defaultValue='temperaments'>
              <option value="temperaments" disabled>Temperaments</option>
              <option value='all'>All</option>
              {
                allTemperaments.map(temp => (
                  <option value={temp.name}  key={temp.id}>{temp.name}</option>
                ))
              }
            </select>
          </div>
          <div>
            <button onClick={resetFilters}>Reset Filters</button>
          </div>
        </div>
        <CardsContainer />
      </>
    )
}

export default Home;