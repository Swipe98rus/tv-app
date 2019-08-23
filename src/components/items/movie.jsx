import React from 'react';
import { conditionImg } from './helpFun/conditionImg';

class Movie extends React.Component{
constructor(props){
super(props);
this.preloaderRef = React.createRef();

}
preloader(e){
    setTimeout( ()=>{
        this.preloaderRef.current.style.opacity = '0';
        this.preloaderRef.current.style.visibility = 'hidden';
    }, 1500 )
}

render(){
    const title = this.props.film.movie.title;
    const year = this.props.film.movie.year;
    const similar = this.props.similar;
    const [ conditionUrl, conditionClassName ] = conditionImg(this.props.url);
    return(
        <div className="OneOfMovie">

            <div className="moviePoster">
                <div className="preloader" ref={this.preloaderRef}>
                    <div className="loader"></div>
                </div>
                <img onLoad={ (e)=>{ this.preloader(e.target)}}
                     className={conditionClassName}
                     src={conditionUrl}
                     alt = 'Poster for film' />
            </div>

            <div className="movieTitle">
                <h2>{title}</h2>
            </div>

            <div className="movieYear">
                <p>{year}</p>
            </div>

            <div className="Similar">
                <h3>Similar movies</h3>
                { similar ? 
                    (similar[0] ? 
                        ( similar.map( film =>( <p key={film.id}>
                                                    {film.title}
                                                </p> ))) : 'Not found') : 'Searching..' }
            </div>
        </div>
    )
}}


export default Movie;