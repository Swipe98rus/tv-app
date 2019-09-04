import React from 'react';

class NavBarName extends React.Component{
    render(){
        return(
            <input  type="text" 
                    name="searchFilm" 
                    onKeyPress={this.props.onSearchClick}
                    placeholder="Movie title"
                    ref={this.props.movieTitleRef}
                />
        )
    }
}

export default NavBarName;