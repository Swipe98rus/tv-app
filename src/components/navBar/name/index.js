import React from 'react';

class NavBarName extends React.Component{
    render(){
        return(
            <input  type="text" 
                        name="searchFilm" 
                        onKeyPress={this.props.onSearchClick}
                        placeholder="Movie title"
                />
        )
    }
}

export default NavBarName;