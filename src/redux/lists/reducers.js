/* eslint-disable default-case */
import { 
    SAVE_MOVIES_STATE,
    SAVE_GENRES_LIST_STATE,
    SAVE_MOVIES_COPY_STATE,
                            } from './actions'

const defaultState = {
    movies: [],
    moviesCopy: [],
    genres:[],
} 

export const updateListsReducers = (state = defaultState, action)=>{
    switch( action.type ){
        case SAVE_MOVIES_STATE:
            return {
                ...state,
                movies: action.payload,
            }
        case SAVE_MOVIES_COPY_STATE:
            return {
                ...state,
                moviesCopy: action.payload,
            }
        case SAVE_GENRES_LIST_STATE:
            return {
                ...state,
                genres: action.payload,
            }
    }
    return state;
}
