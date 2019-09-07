import React from 'react';
import Pagination from './pagination.jsx'
import { connect } from 'react-redux';
import ListMovies from './listMovies';
import error from '../../img/error.svg';
import logo from '../../img/logoMSND.svg';

//Search Params
import { 
    setTitleAction,
    setYearAction,
    setGenreAction,
    setSortAction,
    setPageAction,
 } from '../../redux/searchParams/actions';

 //Lists
import { 
    setMoviesAction,
    setMoviesCopyAction,
 } from '../../redux/lists/actions';
 //Page Params
 import { setCurrentPageAction } from '../../redux/pageParams/actions'


class  MovieContainer extends React.Component{
render() {
const paginate = async (pageNumber)=>{
    await this.props.setPageAction(pageNumber);
    console.log(this.props.page)
} 
const { title, movies } = this.props;
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
                {this.props.movies.length < 1 ? <div></div> : <Pagination paginate = { paginate }
                                                                        currentPage = { this.props.currentPage}
                                                                        movies = {this.props.movies}    />}   
                <div className="personalSign"><p>Created by Victor Ryabkov</p></div>     
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
        page: state.searchParams.page,
    //Lists
        movies: state.lists.movies,
        genres: state.lists.genres,
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
        setPageAction,
    //Lists
        setMoviesAction,
        setMoviesCopyAction,
    //Page Params
        setCurrentPageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)