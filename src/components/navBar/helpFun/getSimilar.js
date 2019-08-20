import { getSimilarMovies } from '../../../APIs/getSimilarMovieAPI';

export async function getSimilar (result){
    const sim = []
    for(let item of result){
        sim.push( await getSimilarMovies( item.movie.ids.tmdb ));
    }
    return sim;
}