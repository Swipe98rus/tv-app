/* eslint-disable default-case */
import { 
    SAVE_TITLE_STATE,
    SAVE_YEAR_STATE,
    SAVE_GENRE_STATE,
    SAVE_PAGE_STATE,
    SAVE_SORT_STATE,
    SAVE_LOAD_STATUS_STATE
                            } from './actions'

const defaultState = {
    title: '',
    year:'',
    genre:'',
    page: 1,
    sort:'',
    status: true, //True = load finish, false = load in process
}

export const updateSearchParamsReducers = (state = defaultState, action)=>{
    switch( action.type ){
        case SAVE_TITLE_STATE:
            return {
                ...state,
                title: action.payload,
            }
        case SAVE_YEAR_STATE:
            return {
                ...state,
                year: action.payload,
            }
        case SAVE_GENRE_STATE:
            return {
                ...state,
                genre: action.payload,
            }
        case SAVE_PAGE_STATE:
            return {
                ...state,
                page: action.payload,
            }
        case SAVE_SORT_STATE:
            return {
                ...state,
                sort: action.payload,
            }
        case SAVE_LOAD_STATUS_STATE:
            return {
                ...state,
                status: action.payload,
            }
        
    }
    return state;
}
