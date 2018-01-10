import { handleActions } from 'redux-actions';
import { loading, auth } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
	[loading.loader.hide]: store =>
		({ ...store, isLoader: false }),
	[loading.loader.show]: store =>
		({ ...store, isLoader: true }),
	[auth.login.request.pending]: store =>
		({ ...store, isRequestLoader: true }),
	[auth.login.request.success]: store =>
		({ ...store, isRequestLoader: false }),
	[auth.login.request.failed]: store =>
		({ ...store, isRequestLoader: false }),

	[auth.sign.request.pending]: store =>
		({ ...store, isRequestLoader: true }),
	[auth.sign.request.success]: store =>
		({ ...store, isRequestLoader: false }),
	[auth.sign.request.failed]: store =>
		({ ...store, isRequestLoader: false }),
}, initialState.loading)

