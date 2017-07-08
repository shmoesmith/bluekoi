import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import review from './review'

const rootReducer = combineReducers({
  user,
  flash,
  review
})

export default rootReducer
