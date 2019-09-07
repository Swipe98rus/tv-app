/* eslint-disable default-case */
import { 
    SAVE_CURRENT_PAGE_LIST_STATE,
                            } from './actions'

const defaultState = {
    moviesPerPage: 15,
    currentPageList: [1, 2, 3, 4, 5],
} 

export const updatePageParamsReducers = (state = defaultState, action)=>{
    switch( action.type ){
        case SAVE_CURRENT_PAGE_LIST_STATE:
            return {
                ...state,
                currentPageList: action.payload,
            }
    }
    return state;
}
