export const PUT_LIST_OF_FILM_NAME = 'PUT_LIST_OF_FILM_NAME';
export const PUT_LIST_OF_FILM_NAME_COPY = 'PUT_LIST_OF_FILM_NAME_COPY';
export const PUT_PICTURES_FOR_MOVIE = 'PUT_PICTURES_FOR_MOVIE';
export const PUT_SIMILAR_MOVIE = 'PUT_SIMILAR_MOVIE';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
export const CHANGE_FIRST_LOAD_APP = 'CHANGE_FIRST_LOAD_APP';
export const PUT_LIFT_OF_TRAILER_FOR_MOVIE = 'PUT_LIFT_OF_TRAILER_FOR_MOVIE';
export const PUT_RATE_OF_MOVIE = 'PUT_RATE_OF_MOVIE';



export const setListMovie = (listMovie)=>({
    type: PUT_LIST_OF_FILM_NAME,
    payload: listMovie,
})
export const setListMovieCopyForReset = (listMovieCopy)=>({
    type: PUT_LIST_OF_FILM_NAME_COPY,
    payload: listMovieCopy,
})
export const setPicturesMovie = (pict)=>({
    type: PUT_PICTURES_FOR_MOVIE,
    payload: pict,
})
export const setListSimilarMovie = (listSimilarMOvie)=>({
    type: PUT_SIMILAR_MOVIE,
    payload: listSimilarMOvie,
})
export const setCurrentPage = (page)=>({
    type: CHANGE_CURRENT_PAGE,
    payload: page,
})
export const checkInFirstLoad = (boolean)=>({
    type: CHANGE_FIRST_LOAD_APP,
    payload: boolean,
})
export const setTrailerForMovie = (trailers)=>({
    type: PUT_LIFT_OF_TRAILER_FOR_MOVIE,
    payload: trailers,
})
export const setRateMovie = (rate)=>({
    type: PUT_RATE_OF_MOVIE,
    payload: rate,
})
