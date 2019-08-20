import React from 'react';

class NavBarYears extends React.Component{
    render(){
        return(
            <div className="wrapYearsForm">
                    <label htmlFor="years">optional</label>
                    <input type="number"
                        name="years"
                        placeholder="Choose the year"
                        onChange={this.props.getValueYears}
                        onKeyPress={this.props.onSearchClickYears}
                        max="2019"
                        min="1970" />
                </div>
        )
    }
}

export default NavBarYears;