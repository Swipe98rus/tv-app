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
    const listPages = [pageNumbers.mid -2 , pageNumbers.mid -1, pageNumbers.mid, pageNumbers.mid +1, pageNumbers.mid +2   ]

    return (
        <div>
            <div className='pagination'>
                
                { this.props.movies.length <1 ? <div></div> : <div className='listOfPage'>
                    <a className="pageLink prevButton"
                       key="prevPage"
                       onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.prev)}}>Prev</a>

                    {
                        listPages.map((page)=>{
                            return <a className={page === pageNumbers.current ? 'pageLink currentPageActive' : 'pageLink'}
                                       key={page}
                                        onClick={(e)=>{ e.preventDefault();
                             this.props.paginate(page)}}>     {page}   </a>
                        })
                    }
                    
                    <a className="pageLink nextButton"
                        key="nextPage" 
                        onClick={(e)=>{ e.preventDefault();
                        this.props.paginate(pageNumbers.next)}}>Next</a>
                </div> }
                
            </div>
            <div className="personalSign"><p>Created by Victor Ryabkov</p></div>
        </div>
    )
}
}

export default Pagination;