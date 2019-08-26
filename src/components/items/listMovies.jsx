import React from 'react';
import Movie from './movie';


class ListMovies extends React.Component{
 render(){
    return(
        <div>
            {
                this.props.currentMovies.map( (film, index) => {
                   let i = this.props.indexOfFirstMovie + index;
                   let currentSimilar;
                   if(this.props.similar[i] !== undefined){
                    currentSimilar = this.props.similar[i];
                    currentSimilar.splice( 3, currentSimilar.length );
                   }
                    return <Movie film = { film } 
                                  key = { film.movie.ids.trakt }
                                  url = { this.props.url[i] }
                                  similar = { currentSimilar }
                            />
                        })
            }
        </div>
    )
  }
}
export default ListMovies;