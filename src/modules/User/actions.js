import { createAction } from 'redux-actions';

export const fetchRequest = createAction('user/FETCH_USER_REQUEST');
export const fetchSuccess = createAction('user/FETCH_USER_SUCCESS');
export const fetchFailure = createAction('user/FETCH_USER_FAILURE');
