import { combineReducers } from 'redux'
import user from './user'
import auth from './auth'
import home from './home'
import message from './message'
import loading from './loading';
import teachers from './teachers';
import works from './works';

// import { routerReducer as router } from 'react-router-redux'

export default combineReducers({
	user,
	auth,
	home,
	message,
	loading,
	teachers,
	works,
})
