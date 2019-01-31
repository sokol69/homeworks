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

const name = handleActions({
	[fetchRequest]: (_state, action) => action.payload
}, '');

export default combineReducers({
	isLoading,
	data,
	name
});

export const getUserIsLoading = createSelector(
	state => state.isLoading, isLoading => isLoading
);

export const getUserData = createSelector(
	state => state.data, data => data
);

export const getUserName = createSelector(
	state => state.user.name, name => name
);