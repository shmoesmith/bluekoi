import { combineReducers } from 'redux'
import user from './user'
import flash from './flash'
import reviews from './review'
import specials from './specialReducer'

const rootReducer = combineReducers({
  user,
  flash,
  reviews,
  specials,
})

export default rootReducer
