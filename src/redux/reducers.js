import { combineReducers } from 'redux';
import { putMoviesReducers } from './listMovies/reducers'
import { putParamsMovies } from './paramsMovies/reducers';

export default combineReducers({
    listMovies: putMoviesReducers,
    paramsMovies: putParamsMovies,
})


