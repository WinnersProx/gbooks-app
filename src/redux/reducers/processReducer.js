import { 
	HTTP_ERROR,
	REQUEST_PROCESS_INIT,
	COMPLETE_REQUEST,
	SEARCH_REQUEST_INIT
} from '../actions/types';

export default (state = {}, action) => {

 switch(action.type) {
 	case REQUEST_PROCESS_INIT:
 		return { ...state, isFetching: true, error: null };

 	case COMPLETE_REQUEST:
 		return { ...state, isFetching: false, isSearching: false, error: null };

 	case SEARCH_REQUEST_INIT:
 		return { ...state, isSearching: true };

 	case HTTP_ERROR:
 		return { ...state, error: action.payload };
 	
 	default:
 		return state;
 }

};
