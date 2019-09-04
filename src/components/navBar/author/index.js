import React from 'react';


class NavBarAuthor extends React.Component{
    render(){
        return(
            <input type="text"
                        placeholder="Author"
                        name="searchByAuthor"
                        onKeyPress={(e)=>{this.props.onSearchClick(e)}}/>
        )
    }
}

export default NavBarAuthor;