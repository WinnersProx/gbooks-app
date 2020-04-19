import {
	HTTP_ERROR,
	FETCH_GOOGLE_BOOKS,
	SEARCH_GOOGLE_BOOKS,
	VIEW_SINGLE_BOOK_DETAILS
} from './types';

import { initRequest, completeRequest, initSearchRequest } from './processActions';

import Axios from 'axios';

const baseUrl = process.env.GOOGLE_BOOKS_API
const apiKey = process.env.GBOOKS_API_KEY;

/**
 * Fetches some newest books from the google books store
 * @return {[type]} [description]
 */
export const fetchBooks = () => async dispatch => {
	dispatch(initRequest());
	try {
		const request = await Axios.get(`${baseUrl}/?q=Programing&orderBy=newest&key=${apiKey}`);
		
		dispatch(completeRequest());

		return dispatch({
			type: FETCH_GOOGLE_BOOKS,
			payload: request.data
		});
	}	
	catch(error) {
		dispatch(completeRequest());
		return dispatch({
			type: HTTP_ERROR,
			payload: error?.response?.data
		});
	}
}

/**
 * Searches for books from the google books store given a user query
 * @param  {String} query a text from the user
 * @return {}       the results from the user's search
 */
export const searchGBooks = query => async dispatch => {
	dispatch(initSearchRequest());
	try {
		const request = await Axios.get(`${baseUrl}/?q=${query}&orderBy=newest&key=${apiKey}`);
		
		dispatch(completeRequest());

		return dispatch({
			type: SEARCH_GOOGLE_BOOKS,
			payload: request.data
		});
	}	
	catch(error) {
		dispatch(completeRequest());
		return dispatch({
			type: HTTP_ERROR,
			payload: error?.response?.data
		});
	}
}

/**
 * Fetches details about a book given its id
 * @param {String} bookId  the book unique id
 * @return {} return the target found book
 */
export const fetchBookDetails = bookId => async dispatch => {
	dispatch(initRequest());
	try {
		const request = await Axios.get(`${baseUrl}/${bookId}`);
		
		dispatch(completeRequest());

		return dispatch({
			type: VIEW_SINGLE_BOOK_DETAILS,
			payload: request.data
		});
	}	
	catch(error) {
		dispatch(completeRequest());
		return dispatch({
			type: HTTP_ERROR,
			payload: error?.response?.data
		});
	}
}
