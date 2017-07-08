import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import reviews from './review'

const rootReducer = combineReducers({
  user,
  flash,
  reviews
})

export default rootReducer
