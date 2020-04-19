import { combineReducers } from 'redux';
import booksReducer from './booksReducer';
import processReducer from './processReducer';

const reducers = combineReducers({
	booksReducer,
	processReducer
});

export default reducers;
