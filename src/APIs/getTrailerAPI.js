import axios from 'axios';


export async function getTrailerForMovie(id){
let trailerPath ;
try{
    const result = await axios
    .get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=ee05a415e10d527c5496fb485215ff75`);
    if(result){
        const fileKey = result.data.results[0].key;
        trailerPath = `https://www.youtube.com/embed/${fileKey}?autoplay=1&controls=0&enablejsapi=1&rel=0`;
    }else{
        trailerPath = ''
    } 
}catch(e){
    console.error(e);
}

return trailerPath;
}