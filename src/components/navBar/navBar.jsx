import React from 'react';
import NavBarName from './name';
import NavBarYears from './year';
import NavBarSort from './sort';
import NavBarGenres from './genres'
import { getAndBuildAllData } from '../helpFun'


class NavBar extends React.Component{
    constructor(props){
        super(props)
        this.movieTitleRef = React.createRef();
    }
//---------------------------------------MAIN function-------------------------------------
async searching(){
    this.props.state.setLoadStatusAction(false);
    this.props.state.setPageAction(1);
    this.props.state.setCurrentPageListAction([1,2,3,4,5])
    const titleValue = this.movieTitleRef.current.value;
    await this.props.state.setTitleAction(titleValue);

    const {title, year, currentGenre, page} = this.props.state;
    const resultConstructor = await getAndBuildAllData( title, year, currentGenre, page );
    this.props.state.setMoviesAction(resultConstructor);
    this.props.state.setLoadStatusAction(true);
}
onEnterClick(e){
    if( e.which === 13 ){
        this.searching();
    }
}
onButtonClick(){
    this.searching();
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
        await this.props.state.setYearAction( e.target.value );
    // eslint-disable-next-line no-cond-assign
    }else if( valueLength === 0 ){
        await this.props.state.setYearAction('');
    }
}


async onChooseInput(e){
    await this.props.state.setSortAction( e.target.value );
    const moviesForSorting = [ ...this.props.state.movies ];
    const sortMethod = (a, b)=>{
        //Return by oldest
        return( a.year - b.year)
    }
    if(this.props.state.sort === 'Not sort'){
        await this.props.state.setMoviesAction( this.props.state.moviesCopy );

    }else if(this.props.state.sort === 'By oldest'){
        await moviesForSorting.sort( sortMethod );
        await this.props.state.setMoviesAction( moviesForSorting );

    }else if(this.props.state.sort === 'By newest'){
        await moviesForSorting.sort( sortMethod );
        await this.props.state.setMoviesAction( moviesForSorting.reverse() );
    }
}
async onChooseGenre(e){
    if(e.target.value === 'default'){
        this.props.state.setGenreAction('');
    }else{
        this.props.state.setGenreAction(e.target.value)
    }
}

render() {
    return(
        <div className='setting' id="navBarSetting">

                <NavBarName onSearchClick={ (e)=>{ this.onEnterClick(e) }}
                            movieTitleRef={this.movieTitleRef}/>

                <NavBarYears getValueYears={ (e)=>{ this.getValueYears(e) }}
                             onSearchClickYears={ (e)=>{ this.onEnterClick(e) }}/>

                <NavBarGenres genres={this.props.state.genres}
                              onChooseGenre={(e)=>{ this.onChooseGenre(e) }}/>

                <NavBarSort onChooseInput={ (e)=>{ this.onChooseInput(e) }}/>

                <button className="search_button"
                        onClick={(e)=>{this.onButtonClick(e)}}>Search</button>

        </div>
    )
}}
export default NavBar;