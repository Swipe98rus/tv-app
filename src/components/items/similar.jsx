import React from 'react';
import {saveMovieList, 
        savePicturesInState, 
        saveTrailerForMovie, 
        saveSimilarMovieInState, 
        saveRateForMovie } from '../navBar/helpFun';

class Similar extends React.Component{ 
    async setMovieWithAllData(){

        await this.props.setCurrentPage(1)
        const result = await saveMovieList( this.props.setListMovie, this.props.years, this.props.name );

        //Code save data in state (PICTURES for movie)
        savePicturesInState( result, this.props.listPictures, this.props.setPicturesMovie );
        //Code save data in state (List of SIMILAR movie)
        saveSimilarMovieInState( result, this.props.setListSimilarMovie );
        //Code save data in state (List of TRAILER for movie)
        saveTrailerForMovie( result, this.props.setTrailerForMovie );
        //Code save data in state (List of TRAILER for movie)
        saveRateForMovie( result, this.props.setRateMovie );
    }
    
    async onReSearchClick(e){
        await this.props.setName(e);        
        await this.setMovieWithAllData();
        } 
           
    render(){
        const { similar } = this.props
        return(
            <div className="Similar">
                <h3>Similar movies</h3>
                { similar ? 
                    (similar[0] ? 
                        ( similar.map( film =>( <button key={film.id}
                                                                   type="button"
                                                                   onClick={()=>{this.onReSearchClick(film.title)}}>
                                                    {film.title}
                                                </button> ))) : 'Not found') : 'Searching..' }
            </div>
        )
    }
}

export default Similar;