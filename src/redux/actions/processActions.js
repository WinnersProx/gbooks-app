import {
	REQUEST_PROCESS_INIT,
	COMPLETE_REQUEST

} from './types';

export const initRequest = () => ({ type: REQUEST_PROCESS_INIT });

export const completeRequest = () => ({ type: COMPLETE_REQUEST });
