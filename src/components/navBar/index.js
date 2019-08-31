import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { setListMovie, 
         setPicturesMovie, 
         setListSimilarMovie, 
         checkInFirstLoad,
         setTrailerForMovie,
         setCurrentPage      } from '../../redux/listMovies/actions';
import {
    setYears, 
    setName,
    setSort,
} from '../../redux/paramsMovies/actions';

class NavBarContainer extends React.Component{
render() {
    return(
        <NavBar name = { this.props.name }
                years = { this.props.years }
                listOfMovie = { this.props.listOfMovie }
                sort = { this.props.sort }
                setListMovie = { this.props.setListMovie }
                setPicturesMovie = { this.props.setPicturesMovie }
                setListSimilarMovie = { this.props.setListSimilarMovie }
                setYears = { this.props.setYears } 
                setName = { this.props.setName }
                setSort = { this.props.setSort }
                checkInFirstLoad = { this.props.checkInFirstLoad }
                listOfPictures = { this.props.listOfPictures }
                setTrailerForMovie = { this.props.setTrailerForMovie }
                setCurrentPage = { this.props.setCurrentPage } />
    )
}}

const mapStateToProps = state =>{
    return {
        name: state.paramsMovies.name,
        years: state.paramsMovies.years,
        listOfMovie: state.listMovies.listOfMovie,
        sort: state.paramsMovies.sort,
        listOfPictures: state.listMovies.listOfPictures
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
    setCurrentPage
};

export default connect( mapStateToProps, mapDispatchToProps )(NavBarContainer);