import { getPicturesForMovie } from '../../../APIs/getPicturesAPI'

export async function getPictures (result){
    const pic = []
    for(let item of result){
        pic.push( await getPicturesForMovie( item.movie.ids.tmdb ));
    }
    return pic;
}
