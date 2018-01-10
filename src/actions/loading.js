import { createActions } from 'redux-actions';
import { REQUEST } from './constants.js'

export const { loading } = createActions({
  LOADING: {
    LOADER: {
      SHOW: payload => payload,
      HIDE: payload => payload,
    },
    REQUEST_LOADER: {
      SHOW: payload => payload,
      HIDE: payload => payload,
    },
    }
})
