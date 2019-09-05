import React from 'react';

class Pagination extends React.Component{
render(){
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(this.props.totalMovie / this.props.moviePerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            {pageNumbers.length > 10 ? <div className="scroll"><p>Scroll please</p></div> : <div></div>}
            <div className='pagination'>
                <div className={pageNumbers.length > 10 ? 'listOfPage lopExtra' : 'listOfPage'}>
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
            <div className="personalSign"><p>Created by Victor Ryabkov</p></div>
        </div>
    )
}
}

export default Pagination;