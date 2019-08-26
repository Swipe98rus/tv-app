import { 
    PUT_YEARS_FOR_MOVIE,
    PUT_NAME_FOR_MOVIE,
    PUT_CHOOSE_SORT_FOR_MOVIE,
 } from './actions'
const defaultState = {
    name:'',
    years: '',
    sort: '',
}

export const putParamsMovies = (state = defaultState, action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
         // eslint-disable-next-line no-duplicate-case
         case PUT_YEARS_FOR_MOVIE:
            return {
            ...state,
            years: action.payload,
            }
        // eslint-disable-next-line no-duplicate-case
        case PUT_NAME_FOR_MOVIE:
            return {
            ...state,
            name: action.payload,
            }
        // eslint-disable-next-line no-duplicate-case
        case PUT_CHOOSE_SORT_FOR_MOVIE:
            return {
            ...state,
            sort: action.payload,
            }
    }
    return state;
}