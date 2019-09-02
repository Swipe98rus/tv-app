import React from 'react';
import NavBarName from './name';
import NavBarYears from './year';
import NavBarSort from './sort';
import { saveMovieList, 
        savePicturesInState, 
        saveSimilarMovieInState, 
        saveTrailerForMovie, 
        saveRateForMovie } from './helpFun'


class NavBar extends React.Component{
//---------------------------------------Additional function-------------------------------------
savePicturesSimilarTrailerRate( result ){
    //Code save data in state (PICTURES for movie)
    savePicturesInState( result, this.props.toState.listOfPictures, this.props.toState.setPicturesMovie );
    //Code save data in state (List of SIMILAR movie)
    saveSimilarMovieInState( result, this.props.toState.setListSimilarMovie );
    //Code save data in state (List of TRAILER for movie)
    saveTrailerForMovie( result, this.props.toState.setTrailerForMovie );
    //Code save data in state (List of RATE for movie)
    saveRateForMovie( result, this.props.toState.setRateMovie );
}

async setMovieWithAllData(){
    await this.props.toState.setCurrentPage(1);
    const result = await saveMovieList( this.props.toState.setListMovie, this.props.toState.years, this.props.toState.name );
    await this.props.toState.setListMovieCopyForReset(result);
    //This fun save all data for current movie
    this.savePicturesSimilarTrailerRate(result);
}


//---------------------------------------MAIN function-------------------------------------
async onSearchClick(e){
    if( e.which === 13 ){
        await this.props.toState.setName( e.target.value );        
        await this.setMovieWithAllData();
    }
}


async getValueYears(e){
    let valueLength = parseInt( e.target.value.length );

    if( valueLength > 4 ){
        e.target.style.color = '#e17055';
    // eslint-disable-next-line no-cond-assign
    }else if( valueLength < 4 && valueLength >= 1 ){
        e.target.style.color = '#e17055';
    // eslint-disable-next-line no-cond-assign
    }else if( valueLength === 4 ){
        e.target.style.color = '#00b894';
        await this.props.toState.setYears( e.target.value );
    // eslint-disable-next-line no-cond-assign
    }else if( valueLength === 0 ){
        await this.props.toState.setYears('');
    }
}


onSearchClickYears(e){
    if(e.which === 13){
        this.setMovieWithAllData();
    }
}


async onChooseInput(e){
    await this.props.toState.setSort( e.target.value );
    const listForSort = [ ...this.props.toState.listOfMovie ];
    const sortMethod = (a, b)=>{
        //Return by oldest
        return( a.movie.year - b.movie.year)
    }
    await listForSort.sort( sortMethod );

    if(this.props.toState.sort === 'Not sort'){

        await this.props.toState.setListMovie( this.props.toState.listOfMovieCopyForReset );
        //This fun save all data for current movie
        this.savePicturesSimilarTrailerRate( this.props.toState.listOfMovieCopyForReset);

    }else if(this.props.toState.sort === 'By oldest'){

        await this.props.toState.setListMovie( listForSort );
        //This fun save all data for current movie
        this.savePicturesSimilarTrailerRate( listForSort );
    }else if(this.props.toState.sort === 'By newest'){

        await listForSort.reverse();
        await this.props.toState.setListMovie( listForSort );
        //This fun save all data for current movie
        this.savePicturesSimilarTrailerRate( listForSort );
    }
}

render() {
    return(
        <div className='setting' id="navBarSetting">
                <NavBarName onSearchClick={ (e)=>{ this.onSearchClick(e) }}/>
                <NavBarYears getValueYears={ (e)=>{ this.getValueYears(e) }}
                             onSearchClickYears={ (e)=>{ this.onSearchClickYears(e) }}/>
                <NavBarSort onChooseInput={ (e)=>{ this.onChooseInput(e) }}/>
        </div>
    )
}}
export default NavBar;