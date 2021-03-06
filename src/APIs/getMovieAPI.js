import axios from 'axios';


export async function getListOfMovies(name, year, genres, currentPage){
    let params = {
            query: `${name}`,
            years: year ? `${year}` : '',
            genres: genres ? `${genres}` : '',
            limit: 15,
            page: currentPage,
            extended: 'full',
    };
    const result = await axios.get('https://api.trakt.tv/search/movie/',{
    params: params,
    headers:{
        "trakt-api-key": "f50bcef04ebc3c6fea696a2573403d0a06b8b22ebc44ebb002f93572418bef46",
        "Content-type": "application/json",
        "trakt-api-version": 2,
    }
});
return result.data;
}

