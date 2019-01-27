import {
	getSeriesRequest,
	getSeriesSuccess,
	getSeriesFailure
} from '../actions';

const initState = {
	isFetching: false,
	series: [],
	error: null
};

const searchReducer = (state = initState, action) => {
	switch (action.type) {
		case getSeriesRequest.toString():
			return {
				...state,
				isFetching: true
			};
		case getSeriesSuccess.toString():
			return {
				...state,
				isFetching: false,
				series: action.payload
			};
		case getSeriesFailure.toString():
			return {
				...state,
				isFetching: false,
				error: action.error
			};
		default: return state;
	};
};

export default searchReducer;