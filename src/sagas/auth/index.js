import _ from 'lodash'
import {
	put,
	all,
	takeEvery,
	takeLatest
} from 'redux-saga/effects';
import * as action from '../../actions';
import { toJs, toJsonString } from '../../service/api'

function* checkUser() {
		let user = toJs(localStorage.getItem('user'))
		if (!_.isEmpty(user)) {
			yield put(action.user.setUser(user))
		}
}

function* logOut() {
    localStorage.removeItem('user')
    yield put(action.user.checkUser())
    yield put(action.auth.logoutSuccess())
}

export default {
    checkUser,
    logOut,
};