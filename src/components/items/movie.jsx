/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { conditionImg } from './helpFun/conditionImg';
import Similar from './similar';
import VideoPlayeer from './videoPlayeer'

class Movie extends React.Component{

render(){
    const title = this.props.film.movie.title;
    const year = this.props.film.movie.year;
    const similar = this.props.similar;
    const trailer = this.props.trailer;
    const [ conditionUrl, conditionClassName ] = conditionImg(this.props.url);
    const movieInfo = this.props.rate;
    return(
        <div className="OneOfMovie">
            
            <VideoPlayeer trailer = { trailer }
                          conditionClassName = { conditionClassName }
                          conditionUrl = { conditionUrl } />

            <div className="movieTitle">
                <h2>{title}</h2>
            </div>

            <div className="movieYear">
                <h4>{year}</h4>
                <h4>{movieInfo? movieInfo.Country : 'Searching..'}</h4>
                <p>IMDB:  {movieInfo? movieInfo.imdbRating : 'Searching..'}</p>
                <p>
                    {movieInfo? movieInfo.Ratings[1]? 
                        (movieInfo.Ratings[1].Source + ':  ' + movieInfo.Ratings[1].Value ) : 'Not Found' 
                                : 'Searching..'}
                </p>
                <p>
                    {movieInfo? movieInfo.Ratings[2]? 
                            (movieInfo.Ratings[2].Source + ':  ' + movieInfo.Ratings[2].Value ) : 'Not Found' 
                                    : 'Searching..'}
                </p>
            </div>

            <Similar similar={similar}
                     setListMovie={this.props.setListMovie}
                     setName = { this.props.setName } 
                     setPicturesMovie = { this.props.setPicturesMovie } 
                     setListSimilarMovie = { this.props.setListSimilarMovie }
                     name = { this.props.name }
                     listPictures = { this.props.url }
                     setTrailerForMovie = { this.props.setTrailerForMovie }
                     setCurrentPage = { this.props.setCurrentPage } />

        </div>
    )
}}


export default Movie;