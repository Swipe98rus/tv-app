import { 
    PUT_LIST_OF_FILM_NAME,
    PUT_PICTURES_FOR_MOVIE,
    PUT_SIMILAR_MOVIE,
    CHANGE_CURRENT_PAGE,
    CHANGE_FIRST_LOAD_APP
                            } from './actions'

const defaultState = {
    listOfMovie: [],
    listOfPictures: [],
    listOfSimilarMovie: [],
    firstLoad: true,
    currentPage: 1,
    moviePerPage: 5,
}

export const putMoviesReducers = (state = defaultState, action)=>{
    // eslint-disable-next-line default-case
    switch( action.type ){
        case PUT_LIST_OF_FILM_NAME:
            return {
                ...state,
                listOfMovie: action.payload,
            }
        // eslint-disable-next-line no-duplicate-case
        case PUT_PICTURES_FOR_MOVIE:
            return {
                ...state,
                listOfPictures: action.payload,
            }
        // eslint-disable-next-line no-duplicate-case
        case PUT_SIMILAR_MOVIE:
            return {
                ...state,
                listOfSimilarMovie: action.payload,
            }
        // eslint-disable-next-line no-duplicate-case
        case CHANGE_CURRENT_PAGE:
            return {
            ...state,
            currentPage: action.payload,
            }
        // eslint-disable-next-line no-duplicate-case
        case CHANGE_FIRST_LOAD_APP:
            return {
            ...state,
            firstLoad: action.payload,
            }
    }
    return state;
}