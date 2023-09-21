import {
    GET_DOGS, 
    GET_DOG_NAME, 
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT,
    GET_TEMPERAMENTS,
    FILTER_BY_TEMPERAMENT,
    FILTER_DOGS,
    CLEAN_FILTERS,
    ADD_DOG
} from './actionsTypes'

const initialState = {
    dogs: [],
    allDogs: [],
    temperaments: []
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case GET_DOGS:
            return {
                ...state,
                dogs: payload,
                allDogs: payload
            };
        case GET_TEMPERAMENTS:
            return{
                ...state,
                temperaments: payload
            };
        case GET_DOG_NAME:
            return{
                ...state,
                dogs: payload
            };
        case ADD_DOG:
            return{
                ...state,
                allDogs: [...state.dogs, action.payload]
            }
        case FILTER_DOGS:
            if(payload === 'api'){
                const filterApi = state.allDogs.filter( dog => typeof dog.id === 'number' );
                return {
                    ...state,
                    dogs: filterApi,
                };
            }
            if(payload === 'bd'){
                const filterBd = state.allDogs.filter( dog => typeof dog.id === 'string');
                return{
                    ...state,
                    dogs: filterBd
                }
            }
            return {
                ...state,
                dogs: state.allDogs
            }
        case ORDER_BY_NAME:
            const orderName = 
                payload === 'ascName' 
                ? state.dogs.sort((a,b)=>{
                        if (a.name > b.name) return 1;
                        if (b.name > a.name) return -1;
                        return 0;
                    })
                : state.dogs.sort((a,b)=>{
                    if (a.name > b.name) return -1;
                    if (b.name > a.name) return 1;
                    return 0;
                })
            return {
                ...state,
                dogs: orderName
            }    
        case ORDER_BY_WEIGHT:
            const orderWeight = state.dogs.sort((a,b)=>{
                if(payload === 'desWeight') return b.maxWeight - a.maxWeight ;
                return a.maxWeight  - b.maxWeight 
            })
            return {
                ...state,
                dogs: orderWeight
            }
        case FILTER_BY_TEMPERAMENT:
            if(payload === 'all'){
                return {
                    ...state,
                    dogs: state.allDogs
                }
            }
            const filterTemperaments = state.allDogs.filter((dog) => {
                if(dog.temperaments) return dog.temperaments.includes(payload);
                return false;
              });

            if (filterTemperaments.length === 0) {
                return {
                    ...state,
                    dogs: [],
                };
            }
            return {
                ...state,
                dogs: filterTemperaments,
            };
        case CLEAN_FILTERS:
            return {
                ...state,
                dogs: state.allDogs
            }
        default:
            return {...state};
    }
}

export default rootReducer;
