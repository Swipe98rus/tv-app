export const SAVE_CURRENT_PAGE_STATE = 'SAVE_CURRENT_PAGE_STATE';
export const SAVE_CURRENT_PAGE_LIST_STATE = 'SAVE_CURRENT_PAGE_LIST_STATE';


export const setCurrentPageAction = (currentPage)=>({
    type: SAVE_CURRENT_PAGE_STATE,
    payload: currentPage,
})
export const setCurrentPageListAction = (currentPageList)=>({
    type: SAVE_CURRENT_PAGE_LIST_STATE,
    payload: currentPageList,
})


