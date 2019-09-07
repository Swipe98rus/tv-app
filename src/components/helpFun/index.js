import { getMovie } from './getMovie'
import { getPicturesAndRate } from './getOMDB';
import { getSimilar } from './getSimilar';




export async function getAndBuildAllData(title, year, genre, page){
    const result = await getMovie(title, year, genre, page)

    const resultOMDB = await getPicturesAndRate(result);

    const resultSimilar = await getSimilar(result);

    const  listWithMovieConstructor = [];

    for(let i in result){
        const movieConstructor = {
            title: result[i].movie.title,
            year: result[i].movie.year,
            trailer: result[i].movie.trailer,
            poster: resultOMDB[i].Poster ? resultOMDB[i].Poster.slice(0, -7) + '720.jpg' : '',
            country: resultOMDB[i].Country,
            rateIMDB: resultOMDB[i].imdbRating,
            rateOthers: resultOMDB[i].Ratings,
            similar: [
                resultSimilar[i][0],
                resultSimilar[i][1],
                resultSimilar[i][2],
            ]
        };
        listWithMovieConstructor.push(movieConstructor);
    }

    return listWithMovieConstructor;
}