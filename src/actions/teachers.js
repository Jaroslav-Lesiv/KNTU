import { createActions } from 'redux-actions';
import { REQUEST } from './constants.js'

export const { teachers } = createActions({
    TEACHERS: {
        TEACHER: {
            SET_LIKE: payload => payload
        }
    }
})
