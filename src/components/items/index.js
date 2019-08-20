import React from 'react';
import Pagination from './pagination.jsx'
import { connect } from 'react-redux';
import { setCurrentPage } from '../../redux/listMovies/actions'
import ListMovies from './listMovies';

class  MovieContainer extends React.Component{
render() {
//GET CURRENT POSTS
const indexOfLastMovie = this.props.currentPage * this.props.moviePerPage;
const indexOfFirstMovie = indexOfLastMovie - this.props.moviePerPage;
const currentMovies = this.props.listOfMovies.slice(indexOfFirstMovie, indexOfLastMovie);
const paginate = (pageNumber)=>{
    this.props.setCurrentPage(pageNumber);
}

    return(
        <div>
            <ListMovies currentMovies={currentMovies}
                        url={this.props.listOfPictures}
                        similar={this.props.listOfSimilarMovie}
                        indexOfFirstMovie={indexOfFirstMovie}/>
            <Pagination moviePerPage={this.props.moviePerPage}
                        totalMovie={this.props.listOfMovies.length}
                        paginate={paginate}/>
        </div>
    )
}}

const mapStateToProps = state =>{
    return {
        listOfMovies: state.listOfMovies.listOfMovie,
        listOfPictures: state.listOfMovies.listOfPictures,
        listOfSimilarMovie: state.listOfMovies.listOfSimilarMovie,
        currentPage: state.listOfMovies.currentPage,
        moviePerPage: state.listOfMovies.moviePerPage
    };
};
const mapDispatchToProps = {
    setCurrentPage
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)