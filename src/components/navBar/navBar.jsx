import React from 'react';
import { getListOfMovies } from '../../APIs/getMovieAPI';
import NavBarName from './name';
import NavBarYears from './year';
import NavBarSort from './sort';
import { getPictures } from './helpFun/getPictures'
import { getSimilar } from './helpFun/getSimilar'


class NavBar extends React.Component{
constructor(props){
    super(props)
    this.onSearchClick = this.onSearchClick.bind(this);
    this.getValueYears = this.getValueYears.bind(this);
    this.onSearchClickYears = this.onSearchClickYears.bind(this);
    this.onChooseInput = this.onChooseInput.bind(this);
    this.savePicturesInState = this.savePicturesInState.bind(this);
    this.saveSimilarMovieInState = this.saveSimilarMovieInState.bind(this);
    this.saveMovieList = this.saveMovieList.bind(this);
    this.setMovieWithAllData = this.setMovieWithAllData.bind(this);
    this.firstLoadingApp = this.firstLoadingApp.bind(this);
}

//---------------------------------------Additional function-------------------------------------
async savePicturesInState(result){
    const pictures = await getPictures(result);
    await this.props.setPicturesMovie(pictures);
}


async saveSimilarMovieInState(result){
    const similarMovie = await getSimilar(result);
    await this.props.setListSimilarMovie(similarMovie);
}


async saveMovieList(){
    if(this.props.state.listOfMovies.years){
        //Code save data in state (List of MOVIE with YEAR)
        const result = await getListOfMovies(this.props.state.listOfMovies.name, this.props.state.listOfMovies.years);
        await this.props.setListMovie(result);
        return result;
    }else{
        //Code save data in state (List of MOVIE)
        const result = await getListOfMovies(this.props.state.listOfMovies.name);
        await this.props.setListMovie(result);
        return result;
    }
}


async setMovieWithAllData(){
    if(this.props.state.listOfMovies.listOfPictures){
        await this.savePicturesInState([]);
    }
    const result = await this.saveMovieList();

    //Code save data in state (PICTURES for movie)
    this.savePicturesInState(result);
        
    //Code save data in state (List of SIMILAR movie)
    this.saveSimilarMovieInState(result);
}


//---------------------------------------MAIN function-------------------------------------
async onSearchClick(event){
    if(event.which === 13){
        await this.props.setName(event.target.value);        
        this.setMovieWithAllData();
    }
}
async firstLoadingApp (){
    await this.props.setName('');        
    await this.setMovieWithAllData();
    await this.props.checkInFirstLoad(false);
}



async getValueYears(event){
    let valueLength = parseInt(event.target.value.length);

    if(valueLength > 4){
        event.target.style.color = '#e17055';

    // eslint-disable-next-line no-cond-assign
    }else if(valueLength < 4 && valueLength >= 1){
        event.target.style.color = '#e17055';

    // eslint-disable-next-line no-cond-assign
    }else if(valueLength === 4){
        event.target.style.color = '#00b894';
        await this.props.setYears(event.target.value);
    
    // eslint-disable-next-line no-cond-assign
    }else if(valueLength === 0){
        await this.props.setYears('');
    }
}


onSearchClickYears(e){
    if(e.which === 13){
        this.setMovieWithAllData();
    }
}


async onChooseInput(e){
    await this.props.setSort( e.target.value );
    const listForSort = [...this.props.state.listOfMovies.listOfMovie];
    const sortMethod = (a, b)=>{
        //Return by oldest
        return( a.movie.year - b.movie.year)
    }
    await listForSort.sort( sortMethod );

    if(this.props.state.listOfMovies.sort === 'By newest'){
        await listForSort.reverse();
        await this.props.setListMovie(listForSort);

        //Code save data in state (PICTURES for movie)
        this.savePicturesInState(listForSort);

        //Code save data in state (List of SIMILAR movie)
        this.saveSimilarMovieInState(listForSort);

    }else if(this.props.state.listOfMovies.sort === 'By oldest'){
        await this.props.setListMovie( listForSort );

        //Code save data in state (PICTURES for movie)
        this.savePicturesInState(listForSort);

        //Code save data in state (List of SIMILAR movie)
        this.saveSimilarMovieInState(listForSort);
    }
}


render() {
    return(
        <div className='setting' id="navBarSetting">
                <NavBarName onSearchClick={this.onSearchClick}/>
                <NavBarYears getValueYears={this.getValueYears}
                             onSearchClickYears={this.onSearchClickYears}/>
                <NavBarSort onChooseInput={this.onChooseInput}/>
        </div>
    )
}}
export default NavBar;