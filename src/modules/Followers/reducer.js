import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import {
	fetchRequest,
	fetchSuccess,
	fetchFailure
} from './actions';

const isLoading = handleActions({
	[fetchRequest]: () => true,
	[fetchSuccess]: () => false,
	[fetchFailure]: () => false
}, false);

const data = handleActions({
	[fetchSuccess]: (_state, action) => action.payload
}, null);

export default combineReducers({
	isLoading,
	data
});

export const getFollowersIsLoading = createSelector(
	state => state.isLoading, isLoading => isLoading
);

export const getFollowersData = createSelector(
	state => state.data, data => data
);
