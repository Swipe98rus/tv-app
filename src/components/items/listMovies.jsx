import React from 'react';
import Movie from './movie';


const ListMovies = ({ currentMovies, url, similar, indexOfFirstMovie }) => {
    let index = 0;
    let i = 0;
    return(
        <div>
            {
                currentMovies.map( film => {
                    index = indexOfFirstMovie + i;
                    i++;
                    return <Movie film={film} 
                                  key={film.movie.ids.trakt}
                                  url={url}
                                  similar={similar}
                                  index={index}  
                            />
                        })
            }
        </div>
    )
}

export default ListMovies;