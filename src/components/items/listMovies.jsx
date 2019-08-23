import React from 'react';
import Movie from './movie';


class ListMovies extends React.Component{
 render(){
    return(
        <div>
            {
                this.props.currentMovies.map( (film, index) => {
                   let i = this.props.indexOfFirstMovie + index;
                    return <Movie film={film} 
                                  key={film.movie.ids.trakt}
                                  url={this.props.url}
                                  similar={this.props.similar}
                                  index={i}  
                            />
                        })
            }
        </div>
    )
  }
}
export default ListMovies;