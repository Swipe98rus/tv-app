import React from 'react';

const Pagination = ({ moviePerPage, totalMovie, paginate})=>{
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalMovie / moviePerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div>
            <div className="pagination">
                {pageNumbers.map( pageNumb => (
                    <a href="#navBarSetting" 
                       className="pageLink" 
                       key={pageNumb}
                       onClick={(e)=>{
                           e.preventDefault();
                           paginate(pageNumb)}}>
                        {pageNumb}
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Pagination;