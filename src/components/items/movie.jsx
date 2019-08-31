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
    return(
        <div className="OneOfMovie">
            
            <VideoPlayeer trailer = { trailer }
                          conditionClassName = { conditionClassName }
                          conditionUrl = { conditionUrl } />

            <div className="movieTitle">
                <h2>{title}</h2>
            </div>

            <div className="movieYear">
                <p>{year}</p>
            </div>

            <Similar similar={similar}
                     setListMovie={this.props.setListMovie}
                     setName = { this.props.setName } 
                     setPicturesMovie = { this.props.setPicturesMovie } 
                     setListSimilarMovie = { this.props.setListSimilarMovie }
                     name = { this.props.name }
                     listPictures = { this.props.url } />

        </div>
    )
}}


export default Movie;