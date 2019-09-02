import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { setListMovie, 
         setPicturesMovie, 
         setListSimilarMovie, 
         checkInFirstLoad,
         setTrailerForMovie,
         setCurrentPage,
         setRateMovie ,
         setListMovieCopyForReset    } from '../../redux/listMovies/actions';
import {
    setYears, 
    setName,
    setSort,
} from '../../redux/paramsMovies/actions';

class NavBarContainer extends React.Component{
render() {
    return(
        <NavBar toState = { this.props } />
    )
}}
const mapStateToProps = state =>{
    return {
        name: state.paramsMovies.name,
        years: state.paramsMovies.years,
        listOfMovie: state.listMovies.listOfMovie,
        listOfMovieCopyForReset: state.listMovies.listOfMovieCopyForReset,
        sort: state.paramsMovies.sort,
        listOfPictures: state.listMovies.listOfPictures,
    };
};
const mapDispatchToProps = {
    setListMovie,
    setPicturesMovie,
    setListSimilarMovie,
    setYears,
    setName,
    setSort,
    checkInFirstLoad,
    setTrailerForMovie,
    setCurrentPage,
    setRateMovie,
    setListMovieCopyForReset
};

export default connect( mapStateToProps, mapDispatchToProps )(NavBarContainer);