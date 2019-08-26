export const PUT_YEARS_FOR_MOVIE = 'PUT_YEARS_FOR_MOVIE';
export const PUT_NAME_FOR_MOVIE = 'PUT_NAME_FOR_MOVIE';
export const PUT_CHOOSE_SORT_FOR_MOVIE = 'PUT_CHOOSE_SORT_FOR_MOVIE';

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