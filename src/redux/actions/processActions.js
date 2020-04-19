import {
	REQUEST_PROCESS_INIT,
	COMPLETE_REQUEST,
	SEARCH_REQUEST_INIT

} from './types';

export const initRequest = () => ({ type: REQUEST_PROCESS_INIT });

export const completeRequest = () => ({ type: COMPLETE_REQUEST });

export const initSearchRequest = () => ({ type: SEARCH_REQUEST_INIT })
