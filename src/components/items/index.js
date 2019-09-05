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
import logo from '../../img/logoMSND.svg'

class  MovieContainer extends React.Component{
render() {

const { name, listOfMovie } = this.props;

//GET CURRENT MOVIES
const indexOfLastMovie = this.props.currentPage * this.props.moviePerPage;
const indexOfFirstMovie = indexOfLastMovie - this.props.moviePerPage;
const currentMovies = listOfMovie.slice(indexOfFirstMovie, indexOfLastMovie);
const paginate = (pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
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
                        : <ListMovies currentMovies = { currentMovies }
                                    url = { this.props.listOfPictures }
                                    similar = { this.props.listOfSimilarMovie }
                                    indexOfFirstMovie = { indexOfFirstMovie } 
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
                            paginate = { paginate }    />
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
        trailers: state.listMovies.trailers,
        rate: state.listMovies.rate,
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