import React from 'react';
import { getPictures } from '../navBar/helpFun/getPictures'
import { getSimilar } from '../navBar/helpFun/getSimilar'
import { getListOfMovies } from '../../APIs/getMovieAPI';


class Similar extends React.Component{

    async savePicturesInState( result ){
        if( this.props.listPictures ){
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
    
    
    async setMovieWithAllData(){
        const result = await this.saveMovieList();
    
        //Code save data in state (PICTURES for movie)
        this.savePicturesInState( result );
            
        //Code save data in state (List of SIMILAR movie)
        this.saveSimilarMovieInState( result );
    }
    
    
    //---------------------------------------MAIN function-------------------------------------
    async onReSearchClick(e){
        await this.props.setName(e);        
        await this.setMovieWithAllData();
        }    
    render(){
        return(
            <div className="Similar">
                <h3>Similar movies</h3>
                { this.props.similar ? 
                    (this.props.similar[0] ? 
                        ( this.props.similar.map( film =>( <button key={film.id}
                                                                   type="button"
                                                                   onClick={()=>{this.onReSearchClick(film.title)}}>
                                                    {film.title}
                                                </button> ))) : 'Not found') : 'Searching..' }
            </div>
        )
    }
}

export default Similar;