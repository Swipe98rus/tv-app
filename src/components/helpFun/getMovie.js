import { getListOfMovies } from '../../APIs/getMovieAPI'; //Link to API


export async function getMovie(title, years, genre, page){
    //Code save data in state (List of MOVIE)
    const result = await getListOfMovies( title, years, genre, page );
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
    return result;
}