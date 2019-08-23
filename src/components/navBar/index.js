import React from 'react';
import { connect } from 'react-redux';
import NavBar from './navBar';
import { setListMovie, 
         setPicturesMovie, 
         setListSimilarMovie, 
         setYears, 
         setName,
         setSort,
         checkInFirstLoad      } from '../../redux/listMovies/actions';

class NavBarContainer extends React.Component{
render() {
    return(
        <NavBar name = { this.props.name }
                years = { this.props.years }
                listMovie = { this.props.listMovie }
                sort = { this.props.sort }
                setListMovie = { this.props.setListMovie }
                setPicturesMovie = { this.props.setPicturesMovie }
                setListSimilarMovie = { this.props.setListSimilarMovie }
                setYears = { this.props.setYears } 
                setName = { this.props.setName }
                setSort = { this.props.setSort }
                checkInFirstLoad = { this.props.checkInFirstLoad } />
    )
}}

const mapStateToProps = state =>{
    return {
        name: state.listOfMovies.name,
        years: state.listOfMovies.years,
        listMovie: state.listOfMovies.listMovie,
        sort: state.listOfMovies.sort,
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
};

export default connect( mapStateToProps, mapDispatchToProps )(NavBarContainer);