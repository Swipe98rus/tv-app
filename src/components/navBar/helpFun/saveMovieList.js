import { getListOfMovies } from './index'


export async function saveMovieList(setListMovie, years, name, genre){
    if( years ){
        //Code save data in state (List of MOVIE with YEAR)
        const result = await getListOfMovies( name, years, genre );
        await setListMovie( result );
        return result;
    }else if( genre ){
        //Code save data in state (List of MOVIE with YEAR)
        const result = await getListOfMovies( name, years, genre );
        await setListMovie( result );
        return result;
    }else{
        //Code save data in state (List of MOVIE)
        const result = await getListOfMovies( name );
        await setListMovie( result );
        return result;
    }
}