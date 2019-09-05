import React from 'react';

class NavBarGenres extends React.Component{
    render(){
        return(
            <div className="wrapSort">
                <label htmlFor="genres">optional</label>
                <select name="genres"
                        onChange={this.props.onChooseGenre} >
                    <option value="default">Choose the genre</option>
                    {this.props.genres.map((genre)=>{
                        return <option value={genre.slug} 
                                       key={genre.slug}> {genre.name} </option>
                    })}
                </select>
            </div>
        )
    }
}

export default NavBarGenres;