import React from 'react';

class Pagination extends React.Component{
render(){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(this.props.totalMovie / this.props.moviePerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className="pagination">
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
        </div>
    )
}
}

export default Pagination;