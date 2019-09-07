export const SAVE_CURRENT_PAGE_LIST_STATE = 'SAVE_CURRENT_PAGE_LIST_STATE';


export const setCurrentPageListAction = (currentPageList)=>({
    type: SAVE_CURRENT_PAGE_LIST_STATE,
    payload: currentPageList,
})


