import {combineReducers} from 'redux';
import PokemonListReducer from './PokemonListReducers';
import PokemonMultipleReducer from './pokemonMultipleReducers';

const RootReducer = combineReducers({
    PokemonList: PokemonListReducer,
    Pokemon: PokemonMultipleReducer
});

export default RootReducer;