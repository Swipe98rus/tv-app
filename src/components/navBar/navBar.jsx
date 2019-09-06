import React from 'react';
import NavBarName from './name';
import NavBarYears from './year';
import NavBarSort from './sort';
import NavBarGenres from './genres'
// import NavBarAuthor from './author'
import { saveMovieList, 
        savePicturesInState, 
        startAllSaveFun,
        getGenresMovie,
                       } from './helpFun'


class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.movieTitleRef = React.createRef();
    }
//---------------------------------------Additional function-------------------------------------
async saveAllGenres(){
        if(this.props.toState.genres.length < 1){
            const genres = await getGenresMovie();
            await this.props.toState.setGenres(genres);
        }
}

savePicturesSimilarTrailerRate( result ){
    //Code save data in state (PICTURES for movie)
    savePicturesInState( result, this.props.toState.listOfPictures, this.props.toState.setPicturesMovie );
    startAllSaveFun( result, this.props.toState.setListSimilarMovie, this.props.toState.setTrailerForMovie, this.props.toState.setRateMovie );
}

async setMovieWithAllData(){
    await this.props.toState.setCurrentPage(1);
    const result = await saveMovieList( this.props.toState.setListMovie, 
                                        this.props.toState.years, 
                                        this.props.toState.name, 
                                        this.props.toState.currentGenre,
                                        this.props.toState.currentPage, );
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


onSearchClickYears(e){
    if(e.which === 13){
        this.setMovieWithAllData();
    }
}


async onSearchButton(e){
    const titleValue = this.movieTitleRef.current.value;
    await this.props.toState.setName(titleValue); 
    await this.setMovieWithAllData();
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
async onChooseGenre(e){
    if(e.target.value === 'default'){
        await this.props.toState.setCurrentGenres('');
    }else{
        await this.props.toState.setCurrentGenres(e.target.value)
    }
}

render() {
    this.saveAllGenres();
    return(
        <div className='setting' id="navBarSetting">
                <NavBarName onSearchClick={ (e)=>{ this.onSearchClick(e) }}
                            movieTitleRef={this.movieTitleRef}/>
                {/* <NavBarAuthor onSearchClick ={ (e)=>{this.onSearchAuthor(e)} }/>  */}
                <NavBarYears getValueYears={ (e)=>{ this.getValueYears(e) }}
                             onSearchClickYears={ (e)=>{ this.onSearchClickYears(e) }}/>
                <NavBarGenres genres={this.props.toState.genres}
                              onChooseGenre={(e)=>{this.onChooseGenre(e)}}/>
                <NavBarSort onChooseInput={ (e)=>{ this.onChooseInput(e) }}/>
                <button className="search_button"
                        onClick={(e)=>{this.onSearchButton(e)}}>Search</button>
        </div>
    )
}}
export default NavBar;