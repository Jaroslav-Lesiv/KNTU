import { createActions } from 'redux-actions';
import { REQUEST } from './constants.js'

export const { user } = createActions({
  USER: {
    PROFILE: {
      REQUEST
    },
    CHECK_USER: payload => payload,
    SET_USER: payload => payload,
    SET_SETTINGS: payload => payload,
    SHOW_INFORM: payload => payload,
    ADD_TO_FAVORITE: payload => payload,
    HIDE_FAVORITE_LIST: payload => payload,
    SHOW_FAVORITE_LIST: payload => payload,
    SHOW_USER_MODAL: payload => payload,
    HIDE_USER_MODAL: payload => payload,
    SHOW_USER_SETTINGS: payload => payload
  }
})
