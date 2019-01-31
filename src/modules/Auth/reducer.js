import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';
import { createSelector } from 'reselect';

const isAuthorized = handleActions({
	[addApiKey]: () => true
}, false);

const apiKey = handleActions({
	[addApiKey]: (_state, action) => action.payload
}, '');

export default combineReducers({
	isAuthorized,
	apiKey
});

export const getIsAuthorized = createSelector(
	state => state.isAuthorized, isAuthorized => isAuthorized
);

export const getApiKey = createSelector(
	state => state.apiKey, apiKey => apiKey
);

export const getAuthState = createSelector(
	state => state.auth.apiKey, apiKey => apiKey
);
