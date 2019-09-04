import React from 'react';
import logo from '../../img/logoMSND.svg'

class Pagination extends React.Component{
render(){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(this.props.totalMovie / this.props.moviePerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className="pagination">
                <div className="personalSign"><p>Created by Victor Ryabkov</p></div>
                <div className="listOfPage">
                    {pageNumbers.map( pageNumb => (
                        <a href="#navBarSetting" 
                        className="pageLink" 
                        key={pageNumb}
                        onClick={(e)=>{ e.preventDefault();
                                        this.props.paginate(pageNumb)  }}>
                            {pageNumb}
                        </a>
                    ))}
                </div>
                <div className="wrap-logo"><img src={logo} alt="Logo"/></div>
            </div>
        </div>
    )
}
}

export default Pagination;