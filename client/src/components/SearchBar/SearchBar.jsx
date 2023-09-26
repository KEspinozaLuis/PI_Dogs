import { useState } from 'react';
import {getDogByName} from '../../redux/actions'
import { useDispatch } from 'react-redux';

const SearchBar = () =>{
    const dispatch = useDispatch();
    const [nameDog, setNameDog] = useState('');

    const handleInput = (event)=>{
        setNameDog(event.target.value);
    }

    const handleSearch = ()=>{
        if(!nameDog || !isNaN(nameDog)) return alert ('Ingrese un nombre');
        dispatch(getDogByName(nameDog));
        setNameDog('');
    }
    
    return (
        <div>
            <input type="search" value={nameDog} onChange={handleInput} placeholder="Ingrese un nombre" />
            <button onClick={handleSearch} className='btnPrimary btn'>Search</button>
        </div>
    )
}

export default SearchBar;