import React from 'react';
import Movie from './movie';


class ListMovies extends React.Component{
 render(){
    return(
        <div>
            {
                this.props.listOfMovie.map( (film, index) => {
                   let currentSimilar;
                   if(this.props.similar[index] !== undefined){
                    currentSimilar = this.props.similar[index];
                    currentSimilar.splice( 3, currentSimilar.length );
                   }
                    return <Movie film = { film } 
                                  key = { film.movie.ids.trakt }
                                  url = { this.props.url[index] }
                                  similar = { currentSimilar }
                                  setName = { this.props.setName }
                                  setListMovie = { this.props.setListMovie }
                                  setPicturesMovie = { this.props.setPicturesMovie }
                                  setListSimilarMovie = { this.props.setListSimilarMovie }
                                  name = { this.props.name }
                                  listPictures = { this.props.url }
                                  trailer = { this.props.trailers[index] }
                                  setTrailerForMovie = { this.props.setTrailerForMovie }
                                  setCurrentPage = { this.props.setCurrentPage }
                                  rate = { this.props.rate[index] }
                                  setRateMovie = { this.props.setRateMovie }
                            />
                        })
            }
        </div>
    )
  }
}
export default ListMovies;