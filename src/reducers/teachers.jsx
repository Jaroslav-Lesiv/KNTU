import { handleActions } from 'redux-actions';
import { teachers } from '../actions'
import initialState from '../store/initialState'
import { List, Map } from 'immutable'

const setLike = (teachers_list, payload) => {
    const teacherIndex = teachers_list.findIndex(teacher => teacher.id === payload.id )
    return teachers_list.update( teacherIndex , teacher => teacher.like_count = 1 )
}

export default handleActions({
    [teachers.teacher.setLike]: (store, { payload }) => ({
        ...store,
        teachers_list: setLike(Map(store.teachers_list), payload) })
}, initialState.teachers)

