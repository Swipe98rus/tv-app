/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class Pagination extends React.Component{

async paginationControl(pageNumbers, direction){
    const { currentPageList } = this.props;
    if(pageNumbers.next > currentPageList[4] && direction === 'NEXT' ){
        let pageListUpdate = [];
        for(let index in currentPageList){ 
            pageListUpdate.push( currentPageList[index] + 5 )
        }
        await this.props.setCurrentPageListAction(pageListUpdate);
    }else if( pageNumbers.prev < currentPageList[0] && direction === 'PREV'){
        let pageListUpdate = [];
        for(let index in currentPageList){ 
            pageListUpdate.push( currentPageList[index] - 5 )
        }
        await this.props.setCurrentPageListAction(pageListUpdate);
    }
}
pagePrev(pageNumbers){
    const prev = 'PREV';
    this.props.paginate(pageNumbers.prev);
    this.paginationControl(pageNumbers, prev);
}
pageNext(pageNumbers){
    const next = 'NEXT';
    console.log(pageNumbers.next)
    this.props.paginate(pageNumbers.next);
    this.paginationControl(pageNumbers, next);
}
render(){
    const pageNumbers = {
        'prev': this.props.page === 0 ? this.props.page : this.props.page -1,
        'current': this.props.page ,
        'next': this.props.page +1,
        'mid': this.props.page +2,
    }; 
    const { currentPageList } = this.props;

    return (
        <div>
            <div className='pagination'>
                
                <div className='listOfPage'>
                    <a className="pageLink prevButton"
                       key="prevPage"
                       onClick={(e)=>{ e.preventDefault();
                        pageNumbers.prev === 0 ? console.log('min') : this.pagePrev(pageNumbers)}}>Prev</a>

                    {
                        currentPageList.map((page)=>{
                            return <a className={page === pageNumbers.current ? 'pageLink currentPageActive' : 'pageLink'}
                                       key={page}
                                        onClick={(e)=>{ e.preventDefault();
                             this.props.paginate(page)}}>     {page}   </a>
                        })
                    }
                    
                    <a className="pageLink nextButton"
                        key="nextPage" 
                        onClick={(e)=>{ e.preventDefault(); this.pageNext(pageNumbers) }}>Next</a>
                </div> 
                
            </div>
        </div>
    )
}
}

export default Pagination;