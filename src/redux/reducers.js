import { combineReducers } from 'redux';
import { putMoviesReducers } from './listMovies/reducers'

export default combineReducers({
    movieParams: putMoviesReducers,
})


