/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { conditionImg } from '../helpFun/conditionImg';
import Similar from './similar';
import VideoPlayeer from './videoPlayeer';
import MovieInfo from './movieInfo'

class Movie extends React.Component{
render(){
    const { film } = this.props;
    const [ conditionUrl, conditionClassName ] = conditionImg(film.poster);
    return(
        <div className="OneOfMovie">
            
            <VideoPlayeer trailer = { film.trailer }
                          conditionClassName = { conditionClassName }
                          conditionUrl = { conditionUrl } />

            <div className="movieTitle">
                <h2>{film.title}</h2>
            </div>

            <MovieInfo  year = { film.year }
                        country = { film.country }
                        rateIMDB = { film.rateIMDB }
                        rateOthers = { film.rateOthers }   />

            <Similar similar={ film.similar }
                     searchingSimilar = {this.props.searchingSimilar}    />

        </div>
    )
}}


export default Movie;