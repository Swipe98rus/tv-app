import { getListOfMovies } from './index'


export async function saveMovieList(setListMovie, years, name, genre, currentPage){
    //Code save data in state (List of MOVIE)
    const result = await getListOfMovies( name, years, genre, currentPage );
    await setListMovie( result );
    return result;
}