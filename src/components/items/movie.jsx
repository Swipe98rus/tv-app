import React from 'react';



const Movie = (props)=>{
    const title = props.film.movie.title;
    const year = props.film.movie.year;
    const url = props.url[props.index];
    let firstSimilar = '';
    let secondSimilar = '';
    let thridSimilar = '';

    if(props.similar[props.index]){
        if(props.similar[props.index][0]){
        firstSimilar = props.similar[props.index][0].title;
        secondSimilar = props.similar[props.index][1].title;
        thridSimilar = props.similar[props.index][2].title;
        }else{
            firstSimilar = 'Not found';
            secondSimilar = 'Not found';
            thridSimilar = 'Not found';
        }
    }

    return(
        <div className="OneOfMovie">
            <div className="moviePoster">
                <img src={url} alt='Poster for film not FOUNDED'/>
            </div>
            <div className="movieTitle">
                <h2>{title}</h2>
            </div>
            <div className="movieYear">
                <p>{year}</p>
            </div>
            <div className="Similar">
                <h3>Similar movies</h3>
                <p>{firstSimilar? firstSimilar : 'Searching..'}</p>
                <p>{secondSimilar? secondSimilar : 'Searching..'}</p>
                <p>{thridSimilar? thridSimilar : 'Searching..'}</p>
            </div>
        </div>
    )
}


export default Movie;