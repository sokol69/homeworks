import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { getAuthState } from '../Auth/reducer';
import { getUserName } from '../User/reducer';
import { getFollowersInfo } from './api';
import {
	fetchRequest,
	fetchSuccess,
} from './actions';


function* fetchFollowersWatcher() {
  yield takeLatest(fetchRequest, fetchFollowersFlow);
}

export function* fetchFollowersFlow(action) {
	const apiKey = yield select(getAuthState);
	const username = yield select(getUserName);
	const result = yield call(getFollowersInfo, apiKey, username);
	yield put(fetchSuccess(result));
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
