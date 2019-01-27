import { createAction } from 'redux-actions';

export const getSeriesRequest = createAction('SEARCH_REQUEST');
export const getSeriesSuccess = createAction('SEARCH_SUCCESS');
export const getSeriesFailure = createAction('SEARCH_FAILURE');

export const getShowRequest = createAction('SHOW_REQUEST');
export const getShowSuccess = createAction('SHOW_SUCCESS');
export const getShowFailure = createAction('SHOW_FAILURE');