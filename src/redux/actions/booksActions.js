import {
	HTTP_ERROR,
	FETCH_GOOGLE_BOOKS
} from './types';

import { initRequest, completeRequest } from './processActions';

import Axios from 'axios';

const baseUrl = process.env.GOOGLE_BOOKS_API;
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
