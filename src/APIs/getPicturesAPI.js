import axios from 'axios';


export async function getPicturesForMovie(id){
let picturesPath ;
try{
    const result = await axios
    .get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=ee05a415e10d527c5496fb485215ff75`);
    if(result.data.posters[0]){
        const filePath = result.data.posters[0].file_path;
        picturesPath = `https://image.tmdb.org/t/p/w500${filePath}`;
    }else{
        picturesPath = ''
    } 
}catch(e){
    console.error(e);
}


return picturesPath;
}