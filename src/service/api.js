
import {
    call,
    put,
} from 'redux-saga/effects';

import {
    get,
} from './http';
import {
    auth
} from '../actions';


// function localStorageToken(token?: string) {
// 	if (token) {
// 		return Http.token = token
// 	}
// 	Http.token = null
// }

const setJWT = (token) => {
    localStorage.setItem('jwt', token)
}

export const toJsonString = (data) => JSON.stringify(data)

export const toJs = (json) => JSON.parse(json)

const setUser = (user) => {
    let jsonUser = toJsonString(user)
    localStorage.setItem('user', jsonUser)
}
function* fetchSign({
    payload
}) {
    const {
        firstname,
        lastname,
        name,
        password,
        confirm_password,
        email
    } = payload
    try {
        const response = yield call(get, `/user/add?firstname=${firstname}&lastname=${lastname}&name=${name}&password=${password}&confirm_password=${confirm_password}&email=${email}`);
        console.log(response)
        if (response.errors) {
            console.log('error', response.errors)
            yield put(auth.sign.request.failed(response.errors));
        } else if (response) {
            console.log(response)
            setJWT(response.user.jwt)
            setUser(response.user)
            yield put(auth.modal.hideSignModal());
            yield put(auth.sign.request.success(response.user));
        }
    } catch (e) {
        console.log('try error')
    }
}


function* fetchLogOut({
    payload
}) {
    yield console.log('logout')
    try {
        const response = yield call(get, '/register')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}


function* fetchLogin({
    payload
}) {
    const {
        name,
        password
    } = payload
    try {
        const response = yield call(get, `/user/auth?name=${name}&password=${password}`);
        if (response.errors) {
            console.log('errors', response.rrors);
            yield put(auth.login.request.failed(response.errors));
        } else if (response) {
            console.log('succes', response)
            setJWT(response.user.jwt)
            setUser(response.user)
            yield put(auth.modal.hideLoginModal());
            yield put(auth.login.request.success(response.user));
        }
    } catch (error) {
        yield put(auth.login.request.failed(error));
    }
}

export default {
    fetchLogOut,
    fetchSign,
    fetchLogin
};