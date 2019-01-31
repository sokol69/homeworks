import { createAction } from 'redux-actions';

export const fetchRequest = createAction('followers/FETCH_FOLLOWERS_REQUEST');
export const fetchSuccess = createAction('followers/FETCH_FOLLOWERS_SUCCESS');
export const fetchFailure = createAction('followers/FETCH_FOLLOWERS_FAILURE');
