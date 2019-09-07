import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { getGenresMovie } from '../../APIs/getGenres';

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
    setGenresListAction,
    setMoviesCopyAction,
 } from '../../redux/lists/actions';
 //Page Params
 import { setCurrentPageAction } from '../../redux/pageParams/actions'

class NavBarContainer extends React.Component{
async getAndSaveGenresList(){
    if(this.props.genres.length < 1){
        const genres = await getGenresMovie();
        this.props.setGenresListAction(genres);
    }
}
render() {
    this.getAndSaveGenresList();
    if(this.props.moviesCopy.length < 1){
        this.props.setMoviesCopyAction(this.props.movies);
    }
    return(
        <NavBar state = { this.props } />
    )
}}
const mapStateToProps = state =>{
    return {
        //Search Params
            title: state.searchParams.title,
            year: state.searchParams.year,
            currentGenre: state.searchParams.genre,
            sort: state.searchParams.sort,
            page: state.searchParams.page,
        //Lists
            movies: state.lists.movies,
            moviesCopy: state.lists.moviesCopy,
            genres: state.lists.genres,
        //Page Params
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
        setGenresListAction,
        setMoviesCopyAction,
    //Page Params
        setCurrentPageAction,
};

export default connect( mapStateToProps, mapDispatchToProps )(NavBarContainer);