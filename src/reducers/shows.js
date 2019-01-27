import {
	getShowRequest,
	getShowSuccess,
	getShowFailure
} from '../actions';

const initState = {
	showFetching: false,
	entities: [],
	showError: null
};

const showsReducer = (state = initState, action) => {
	switch (action.type) {
		case getShowRequest.toString():
			return {
				...state,
				showFetching: true,
			};
		case getShowSuccess.toString():
			return {
				...state,
				showFetching: false,
				entities: action.payload
			};
		case getShowFailure.toString():
			return {
				...state,
				showFetching: false,
				showError: action.error
			};
		default: return state;
	};
};

export default showsReducer;