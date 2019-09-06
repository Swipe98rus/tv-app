import React from 'react';
import Pagination from './pagination.jsx'
import { connect } from 'react-redux';
import { setCurrentPage,
         setListMovie,
         setPicturesMovie,
         setListSimilarMovie,
         setTrailerForMovie,
         setRateMovie } from '../../redux/listMovies/actions';
import { setName } from '../../redux/paramsMovies/actions'
import ListMovies from './listMovies';
import error from '../../img/error.svg';
import logo from '../../img/logoMSND.svg';
import { saveMovieList,
        savePicturesInState,
        startAllSaveFun } from '../navBar/helpFun/index'

class  MovieContainer extends React.Component{
render() {

const { name, listOfMovie } = this.props;

const paginate = async (pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
    window.scrollTo(0,0);
    const result = await saveMovieList( this.props.setListMovie, 
                this.props.years, 
                this.props.name, 
                this.props.currentGenre,
                pageNumber );
    await savePicturesInState( result, this.props.listOfPictures, this.props.setPicturesMovie );
    await startAllSaveFun( result, this.props.setListSimilarMovie, this.props.setTrailerForMovie, this.props.setRateMovie );
} 

const conditionRenderByResult = ()=>{
    if( (name !== '' && listOfMovie.length === 0) ){
            return (
                <div className="noResultBySearch">
                    <h1>{name} - Not found</h1>
                    <h3>¯\_(ツ)_/¯</h3>
                    <img src={error} alt='not found'/>
                </div>
            )
    }else{
        return (
            <div className="wrap-for-content">
                {this.props.listOfMovie.length < 1 ? 
                    <div className="wrap-logo"><img src={logo} alt="LOGO" /></div> 
                        : <ListMovies listOfMovie={ this.props.listOfMovie } 
                                    url = { this.props.listOfPictures }
                                    similar = { this.props.listOfSimilarMovie }
                                    setPicturesMovie = { this.props.setPicturesMovie }
                                    setListMovie = { this.props.setListMovie }
                                    setName = { this.props.setName }
                                    setListSimilarMovie = { this.props.setListSimilarMovie }
                                    name = { name }
                                    trailers = { this.props.trailers }
                                    setTrailerForMovie = { this.props.setTrailerForMovie }
                                    setCurrentPage = { this.props.setCurrentPage }
                                    rate = { this.props.rate }
                                    setRateMovie = { this.props.setRateMovie }  />}
                <Pagination moviePerPage = { this.props.moviePerPage }
                            totalMovie = { this.props.listOfMovie.length }
                            paginate = { paginate }
                            currentPage = { this.props.currentPage}    />
            </div>
        )
    }
}
    return(
        <div>
            { conditionRenderByResult() }
        </div>
    )
}}

const mapStateToProps = state =>{
    return {
        listOfMovie: state.listMovies.listOfMovie,
        listOfPictures: state.listMovies.listOfPictures,
        listOfSimilarMovie: state.listMovies.listOfSimilarMovie,
        currentPage: state.listMovies.currentPage,
        moviePerPage: state.listMovies.moviePerPage,
        name: state.paramsMovies.name,
        years: state.paramsMovies.years,
        trailers: state.listMovies.trailers,
        rate: state.listMovies.rate,
        currentGenre: state.paramsMovies.currentGenre,
    };
};
const mapDispatchToProps = {
    setCurrentPage,
    setListMovie,
    setName,
    setPicturesMovie,
    setListSimilarMovie,
    setTrailerForMovie,
    setRateMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)