import { getSimilar, getTrailer, getRate } from './index'


export async function saveSimilarMovieInState( result, setListSimilarMovie ){
    const similarMovie = await getSimilar( result );
    await setListSimilarMovie( similarMovie );
}

export async function saveTrailerForMovie( result, setTrailerForMovie ){
    const trailerMovie = await getTrailer( result );
    await setTrailerForMovie( trailerMovie );
}
export async function saveRateForMovie( result, setRateMovie ){
    const rateMovie = await getRate(result);
    await setRateMovie(rateMovie);
}