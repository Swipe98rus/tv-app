import { getDataOMDB } from '../../APIs/getDataOMDB';

export async function getPicturesAndRate (result){
    const rate = []
    for(let item of result){
        rate.push( await getDataOMDB( item.movie.ids.imdb ));
    }
    return rate;
}