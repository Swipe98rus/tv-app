import React from 'react';


class Similar extends React.Component{ 
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
                                                                   href={"#navBarSetting"}
                                                                   onClick={()=>{this.onReSearchClick(film.title)}}>
                                                    {film.title}
                                                </button> ))) : 'Not found') : 'Searching..' }
            </div>
        )
    }
}

export default Similar;