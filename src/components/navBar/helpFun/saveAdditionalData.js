import { getSimilar, getRate } from './index'


export async function saveSimilarMovieInState( result, setListSimilarMovie ){
    const similarMovie = await getSimilar( result );
    await setListSimilarMovie( similarMovie );
}

export function saveTrailerForMovie( result, setTrailerForMovie ){
    const trailers = [];
    for(let item of result){
       trailers.push( item.movie.trailer );
    }
    setTrailerForMovie( trailers );
    return trailers;
}
export async function saveRateForMovie( result, setRateMovie ){
    const rateMovie = await getRate(result);
    await setRateMovie(rateMovie);
}


export async function startAllSaveFun(result, setListSimilarMovie, setTrailerForMovie, setRateMovie){
    saveSimilarMovieInState( result, setListSimilarMovie );
    saveTrailerForMovie( result, setTrailerForMovie );
    saveRateForMovie( result, setRateMovie );
}