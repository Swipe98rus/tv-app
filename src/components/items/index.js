import React from 'react';
import Pagination from './pagination.jsx'
import { connect } from 'react-redux';
import ListMovies from './listMovies';
import error from '../../img/error.svg';
import logo from '../../img/logoMSND.svg';
import { getAndBuildAllData } from '../helpFun';
//Search Params
import { 
    setTitleAction,
    setYearAction,
    setGenreAction,
    setSortAction,
    setPageAction,
    setLoadStatusAction,
 } from '../../redux/searchParams/actions';

 //Lists
import { 
    setMoviesAction,
    setMoviesCopyAction,
 } from '../../redux/lists/actions';
//Page params
import { setCurrentPageListAction } from '../../redux/pageParams/actions'

class  MovieContainer extends React.Component{
render() {
const paginate = async (pageNumber)=>{
    this.props.setLoadStatusAction(false);
    await this.props.setPageAction(pageNumber);
    const {title, year, currentGenre, page} = this.props;
    const resultConstructor = await getAndBuildAllData( title, year, currentGenre, page );
    this.props.setMoviesAction(resultConstructor);
    this.props.setLoadStatusAction(true);
} 
const searchingSimilar = async(e)=>{
    await this.props.setTitleAction(e);
    await this.props.setYearAction('');
    await this.props.setGenreAction('')
    paginate(1);
} 
const { title, movies, status } = this.props;

const conditionRenderByResult = ()=>{
    if( title !== '' && movies.length === 0 && status){
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
                <div className={ status? "loadingLine" : "loadingLine loadingLineActive"}></div>

                {this.props.movies.length < 1 ? 
                    <div className="wrap-logo">
                        <div className={ status? 'loading' : 'loading loading-active'}></div>
                        <img src={logo} alt="LOGO" className={ status? 'welcome-logo' : 'welcome-logo welcome-logo-loading'}/>
                    </div> 
                        : <ListMovies movies={ movies }
                                      searchingSimilar = {searchingSimilar}   />}

                {this.props.movies.length < 1 ? <div></div> : <Pagination paginate = { paginate }
                                                                        page = { this.props.page}
                                                                        movies = { movies }
                                                                        setCurrentPageListAction = { this.props.setCurrentPageListAction }
                                                                        currentPageList = { this.props.currentPageList }    />}   
                <div className="personalSign">
                    <p>Created by Victor Ryabkov</p>
                </div>
            </div>
        )
    }
}
    return(
            <div> { conditionRenderByResult() } </div>
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
        status: state.searchParams.status,
    //Lists
        movies: state.lists.movies,
        genres: state.lists.genres,
    //Page Params
        currentPageList: state.pageParams.currentPageList,
};
};
const mapDispatchToProps = {
    //Search Params
        setTitleAction,
        setYearAction,
        setGenreAction,
        setSortAction,
        setPageAction,
        setLoadStatusAction,
    //Lists
        setMoviesAction,
        setMoviesCopyAction,
    //Page Params
        setCurrentPageListAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer)