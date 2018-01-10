import { createActions } from 'redux-actions';
import { REQUEST } from './constants.js'

export const { auth } = createActions({
  AUTH: {
    MODAL: {
      SHOW_LOGIN_MODAL: payload => payload,
      HIDE_LOGIN_MODAL: payload => payload,
      SHOW_SIGN_MODAL: payload => payload,
      HIDE_SIGN_MODAL: payload => payload,
    },
    LOGIN: {
      REQUEST,
    },
    SIGN: {
      REQUEST,
    },
    LOG_OUT: payload => payload,
    LOGOUT_SUCCESS: payload => payload
  }
})
