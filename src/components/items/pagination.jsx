/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Pagination extends React.Component{
render(){
    const pageNumbers = {
        'prev': this.props.currentPage -1,
        'current': this.props.currentPage ,
        'next': this.props.currentPage +1,
        'mid': this.props.currentPage +2,
    }; 

    return (
        <div>
            {pageNumbers.length > 10 ? <div className="scroll"><p>Scroll please</p></div> : <div></div>}
            <div className='pagination'>
                <div className='listOfPage'>
                    <a className="pageLink prevButton"
                       key="prevPage"
                       onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.prev)}}>Prev</a>

                    <a className={pageNumbers.current === pageNumbers.mid -2 ? 'pageLink currentPageActive' : 'pageLink'}
                       key="prevCurrentPage2"
                       onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.mid -2)}}>     {pageNumbers.mid -2}   </a>
                    <a className={pageNumbers.current === pageNumbers.mid -1 ? 'pageLink currentPageActive' : 'pageLink'}
                       key="prevCurrentPage"
                       onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.mid -1)}}>     {pageNumbers.mid -1}   </a>    
                    <a className={pageNumbers.current === pageNumbers.mid ? 'pageLink currentPageActive' : 'pageLink'}
                       key="currentPage"
                       onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.mid)}}>      {pageNumbers.mid}     </a>
                    <a className={pageNumbers.current === pageNumbers.mid +1 ? 'pageLink currentPageActive' : 'pageLink'}
                       key="nextCurrentPage"
                       onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.mid +1)}}>     {pageNumbers.mid +1}    </a>
                    <a className={pageNumbers.current === pageNumbers.mid +2 ? 'pageLink currentPageActive' : 'pageLink'}
                       key="nextCurrentPage2"
                       onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.mid +2)}}>     {pageNumbers.mid +2}    </a>
                    
                    
                    <a className="pageLink nextButton"
                        key="nextPage" 
                        onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.next)}}>Next</a>
                </div>
                
            </div>
            <div className="personalSign"><p>Created by Victor Ryabkov</p></div>
        </div>
    )
}
}

export default Pagination;