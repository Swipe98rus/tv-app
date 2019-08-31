/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { conditionImg } from './helpFun/conditionImg';
import Similar from './similar';
import VideoPlayeer from './videoPlayeer';
import MovieInfo from './movieInfo'

class Movie extends React.Component{
render(){
    const title = this.props.film.movie.title;
    const [ conditionUrl, conditionClassName ] = conditionImg(this.props.url);
    return(
        <div className="OneOfMovie">
            
            <VideoPlayeer trailer = { this.props.trailer }
                          conditionClassName = { conditionClassName }
                          conditionUrl = { conditionUrl } />

            <div className="movieTitle">
                <h2>{title}</h2>
            </div>

            <MovieInfo  year = { this.props.film.movie.year }
                        movieInfo = { this.props.rate }   />

            <Similar similar={ this.props.similar }
                     setListMovie={ this.props.setListMovie }
                     setName = { this.props.setName } 
                     setPicturesMovie = { this.props.setPicturesMovie } 
                     setListSimilarMovie = { this.props.setListSimilarMovie }
                     name = { this.props.name }
                     listPictures = { this.props.url }
                     setTrailerForMovie = { this.props.setTrailerForMovie }
                     setCurrentPage = { this.props.setCurrentPage }
                     setRateMovie = { this.props.setRateMovie } />

        </div>
    )
}}


export default Movie;