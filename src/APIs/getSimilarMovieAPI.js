import axios from 'axios';


export async function getSimilarMovies(id){
    let result = [];
    try{
        result = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=ee05a415e10d527c5496fb485215ff75&page=1`
        );
        if(result){
            return result.data.results;
        }
    }catch(e){
        console.error(e)
    }
     return result;
}
