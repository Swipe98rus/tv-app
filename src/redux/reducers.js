import { combineReducers } from 'redux';
import { updateSearchParamsReducers } from './searchParams/reducers';
import { updateListsReducers } from './lists/reducers';
import { updatePageParamsReducers } from './pageParams/reducers';

export default combineReducers({
    searchParams: updateSearchParamsReducers,
    lists: updateListsReducers,
    pageParams: updatePageParamsReducers,
})


