import React from 'react';
import Pagination from './pagination.jsx'
import { connect } from 'react-redux';
import { setCurrentPage,
         setListMovie,
         setPicturesMovie,
         setListSimilarMovie } from '../../redux/listMovies/actions';
import { setName } from '../../redux/paramsMovies/actions'
import ListMovies from './listMovies';

class  MovieContainer extends React.Component{
render() {
//GET CURRENT MOVIES
const indexOfLastMovie = this.props.currentPage * this.props.moviePerPage;
const indexOfFirstMovie = indexOfLastMovie - this.props.moviePerPage;
const currentMovies = this.props.listOfMovie.slice(indexOfFirstMovie, indexOfLastMovie);
const paginate = (pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
} 

    return(
        <div>
            <ListMovies currentMovies = { currentMovies }
                        url = { this.props.listOfPictures }
                        similar = { this.props.listOfSimilarMovie }
                        indexOfFirstMovie = { indexOfFirstMovie } 
                        setPicturesMovie = { this.props.setPicturesMovie }
                        setListMovie = { this.props.setListMovie }
                        setName = { this.props.setName }
                        setListSimilarMovie = { this.props.setListSimilarMovie }
                        name = { this.props.name }  />

            <Pagination moviePerPage = { this.props.moviePerPage }
                        totalMovie = { this.props.listOfMovie.length }
                        paginate = { paginate }    />
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
    };
};
const mapDispatchToProps = {
    setCurrentPage,
    setListMovie,
    setName,
    setPicturesMovie,
    setListSimilarMovie
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)