import React from 'react';

class NavBarSort extends React.Component{
    render(){
        return(
            <div className="wrapSort">
                <label htmlFor="sort">optional</label>
                <input list="sortMethod"
                        placeholder="Sort"
                        onInput={this.props.onChooseInput}/>
                <datalist id="sortMethod">
                    <option>By newest</option>
                    <option>By oldest</option>
                </datalist>
            </div>
        )
    }
}

export default NavBarSort;