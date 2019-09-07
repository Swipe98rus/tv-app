export const SAVE_MOVIES_STATE = 'SAVE_MOVIES_STATE';
export const SAVE_PICTURES_STATE = 'SAVE_PICTURES_STATE';
export const SAVE_SIMILARS_STATE = 'SAVE_SIMILARS_STATE';
export const SAVE_GENRES_LIST_STATE = 'SAVE_GENRES_LIST_STATE';
export const SAVE_MOVIES_COPY_STATE = 'SAVE_MOVIES_COPY_STATE';


export const setMoviesAction = (movies)=>({
    type: SAVE_MOVIES_STATE,
    payload: movies,
})
export const setPicturesAction = (pictures)=>({
    type: SAVE_PICTURES_STATE,
    payload: pictures,
})
export const setSimilarsAction = (similars)=>({
    type: SAVE_SIMILARS_STATE,
    payload: similars,
})
export const setGenresListAction = (genres)=>({
    type: SAVE_GENRES_LIST_STATE,
    payload: genres,
})
export const setMoviesCopyAction = (moviesCopy)=>({
    type: SAVE_MOVIES_COPY_STATE,
    payload: moviesCopy,
})

