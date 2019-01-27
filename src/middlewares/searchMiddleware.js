import { search } from '../api';
import {
	getSeriesRequest,
	getSeriesSuccess,
	getSeriesFailure
} from '../actions';

export const searchMiddleware = store => next => action => {
	if (action.type === getSeriesRequest.toString()) {
		search(action.payload)
			.then(data => {
				store.dispatch(getSeriesSuccess(data));
			})
			.catch(error => {
				store.dispatch(getSeriesFailure(error));
			})
	}
	return next(action);
};
