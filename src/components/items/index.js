import React from 'react';
import Pagination from './pagination.jsx'
import { connect } from 'react-redux';
import ListMovies from './listMovies';
import error from '../../img/error.svg';
import logo from '../../img/logoMSND.svg';
// import { saveMovieList,
//         savePicturesInState,
//         startAllSaveFun } from '../navBar/helpFun/index'
//Search Params
import { 
    setTitleAction,
    setYearAction,
    setGenreAction,
    setSortAction,
 } from '../../redux/searchParams/actions';

 //Lists
import { 
    setMoviesAction,
    setPicturesAction,
    setSimilarsAction,
    setGenresListAction,
    setMoviesCopyAction,
 } from '../../redux/lists/actions';
 //Page Params
 import { setCurrentPageAction } from '../../redux/pageParams/actions'


class  MovieContainer extends React.Component{
render() {

const { title, movies } = this.props;

// const paginate = async (pageNumber)=>{
//     this.props.setCurrentPage(pageNumber);
//     const result = await saveMovieList( this.props.setListMovie, 
//                                         this.props.years, 
//                                         this.props.name, 
//                                         this.props.currentGenre,
//                                         pageNumber );
//     await savePicturesInState( result, this.props.listOfPictures, this.props.setPicturesMovie );
//     await startAllSaveFun( result, this.props.setListSimilarMovie, this.props.setTrailerForMovie, this.props.setRateMovie );
// } 

const conditionRenderByResult = ()=>{
    if( (title !== '' && movies.length === 0) ){
            return (
                <div className="noResultBySearch">
                    <h1>{title} - Not found</h1>
                    <h3>¯\_(ツ)_/¯</h3>
                    <img src={error} alt='not found'/>
                </div>
            )
    }else{
        return (
            <div className="wrap-for-content">
                {this.props.movies.length < 1 ? 
                    <div className="wrap-logo"><img src={logo} alt="LOGO" /></div> 
                        : <ListMovies movies={ this.props.movies }   />}
                        <Pagination 
                        // paginate = { paginate }
                                    currentPage = { this.props.currentPage}
                                    movies = {this.props.movies}    />
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
    //Search Params
        title: state.searchParams.title,
        year: state.searchParams.year,
        currentGenre: state.searchParams.genre,
        sort: state.searchParams.sort,
    //Lists
        movies: state.lists.movies,
        moviesCopy: state.lists.moviesCopy,
        pictures: state.lists.pictures,
        genres: state.lists.genres,
        similars: state.lists.similars,
    //Page Params
        currentPage: state.pageParams.currentPage,
        moviePerPage: state.pageParams.moviePerPage,
};
};
const mapDispatchToProps = {
    //Search Params
        setTitleAction,
        setYearAction,
        setGenreAction,
        setSortAction,
    //Lists
        setMoviesAction,
        setPicturesAction,
        setSimilarsAction,
        setGenresListAction,
        setMoviesCopyAction,
    //Page Params
        setCurrentPageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)