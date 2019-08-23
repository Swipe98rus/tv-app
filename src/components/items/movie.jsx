import React from 'react';
import { conditionImg } from './helpFun/conditionImg';

class Movie extends React.Component{
render(){
    const title = this.props.film.movie.title;
    const year = this.props.film.movie.year;
    const i = this.props.index;
    const url = this.props.url[i];
    const similar = this.props.similar;
    let firstSimilar = '';
    let secondSimilar = '';
    let thridSimilar = '';
    const [ conditionUrl, conditionClassName ] = conditionImg(url);
    
    if(similar[i]){
        if(similar[i][0]){
            firstSimilar = similar[i][0].title;
            secondSimilar = similar[i][1].title;
            thridSimilar = similar[i][2].title;
        }else{
            firstSimilar = 'Not found';
            secondSimilar = 'Not found';
            thridSimilar = 'Not found';
        }
    }

    return(
        <div className="OneOfMovie">
            <div className="moviePoster">
                <img className={conditionClassName}
                     src={conditionUrl} 
                     alt='Poster for film not FOUNDED'/>
            </div>
            <div className="movieTitle">
                <h2>{title}</h2>
            </div>
            <div className="movieYear">
                <p>{year}</p>
            </div>
            <div className="Similar">
                <h3>Similar movies</h3>
                <p>{firstSimilar ? firstSimilar : 'Searching..'}</p>
                <p>{secondSimilar ? secondSimilar : 'Searching..'}</p>
                <p>{thridSimilar ? thridSimilar : 'Searching..'}</p>
            </div>
        </div>
    )
}}


export default Movie;