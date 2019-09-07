export const SAVE_TITLE_STATE = 'SAVE_TITLE_STATE';
export const SAVE_YEAR_STATE = 'SAVE_YEAR_STATE';
export const SAVE_GENRE_STATE = 'SAVE_GENRE_STATE';
export const SAVE_PAGE_STATE = 'SAVE_PAGE_STATE';
export const SAVE_SORT_STATE = 'SAVE_SORT_STATE';
export const SAVE_LOAD_STATUS_STATE = 'SAVE_LOAD_STATUS_STATE';


export const setTitleAction = (title)=>({
    type: SAVE_TITLE_STATE,
    payload: title,
})
export const setYearAction = (year)=>({
    type: SAVE_YEAR_STATE,
    payload: year,
})
export const setGenreAction = (genre)=>({
    type: SAVE_GENRE_STATE,
    payload: genre,
})
export const setPageAction = (page)=>({
    type: SAVE_PAGE_STATE,
    payload: page,
})
export const setSortAction = (sort)=>({
    type: SAVE_SORT_STATE,
    payload: sort,
})
export const setLoadStatusAction = (status)=>({
    type: SAVE_LOAD_STATUS_STATE,
    payload: status,
})
