import React from 'react';
import NavBarName from './name';
import NavBarYears from './year';
import NavBarSort from './sort';
import { getPictures } from './helpFun/getPictures'
import { getSimilar } from './helpFun/getSimilar'
import { getTrailer } from './helpFun/getTrailer'
import { getListOfMovies } from '../../APIs/getMovieAPI';

class NavBar extends React.Component{
//---------------------------------------Additional function-------------------------------------
async savePicturesInState( result ){
    if( this.props.listOfPictures ){
        await this.props.setPicturesMovie( [] );
    }
    const pictures = await getPictures( result );
    await this.props.setPicturesMovie( pictures );
}


async saveSimilarMovieInState( result ){
    const similarMovie = await getSimilar( result );
    await this.props.setListSimilarMovie( similarMovie );
}


async saveMovieList(){
    if( this.props.years ){
        //Code save data in state (List of MOVIE with YEAR)
        const result = await getListOfMovies( this.props.name, this.props.years );
        await this.props.setListMovie( result );
        return result;
    }else{
        //Code save data in state (List of MOVIE)
        const result = await getListOfMovies( this.props.name );
        await this.props.setListMovie( result );
        return result;
    }
}
async saveTrailerForMovie(result){
    const trailerMovie = await getTrailer( result );
    await this.props.setTrailerForMovie( trailerMovie );
}


async setMovieWithAllData(){
    const result = await this.saveMovieList();

    //Code save data in state (PICTURES for movie)
    this.savePicturesInState( result );
        
    //Code save data in state (List of SIMILAR movie)
    this.saveSimilarMovieInState( result );

    //Code save data in state (List of TRAILER for movie)
    this.saveTrailerForMovie( result );
}


//---------------------------------------MAIN function-------------------------------------
async onSearchClick(e){
    if( e.which === 13 ){
        await this.props.setName( e.target.value );        
        await this.setMovieWithAllData();
    }
}
async firstLoadingApp (){
    await this.props.setName('');        
    await this.setMovieWithAllData();
    await this.props.checkInFirstLoad(false);
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
        await this.props.setYears( e.target.value );
    
    // eslint-disable-next-line no-cond-assign
    }else if( valueLength === 0 ){
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
    const listForSort = [ ...this.props.listOfMovie ];
    const listForReset = [ ...this.props.listOfMovie ];
    console.log(listForReset);
    console.log(this.props.listOfMovie)
    const sortMethod = (a, b)=>{
        //Return by oldest
        return( a.movie.year - b.movie.year)
    }
    await listForSort.sort( sortMethod );

    if(this.props.sort === 'By newest'){
        await listForSort.reverse();
        await this.props.setListMovie( listForSort );

        //Code save data in state (PICTURES for movie)
        this.savePicturesInState( listForSort );

        //Code save data in state (List of SIMILAR movie)
        this.saveSimilarMovieInState( listForSort );

    }else if(this.props.sort === 'By oldest'){
        await this.props.setListMovie( listForSort );

        //Code save data in state (PICTURES for movie)
        this.savePicturesInState( listForSort );

        //Code save data in state (List of SIMILAR movie)
        this.saveSimilarMovieInState( listForSort );
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