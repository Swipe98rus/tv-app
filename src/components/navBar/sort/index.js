import React from 'react';

class NavBarSort extends React.Component{
    render(){
        return(
            <div className="wrapSort">
                <label htmlFor="sort">optional</label>
                <select name="sort"
                        onChange={this.props.onChooseInput} >
                    <option value="Not sort">Not sort</option>
                    <option value="By newest">By newest</option>
                    <option value="By oldest">By oldest</option>
                </select>
            </div>
        )
    }
}

export default NavBarSort;