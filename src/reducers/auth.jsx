import { handleActions } from 'redux-actions';
import { auth } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[auth.modal.showLoginModal]: store =>
		({ ...store, modal: { ...store.modal, isShowLogInModal: true } }),
	[auth.modal.hideLoginModal]: store =>
		({ ...store, modal: { ...store.modal, isShowLogInModal: false } }),
	[auth.modal.showSignModal]: store =>
		({ ...store, modal: { ...store.modal , isShowSignModal: true } }),
	[auth.modal.hideSignModal]: store =>
		({ ...store, modal: { ...store.modal , isShowSignModal: false } }),

	// LOGIN

	[auth.login.request.failed]: (store, { payload }) =>
		({ ...store,  login: { ...store.login, errors: payload } }),

	[auth.sign.request.failed]: (store, { payload }) =>
		({ ...store, sign: { ...store.sign, errors: payload } }),
}, initialState.auth)
