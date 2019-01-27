import { show } from '../api';
import {
	getShowRequest,
	getShowSuccess,
	getShowFailure
} from '../actions';

export const showMiddleware = store => next => action => {
	if (action.type === getShowRequest.toString()) {
		show(action.payload)
			.then(data => {
				store.dispatch(getShowSuccess(data));
			})
			.catch(error => {
				store.dispatch(getShowFailure(error));
			})
	}
	return next(action);
};
