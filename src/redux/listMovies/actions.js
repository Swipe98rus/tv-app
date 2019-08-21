export const PUT_LIST_OF_FILM_NAME = 'PUT_LIST_OF_FILM_NAME';
export const PUT_PICTURES_FOR_MOVIE = 'PUT_PICTURES_FOR_MOVIE';
export const PUT_SIMILAR_MOVIE = 'PUT_SIMILAR_MOVIE';
export const PUT_YEARS_FOR_MOVIE = 'PUT_YEARS_FOR_MOVIE';
export const PUT_NAME_FOR_MOVIE = 'PUT_NAME_FOR_MOVIE';
export const PUT_CHOOSE_SORT_FOR_MOVIE = 'PUT_CHOOSE_SORT_FOR_MOVIE';
export const CHANGE_CURRENT_PAGE = 'CHANGE_CURRENT_PAGE';
export const CHANGE_FIRST_LOAD_APP = 'CHANGE_FIRST_LOAD_APP';



export const setListMovie = (listMovie)=>({
    type: PUT_LIST_OF_FILM_NAME,
    payload: listMovie,
})
export const setPicturesMovie = (pict)=>({
    type: PUT_PICTURES_FOR_MOVIE,
    payload: pict,
})
export const setListSimilarMovie = (listSimilarMOvie)=>({
    type: PUT_SIMILAR_MOVIE,
    payload: listSimilarMOvie,
})
export const setYears = (year)=>({
    type: PUT_YEARS_FOR_MOVIE,
    payload: year,
})
export const setName = (name)=>({
    type: PUT_NAME_FOR_MOVIE,
    payload: name,
})
export const setSort = (sort)=>({
    type: PUT_CHOOSE_SORT_FOR_MOVIE,
    payload: sort,
})
export const setCurrentPage = (page)=>({
    type: CHANGE_CURRENT_PAGE,
    payload: page,
})
export const checkInFirstLoad = (boolean)=>({
    type: CHANGE_FIRST_LOAD_APP,
    payload: boolean,
})