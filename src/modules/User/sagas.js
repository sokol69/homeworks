import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getUserInfo } from './api';
import { getAuthState } from '../Auth/reducer';
import { getUserName } from '../User/reducer';
import {
	fetchRequest,
	fetchSuccess,
	fetchFailure
} from './actions';


function* fetchUserWatcher() {
  yield takeLatest(fetchRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
	const apiKey = yield select(getAuthState);
	const username = yield select(getUserName);
	const result = yield call(getUserInfo, apiKey, username);
	yield put(fetchSuccess(result));
}

export default function*() {
	yield fork(fetchUserWatcher);
}
