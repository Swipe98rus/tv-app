import { getTrailerForMovie } from '../../../APIs/getTrailerAPI'

export async function getTrailer (result){
    const pic = []
    for(let item of result){
        pic.push( await getTrailerForMovie( item.movie.ids.tmdb ));
    }
    return pic;
}
