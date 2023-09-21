import { useState } from 'react';
import {getDogByName , getDogs} from '../../redux/actions'
import { useDispatch } from 'react-redux';

const SearchBar = () =>{
    const dispatch = useDispatch();
    const [nameDog, setNameDog] = useState('');
    const [btnText, setBtnText] = useState('Search');

    const handleInput = (event)=>{
        setNameDog(event.target.value);
    }

    const handleSearch = ()=>{
        if(nameDog !== ""){
            dispatch(getDogByName(nameDog));
            setNameDog('');
            setBtnText('Show all');
        }else{
            dispatch(getDogs());
            setBtnText('Search');
        }
    }
    
    return (
        <div>
            <input type="search" value={nameDog} onChange={handleInput} placeholder="Ingrese un nombre" />
            <button onClick={handleSearch}>{btnText}</button>
        </div>
    )
}

export default SearchBar;