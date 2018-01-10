import { delay } from 'redux-saga';
import _ from 'lodash'
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';

import * as action from '../actions';
import api, { toJs } from '../service/api'
import auth from './auth'

// AUTH


export function* workerCheckUser() {
	yield takeEvery(action.user.checkUser, auth.checkUser)
}

export function* workerLogout() {
	yield takeEvery(action.auth.logOut, auth.logOut)
}


export function* fetchSignUp() {
	yield takeLatest(action.auth.sign.request.pending, api.fetchSign)
}


export function* fetchLogin() {
	yield takeLatest(action.auth.login.request.pending, api.fetchLogin)
}


export default function* rootSaga() {
	yield all([
		// Auth
		fetchSignUp(),
        workerCheckUser(),
		fetchLogin(),
        workerLogout()
	])
  }
