import { 
	FETCH_GOOGLE_BOOKS,
	SEARCH_GOOGLE_BOOKS,
	VIEW_SINGLE_BOOK_DETAILS
} from '../actions/types';

export default (state = {}, action) => {

 switch(action.type) {
 	case FETCH_GOOGLE_BOOKS:
 		return { ...state, books: action.payload };
 	
 	case SEARCH_GOOGLE_BOOKS:
 		return { ...state, results: action.payload };

 	case VIEW_SINGLE_BOOK_DETAILS:
 		return { ...state, bookDetails: action.payload };
 		
 	default:
 		return state;
 }

};
