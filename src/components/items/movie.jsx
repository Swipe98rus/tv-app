import React from 'react';
import { conditionImg } from './helpFun/conditionImg';
import Similar from './similar';

class Movie extends React.Component{
constructor(props){
super(props);
this.preloaderRef = React.createRef();

}
preloader(e){
    setTimeout( ()=>{
        if(this.preloaderRef.current){
            this.preloaderRef.current.style.opacity = '0';
            this.preloaderRef.current.style.visibility = 'hidden';
        }
    }, 1500 )
};

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