import React from 'react';

class MovieInfo extends React.Component{
    render(){
        const year = this.props.year;
        const movieInfo = this.props.movieInfo;
        let rate;
        if(movieInfo){
            rate = movieInfo.Ratings? movieInfo.Ratings : [];
        }
        return(
            <div className="movieInfo">
                <h4>{year}</h4>
                <h4>{movieInfo? movieInfo.Country : 'Searching..'}</h4>
                <p>IMDB:  {movieInfo? movieInfo.imdbRating : 'Searching..'}</p>
                <p>
                    { rate? 
                        rate[1]? (rate[1].Source + ':  ' + rate[1].Value ) : 'Not Found'
                                                : 'Searching..'}
                </p>
                <p>
                    { rate? 
                            rate[2]? (rate[2].Source + ':  ' + rate[2].Value ) : 'Not Found'
                                                    : 'Searching..'}
                </p>
            </div>
        )
    }
}

export default MovieInfo;