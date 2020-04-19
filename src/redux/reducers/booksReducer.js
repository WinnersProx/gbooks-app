import { 
	FETCH_GOOGLE_BOOKS
} from '../actions/types';

export default (state = {}, action) => {

 switch(action.type) {
 	case FETCH_GOOGLE_BOOKS:
 		return { ...state, books: action.payload };
 	
 	default:
 		return state;
 }

};
