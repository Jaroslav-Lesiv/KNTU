import { handleActions } from 'redux-actions';
import { auth, message } from '../actions'
import initialState from '../store/initialState'

export default handleActions({
      [message.newMessage]: (store, { payload }) => ({
          ...store,
          list: [ ...store.list, payload.message.id ],
          entities: { ...store.entities, [payload.message.id]: payload.message
        }
    })
}, initialState.message)
