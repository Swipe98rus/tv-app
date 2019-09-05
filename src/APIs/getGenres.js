import axios from 'axios';


export async function getGenresMovie(){

    const result = await axios.get('https://api.trakt.tv/genres/movies',{
    headers:{
        "trakt-api-key": "f50bcef04ebc3c6fea696a2573403d0a06b8b22ebc44ebb002f93572418bef46",
        "Content-type": "application/json",
        "trakt-api-version": 2,
    }
});
return result.data;
}

