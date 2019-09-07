import React from 'react';
import Movie from './movie';


class ListMovies extends React.Component{
 render(){
    return(
        <div>
            {
                this.props.movies.map( (film, index) => {
                    return <Movie film = { film } 
                                  key = { index }   />
                        })
            }
        </div>
    )
  }
}
export default ListMovies;