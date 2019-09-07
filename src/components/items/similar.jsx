import React from 'react';


class Similar extends React.Component{ 
    render(){
        const { similar } = this.props
        return(
            <div className="Similar">
                <h3>Similar movies</h3>

                { similar.map( (item, index) =>(
                    item ? <button key={item.id}
                                    type="button"
                                    onClick={()=>{this.props.searchingSimilar(item.title)}}> {item.title} </button> 
                        : <p className="similarNotFound" key={index}>Not found</p> ))}
            </div>
        )
    }
}

export default Similar;