import { createActions } from 'redux-actions';
import { REQUEST } from './constants.js'

export const { message } = createActions({
  MESSAGE: {
    LOGIN: payload => payload,
    LOGOUT: payload => payload,

    ADD_USER: payload => payload,
    REMOVE_USER: payload => payload,

    NEW_MESSAGE: payload => payload,
    SEND_MESSAGE: payload => payload
  }
})
