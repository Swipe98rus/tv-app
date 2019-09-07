import axios from 'axios';

export async function getDataOMDB(id){
    let result = {};
    try{
        result = await axios.get(`http://www.omdbapi.com/?i=${id}&apikey=257284e6`);
        if(result){
            return result.data;
        }
    }catch(e){
        // console.error(e)
    }
     return result;
}
