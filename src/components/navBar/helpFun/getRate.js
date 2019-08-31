import { getRateMovieIMDB } from '../../../APIs/getRateAPI';

export async function getRate (result){
    const rate = []
    for(let item of result){
        rate.push( await getRateMovieIMDB( item.movie.ids.imdb ));
    }
    return rate;
}